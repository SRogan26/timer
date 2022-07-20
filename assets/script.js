//Let's make a timer
const userHours = document.querySelector("#hoursInput");
const userMinutes = document.querySelector("#minInput");
const userSeconds = document.querySelector("#secInput");
const hrDisplay = document.querySelector('#hrDisplay');
const minDisplay = document.querySelector('#minDisplay');
const secDisplay = document.querySelector('#secDisplay');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const inputArea = document.getElementById('inputs');

let timerId;
let totalTime = 0;

let hrInput = userHours.value * 1;
let minInput = userMinutes.value * 1;
let secInput = userSeconds.value * 1;
//updates time display
function updateTimeDisplay(hours, minutes, seconds) {
    hrDisplay.innerText = hours;
    minDisplay.innerText = minutes < 10 ? '0' + minutes : minutes;
    secDisplay.innerText = seconds < 10 ? '0' + seconds : seconds;
}
//Update timer display to show input values on initial start of countdown
function setInitialDisplay(){
    hrInput = userHours.value * 1;
    minInput = userMinutes.value * 1;
    secInput = userSeconds.value * 1;
    if (!timerId) {
        updateTimeDisplay(hrInput, minInput, secInput);
    }
}
//function to countdown and update timer display
function updateCountdown() {
    if(totalTime === 0) return;
    totalTime--

    const hours = Math.floor(totalTime / 60 / 60);
    let minutes = Math.floor(totalTime / 60 % 60);
    let seconds = totalTime % 60;

    updateTimeDisplay(hours, minutes, seconds);
    //reset timerId and start button inner text when time runs out
    if (totalTime === 0) {
        clearInterval(timerId);
        timerId = null;
        startBtn.innerHTML = 'Start';
    };
}

//Event listeners to update display when changing time entered
userHours.addEventListener('input', () => {
    setInitialDisplay();
})
userMinutes.addEventListener('input', () => {
    setInitialDisplay();
})
userSeconds.addEventListener('input', () => {
    setInitialDisplay();
})

//Click start/pause button
startBtn.addEventListener('click', function () {  
    //if initial timer start
    if (!timerId) {
        totalTime = (hrInput * 60 * 60) + (minInput * 60) + secInput * 1;
        if(totalTime === 0) return;
        startBtn.innerText = 'Pause';
        setInitialDisplay();
        timerId = setInterval(updateCountdown, 999);
    //if timer was running and is currently paused
    }else if(startBtn.innerText === 'Start'){
        startBtn.innerText = 'Pause';
        timerId = setInterval(updateCountdown, 999);
    //if timer is currently running and you want to pause
    }else {
        startBtn.innerText = 'Start';
        clearInterval(timerId);
        timerId = -1;
    }
})
//Click Reset Button
resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    startBtn.innerHTML = 'Start';
    setInitialDisplay();
})