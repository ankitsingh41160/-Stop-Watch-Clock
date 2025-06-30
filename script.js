// Clock functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clockDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock display
updateClock();

// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;
let isRunning = false;

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
    if (!isRunning) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime += 1000;
            document.getElementById('stopwatchDisplay').textContent = formatTime(stopwatchTime);
        }, 1000);
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
    }
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').textContent = '00:00:00';
}

// Event Listeners
document.getElementById('startButton').addEventListener('click', startStopwatch);
document.getElementById('stopButton').addEventListener('click', stopStopwatch);
document.getElementById('resetButton').addEventListener('click', resetStopwatch);
