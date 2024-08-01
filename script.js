// Declaring constants for inputs and buttons used

const report = document.getElementById("report");
const setting = document.getElementById("setting");
const close = document.getElementById("close-setting-button");
const signIn = document.getElementById("sign-in");
const submit = document.getElementById("sign-in-button");
const others = document.getElementById("others");
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("short-break");
const longBreak = document.getElementById("long-break");
const buttons = document.querySelectorAll(".btn");
const buttonsFoc = document.querySelectorAll(".btnFoc");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const roundCount = document.getElementById("round-count");
const taskManagement = document.getElementById("task-management");
const addTask = document.getElementById("add-task");
const cancelBtn = document.getElementById("cancel-btn");
const saveBtn = document.getElementById("save-btn")
const timer = document.getElementById("time");
const okayBtn = document.getElementById("okay");
const pomodoroVal = document.getElementById("pomodoro-time");
const shortBreakVal = document.getElementById("short-break-setter");
const longBreakVal = document.getElementById("long-break-setter");

// Declaring variables for the values to be used

let pMinCount = localStorage.setItem("pMinCount", pomodoroVal.value);
let sMinCount = localStorage.setItem("sMinCount", shortBreakVal.value);
let lMinCount = localStorage.setItem("lMinCount", longBreakVal.value);

let isVisible = false;

let set;
let count = 59;
let paused = true;
let minCount = 24;
timer.textContent = `${minCount + 1}:00`;

// setting a zero before single digit numbers on timer
const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

// setting modifications to be undergone while selecting pomodoro option
const changePomodoro = () => {
  document.getElementById("myMain").classList.add("pomodoro-color");
  document.querySelector(".myMain").classList.add("pomodoro-color");
  document
    .getElementById("clock-container")
    .classList.add("pomodoro-container");
  timer.classList.add("pomodoro-container");
  startBtn.style.color = "#c15c5c";
  addTask.style.backgroundColor = "#ba4949";
  addTask.style.transition = "all 0.5s ease-in";
  document.getElementById("myMain").classList.remove("short-color");
  document.querySelector(".myMain").classList.remove("short-color");
  document
    .getElementById("clock-container")
    .classList.remove("short-container");
  document.getElementById("myMain").classList.remove("long-color");
  document.querySelector(".myMain").classList.remove("long-color");
  document.getElementById("clock-container").classList.remove("long-container");
  timer.classList.remove("short-container");
  timer.classList.remove("long-container");
  document
    .getElementById("short-break")
    .classList.remove("short-break-btn-focus");
  document
    .getElementById("long-break")
    .classList.remove("long-break-btn-focus");
  document.getElementById("modes").classList.remove("short-other-color");
  document.getElementById("pomodoro").classList.remove("short-other-color");
  document.getElementById("pomodoro").classList.remove("long-other-color");
  document.getElementById("long-break").classList.remove("short-other-color");
  document.getElementById("short-break").classList.remove("long-other-color");
  document.getElementById("modes").classList.remove("long-other-color");
  startBtn.style.color = "#ba4949";
  pauseBtn.style.color = "#ba4949";
};

// setting modifications to be undergone while selecting shortBreak option
const changeShort = () => {
  document.getElementById("myMain").classList.add("short-color");
  document.querySelector(".myMain").classList.add("short-color");
  document.getElementById("clock-container").classList.add("short-container");
  timer.classList.add("short-container");
  document.getElementById("short-break").classList.add("short-break-btn-focus");
  document.getElementById("modes").classList.add("short-other-color");
  document.getElementById("pomodoro").classList.add("short-other-color");
  document.getElementById("long-break").classList.add("short-other-color");
  document.getElementById("myMain").classList.remove("long-color");
  document.querySelector(".myMain").classList.remove("long-color");
  document.getElementById("clock-container").classList.remove("long-container");
  timer.classList.remove("long-container");
  document
    .getElementById("long-break")
    .classList.remove("long-break-btn-focus");
  document.getElementById("modes").classList.remove("long-other-color");
  document.getElementById("pomodoro").classList.remove("long-other-color");
  document.getElementById("long-break").classList.remove("long-other-color");
  document.getElementById("short-break").classList.remove("long-other-color");
  document.getElementById("modes").classList.remove("pomodoro-other-color");
  document.getElementById("pomodoro").classList.remove("pomodoro-focus");
  startBtn.style.color = "#38858a";
  pauseBtn.style.color = "#38858a";
  addTask.style.backgroundColor = "#38858a";
  addTask.style.transition = "all 0.5s ease-in";
};

