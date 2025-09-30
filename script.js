//your JS code here. If required.
const playPauseBtn = document.getElementById('play-pause-btn');
const videoElement = document.getElementById('meditation-video');
const audioElement = document.getElementById('meditation-audio');
const timeDisplay = document.getElementById('time-display');

const soundBeach = document.getElementById('sound-beach');
const soundRain = document.getElementById('sound-rain');

const smallerMins = document.getElementById('smaller-mins');
const mediumMins = document.getElementById('medium-mins');
const longMins = document.getElementById('long-mins');

let meditationTime = 10; // Default time is 10 minutes
let isPlaying = false;

const updateTimeDisplay = () => {
    timeDisplay.textContent = `${meditationTime}:0`;
};

// Set time based on the selected button
smallerMins.addEventListener('click', () => {
    meditationTime = 2;
    updateTimeDisplay();
});

mediumMins.addEventListener('click', () => {
    meditationTime = 5;
    updateTimeDisplay();
});

longMins.addEventListener('click', () => {
    meditationTime = 10;
    updateTimeDisplay();
});

// Play/Pause button
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        videoElement.pause();
        audioElement.pause();
        playPauseBtn.textContent = "Play";
    } else {
        videoElement.play();
        audioElement.play();
        playPauseBtn.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

// Switch to Beach sound
soundBeach.addEventListener('click', () => {
    audioElement.src = "Sounds/beach.mp3";
    videoElement.src = "video/beach.mp4";
    if (isPlaying) {
        audioElement.play();
        videoElement.play();
    }
});

// Switch to Rain sound
soundRain.addEventListener('click', () => {
    audioElement.src = "Sounds/rain.mp3";
    videoElement.src = "video/rain.mp4";
    if (isPlaying) {
        audioElement.play();
        videoElement.play();
    }
});
