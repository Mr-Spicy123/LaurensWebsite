const playButton = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const seekSlider = document.getElementById("seekSlider");

// Create an audio object
const audio = new Audio("ambience-byron-bay-farmland-morning-bird-chatter-239928.mp3");

audio.addEventListener("loadedmetadata", () => {
    seekSlider.max = Math.floor(audio.duration);
  });

playButton.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
  });

  audio.addEventListener("timeupdate", () => {
    seekSlider.value = Math.floor(audio.currentTime);
  });
  
  seekSlider.addEventListener("input", () => {
    audio.currentTime = seekSlider.value;
  });