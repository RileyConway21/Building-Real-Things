const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="end"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 00;
let itsRunning = false;
let interval;


function startTimer() {
    if (itsRunning)return;

    itsRunning = true;
interval = setInterval(incrementTimer, 1000) ;
    
}

function stopTimer() {
    if (itsRunning)return;
    itsRunning = false;
clearInterval(interval);
}

function resetTimer() {
stopTimer();

timerTime = 0;
minutes.innerText = '00';
seconds.innerText = '00';
}

function incrementTimer() {
        timerTime++;
        
    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;
    console.log({ numOfMinutes, numOfSeconds })
    
        seconds.innerText = pad(numOfMinutes);
        minutes.innerText = pad(numOfMinutes);
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
    // if (number < 10) {
    //     return '0' + number;
    // }else{
    //     return number;
    // }
}


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);