// setting modifications to be undergone while selecting longBreak option
const changeLong = () => {
  document.getElementById("myMain").classList.add("long-color");
  document.querySelector(".myMain").classList.add("long-color");
  document.getElementById("clock-container").classList.add("long-container");
  timer.classList.add("long-container");
  document.getElementById("long-break").classList.add("long-break-btn-focus");
  document.getElementById("modes").classList.add("long-other-color");
  document.getElementById("pomodoro").classList.add("long-other-color");
  document.getElementById("short-break").classList.add("long-other-color");
  document.getElementById("myMain").classList.remove("short-color");
  document.querySelector(".myMain").classList.remove("short-color");
  document
    .getElementById("clock-container")
    .classList.remove("short-container");
  timer.classList.remove("short-container");
  document
    .getElementById("short-break")
    .classList.remove("short-break-btn-focus");
  document.getElementById("modes").classList.remove("short-other-color");
  document.getElementById("pomodoro").classList.remove("short-other-color");
  document.getElementById("long-break").classList.remove("short-other-color");
  document.getElementById("modes").classList.remove("pomodoro-other-color");
  document.getElementById("pomodoro").classList.remove("pomodoro-focus");
  startBtn.style.color = "#397097";
  pauseBtn.style.color = "#397097";
  addTask.style.backgroundColor = "#397097";
  addTask.style.transition = "all 0.5s ease-in";
};

function pauseTimer(timer) {
  clearTimeout(timer);
}

// change focus on the options
const removeFocus = () => {
  buttonsFoc.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};

pomodoro.addEventListener("click", () => {
  removeFocus();
  changePomodoro();
  buttons.forEach((btn) => {
    btn.style.backgroundColor = "#c15c5c";
    btn.style.transition = "all 0.5s ease-in";
  });

  pomodoro.classList.add("btn-focus");
  pauseTimer();
  // minCount = pMinCount;
  minCount = localStorage.getItem("pMinCount");
  count = 59;
  timer.textContent = `${minCount}:00`;
});

shortBreak.addEventListener("click", () => {
  removeFocus();

  buttons.forEach((btn) => {
    btn.style.backgroundColor = "#4c9196";
  });

  changeShort();
  shortBreak.classList.add("btn-focus");
  console.log(shortBreak);
  pauseTimer();
  // minCount = sMinCount;
  minCount = localStorage.getItem("sMinCount");
  count = 59;
  timer.textContent = `${minCount}:00`;
});

longBreak.addEventListener("click", () => {
  active = "long";
  removeFocus();

  buttons.forEach((btn) => {
    btn.style.backgroundColor = "#5d8aa9";
  });
  changeLong();
  longBreak.classList.add("btn-focus");
  pauseTimer();
  minCount = localStorage.getItem("lMinCount");
  count = 59;
  timer.textContent = `${minCount}:00`;
});

pauseBtn.addEventListener("click", (pauseTime) => {
  paused = true;
  clearInterval(set);
  // switching from pause button to start button
  startBtn.classList.add("show");
  pauseBtn.classList.add("hide");
  pauseBtn.classList.remove("show");
});

startBtn.addEventListener("click", () => {
  // switching from start button to pause button
  pauseBtn.classList.add("show");
  startBtn.classList.add("hide");
  startBtn.classList.remove("show");
  // timer count down
  if (paused) {
    paused = false;
    timer.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      timer.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 59;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
});

signIn.addEventListener("click", () => {
  document.getElementById("show-sign-in-options").classList.remove("hide");
  others.classList.add("hide");
  taskManagement.classList.add("hide");

});
submit.addEventListener("click", () =>{
  document.getElementById("show-sign-in-options").classList.add("hide");
});
setting.addEventListener("click", () => {
  document.getElementById("show-setting-options").classList.remove("hide");
});
close.addEventListener("click", () => {
  document.getElementById("show-setting-options").classList.add("hide");
});
others.addEventListener("click", () => {
  isVisible = !isVisible;

  if (isVisible) {
    document.getElementById("myDropdown").classList.remove("hide");
    document.getElementById("myDropdown2").classList.add("hide");
  } else {
    document.getElementById("myDropdown").classList.add("hide");
    
  }
});

taskManagement.addEventListener("click", () => {
  isVisible = !isVisible;

  if (isVisible) {
    document.getElementById("myDropdown2").classList.remove("hide");
    document.getElementById("myDropdown").classList.add("hide");
  } else {
    document.getElementById("myDropdown2").classList.add("hide");
    
  }
});

// document.getElementById("myDropdown").classList.remove("hide")

okayBtn.addEventListener("click", () => {

  setValues();

  console.log("Updated Values:", pMinCount, sMinCount, lMinCount);
  console.log("clickeddddd");
  document.getElementById("show-setting-options").classList.add("hide");
});

function setValues() {
  localStorage.setItem("pMinCount", pomodoroVal.value);
  localStorage.setItem("sMinCount", shortBreakVal.value);
  localStorage.setItem("lMinCount", longBreakVal.value);
  document.getElementById("show-setting-options").classList.add("hide");
}

addTask.addEventListener("click", () => {
  addTask.classList.add("hide");
  document
    .getElementById("show-popup-add-task")
    .classList.remove("another-hide");
    document.getElementById("myDropdown").classList.add("hide");
    document.getElementById("myDropdown2").classList.add("hide");
});

cancelBtn.addEventListener("click", () => {
  addTask.classList.remove("hide");
  document
  .getElementById("show-popup-add-task")
  .classList.add("another-hide");
});

saveBtn.addEventListener("click", () => {
  addTask.classList.remove("hide");
  document
  .getElementById("show-popup-add-task")
  .classList.add("another-hide");
});

