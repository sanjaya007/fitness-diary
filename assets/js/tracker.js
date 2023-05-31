const mealPlanBtn = document.getElementById("mealPlanBtn");
const mealModalWrapper = document.getElementById("mealModalWrapper");

const startModalWrapper = document.getElementById("startModalWrapper");
const counterModalWrapper = document.getElementById("counterModalWrapper");
const histortyModalWrapper = document.getElementById("histortyModalWrapper");
const createModalWrapper = document.getElementById("createModalWrapper");
const calorieModalWrapper = document.getElementById("calorieModalWrapper");

const startWorkoutBtn = document.getElementById("startWorkoutBtn");
const startWorkoutBtns = document.querySelectorAll(".start-workout-btn");
const createWorkoutBtn = document.getElementById("createWorkoutBtn");
const workoutHistoryBtn = document.getElementById("workoutHistoryBtn");
const addWorkoutBtn = document.getElementById("addWorkoutBtn");
const seeProgressBtn = document.getElementById("seeProgressBtn");

const trackWorkoutType = document.getElementById("trackWorkoutType");

mealPlanBtn.addEventListener("click", function (e) {
  e.preventDefault();

  mealModalWrapper.classList.remove("hidden");
});

startWorkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  startModalWrapper.classList.remove("hidden");
});

startWorkoutBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const type = e.target.getAttribute("data-workout");

    trackWorkoutType.textContent = type;
    startModalWrapper.classList.add("hidden");
    counterModalWrapper.classList.remove("hidden");
  });
});

workoutHistoryBtn.addEventListener("click", function (e) {
  e.preventDefault();

  histortyModalWrapper.classList.remove("hidden");
});

createWorkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  createModalWrapper.classList.remove("hidden");
});

addWorkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  createModalWrapper.classList.add("hidden");
});

seeProgressBtn.addEventListener("click", function (e) {
  e.preventDefault();

  calorieModalWrapper.classList.remove("hidden");
});

// Get the necessary elements
var timerCounter = document.getElementById("timerCounter");
var startBtn = document.getElementById("startTimerBtn");
var pauseBtn = document.getElementById("pauseTimerBtn");

var timerInterval;
var seconds = 0;
var minutes = 0;

function startTimer() {
  // Disable the start button
  startBtn.disabled = true;

  // Start the timer interval
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // Format the timer display
  var formattedTime =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  // Update the timer display
  timerCounter.textContent = formattedTime;
}

function pauseTimer() {
  // Clear the timer interval
  clearInterval(timerInterval);

  // Enable the start button and change the pause button text to "Resume"
  startBtn.disabled = false;
  pauseBtn.textContent = "Resume";
  pauseBtn.removeEventListener("click", pauseTimer);
  pauseBtn.addEventListener("click", resumeTimer);
}

function resumeTimer() {
  // Change the resume button text back to "Pause"
  pauseBtn.textContent = "Pause";
  pauseBtn.removeEventListener("click", resumeTimer);
  pauseBtn.addEventListener("click", pauseTimer);

  // Start the timer interval again
  timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
  // Reset timer variables
  seconds = 0;
  minutes = 0;

  // Clear the timer interval
  clearInterval(timerInterval);

  // Reset the timer display to 00:00
  timerCounter.textContent = "00:00";

  // Enable the start button and change the pause button text to "Pause"
  startBtn.disabled = false;
  pauseBtn.textContent = "Pause";

  // Remove the resume event listener and add the pause event listener
  pauseBtn.removeEventListener("click", resumeTimer);
  pauseBtn.addEventListener("click", pauseTimer);
}

// Add event listeners to the buttons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

counterModalWrapper.addEventListener("click", function (e) {
  const elId = e.target.id;

  if (elId === "modalContainer") {
    resetTimer();
  }
});
