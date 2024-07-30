const report = document.getElementById("report");
const setting = document.getElementById("setting");
const close = document.getElementById("close-setting-button");
const signIn = document.getElementById("sign-in");
const others = document.getElementById("others");
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("short-break");
const longBreak = document.getElementById("long-break");
const buttons = document.querySelectorAll(".btn");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const roundCount = document.getElementById("round-count");
const taskManagement = document.getElementById("task-management");
const addTask = document.getElementById("add-task");
const timer = document.getElementById("time");
const okayBtn = document.getElementById("okay");
const pomodoroVal = document.getElementById("pomodoro-time");
const shortBreakVal = document.getElementById("short-break-setter");
const longBreakVal = document.getElementById("long-break-setter");

const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-focus");
    });
};

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var isTimerRunning = true;
    const intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;


        if (--timer < -1) {
            timer = 0;
            let i = 1;
            clearInterval(intervalId);
            alert("Well done!!!");

            document.getElementById("round-count").innerHTML = `#${i + 1}`;
            
            return;
            
        }

    return;
           
        
    }, 1000);

    
}


startBtn.addEventListener("click", () => {
    pauseBtn.classList.add("show");
    startBtn.classList.add("hide");
    startBtn.classList.remove("show");
    var fiveMinutes = 60 * 1/9,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
});

pauseBtn.addEventListener("click", (pauseTime) => {
    startBtn.classList.add("show");
    pauseBtn.classList.add("hide");
    pauseBtn.classList.remove("show");



});

pomodoro.addEventListener("click", () => {
    removeFocus()
    pomodoro.classList.add("btn-focus");
    var pomMinutes = 60 * 10;

    timer.textContent = `${pomMinutes}:00`;
        display = document.querySelector('#time');
    startTimer(longMinutes, display);
});

shortBreak.addEventListener("click", () => {
    removeFocus()
    shortBreak.classList.add("btn-focus");
});

longBreak.addEventListener("click", () => {
    removeFocus()
    longBreak.classList.add("btn-focus");
});

// restartBtn.addEventListener

signIn.addEventListener("click", () => {
    document.getElementById("show-sign-in-options").classList.remove("hide")
});
setting.addEventListener("click", () => {
    document.getElementById("show-setting-options").classList.remove("hide");
});
close.addEventListener("click", () => {
    document.getElementById("show-setting-options").classList.add("hide");
});

addTask.addEventListener("click", () => {

    addTask.classList.add("hide")
    document.getElementById("show-popup-add-task").classList.remove("another-hide");
   
});






