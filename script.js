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

let meditationTime = 10; // In minutes
let timeLeftInSeconds = meditationTime * 60;
let isPlaying = false;
let timerInterval = null;

// Format seconds into mm:ss
const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Update display
const updateTimeDisplay = () => {
    timeDisplay.textContent = formatTime(timeLeftInSeconds);
};

// Set time from buttons
const setTime = (mins) => {
    meditationTime = mins;
    timeLeftInSeconds = mins * 60;
    updateTimeDisplay();
    stopTimer(); // Reset if time changed while playing
};

smallerMins.addEventListener('click', () => setTime(2));
mediumMins.addEventListener('click', () => setTime(5));
longMins.addEventListener('click', () => setTime(10));

// Timer logic
const startTimer = () => {
    timerInterval = setInterval(() => {
        if (timeLeftInSeconds > 0) {
            timeLeftInSeconds--;
            updateTimeDisplay();
        } else {
            stopTimer();
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timerInterval);
    isPlaying = false;
    playPauseBtn.textContent = "Play";
    videoElement.pause();
    audioElement.pause();
};

// Play/Pause logic
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopTimer();
    } else {
        isPlaying = true;
        playPauseBtn.textContent = "Pause";
        videoElement.play();
        audioElement.play();
        startTimer();
    }
});

// Sound switching logic
const switchMedia = (audioSrc, videoSrc) => {
    const wasPlaying = isPlaying;
    audioElement.src = audioSrc;
    videoElement.src = videoSrc;

    if (wasPlaying) {
        audioElement.play();
        videoElement.play();
    }
};

soundBeach.addEventListener('click', () => {
    switchMedia("Sounds/beach.mp3", "video/beach.mp4");
});

soundRain.addEventListener('click', () => {
    switchMedia("Sounds/rain.mp3", "video/rain.mp4");
});

// Initialize display
updateTimeDisplay();
