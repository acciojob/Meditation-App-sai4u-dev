//your JS code here. If required.
const playBtn = document.querySelector(".play");
const audio = document.getElementById("audio");
const video = document.getElementById("video");
const timeDisplay = document.querySelector(".time-display");
const timeButtons = document.querySelectorAll("#time-select button");
const soundButtons = document.querySelectorAll(".sound-picker button");

let duration = 600; // default 10 mins
let currentTime = duration;
let timer;

// Update time display
function updateDisplay() {
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  timeDisplay.textContent = `${minutes}:${seconds}`;
}

// Play/Pause handler
playBtn.addEventListener("click", () => {
  if (audio.paused) {
	audio.play();
	video.play();
	playBtn.textContent = "⏸";
	timer = setInterval(() => {
	  if (currentTime > 0) {
		currentTime--;
		updateDisplay();
	  } else {
		clearInterval(timer);
		audio.pause();
		video.pause();
		playBtn.textContent = "▶";
	  }
	}, 1000);
  } else {
	audio.pause();
	video.pause();
	playBtn.textContent = "▶";
	clearInterval(timer);
  }
});

// Time selection
timeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
	if (btn.id === "smaller-mins") duration = 120;
	if (btn.id === "medium-mins") duration = 300;
	if (btn.id === "long-mins") duration = 600;
	currentTime = duration;
	updateDisplay();
  });
});

// Sound selection
soundButtons.forEach(btn => {
  btn.addEventListener("click", () => {
	if (btn.classList.contains("beach")) {
	  audio.src = "sounds/beach.mp3";
	  video.src = "sounds/beach.mp4";
	} else if (btn.classList.contains("rain")) {
	  audio.src = "sounds/rain.mp3";
	  video.src = "sounds/rain.mp4";
	}
	audio.load();
	video.load();
	if (!audio.paused) {
	  audio.play();
	  video.play();
	}
  });
});

updateDisplay();
