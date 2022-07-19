//Let's make a timer
const userHours = document.querySelector("#hoursInput");
const userMinutes = document.querySelector("#minInput");
const userSeconds = document.querySelector("#secInput");
//Using embedded for loops for hours:minutes:seconds
const hrDisplay = document.querySelector('#hrDisplay');
const minDisplay = document.querySelector('#minDisplay');
const secDisplay = document.querySelector('#secDisplay');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

let timerId;
startBtn.addEventListener('click', function () {
    if (!timerId) {
        hrDisplay.innerText = userHours.value;
        minDisplay.innerText = userMinutes.value * 1 < 10 ? '0' + userMinutes.value : userMinutes.value;
        secDisplay.innerText = userSeconds.value * 1 < 10 ? '0' + userSeconds.value : userSeconds.value;
        let totalTime = (userHours.value * 60 * 60) + (userMinutes.value * 60) + userSeconds.value * 1;
        function updateCountdown() {
            const hours = Math.floor(totalTime / 60 / 60);
            let minutes = Math.floor(totalTime / 60 % 60);
            let seconds = totalTime % 60;

            totalTime--

            hrDisplay.innerText = hours;
            minDisplay.innerText = minutes < 10 ? '0' + minutes : minutes;
            secDisplay.innerText = seconds < 10 ? '0' + seconds : seconds;

            console.log(totalTime);
            if (totalTime < 0) {
                clearInterval(timerId);
                timerId = null;
            };
        }
        updateCountdown();
        timerId = setInterval(updateCountdown, 999);
    }
})
resetBtn.addEventListener('click', function () {
    hrDisplay.innerText = userHours.value;
    minDisplay.innerText = userMinutes.value * 1 < 10 ? '0' + userMinutes.value : userMinutes.value;
    secDisplay.innerText = userSeconds.value * 1 < 10 ? '0' + userSeconds.value : userSeconds.value;
    clearInterval(timerId);
    timerId = null;
})