const timerSound = new Audio("ding.mp3");
const screen = document.getElementById("screen");
const ears = document.getElementById("ears");

let eyeUp = true;
let isReacting = false;

/* ---------- IDLE EYE MOVEMENT ---------- */

function idleEyes() {
  if (isReacting) return;

  screen.src = eyeUp
    ? "images/Idle 2 down.png"
    : "images/Idle 1 up.png";

  eyeUp = !eyeUp;
}

setInterval(idleEyes, 1200); // gentle bob

/* ---------- EAR TWITCH ---------- */

function earTwitch() {
  if (isReacting) return;

  const angle = Math.random() > 0.5 ? 8 : -8; // small tilt
  ears.style.transform = `rotate(${angle}deg)`;

  setTimeout(() => {
    ears.style.transform = "rotate(0deg)";
  }, 260);
}

setInterval(earTwitch, 9000);

/* ---------- CLICK REACTION ---------- */

screen.addEventListener("click", () => {
  isReacting = true;

  // Show angry face instead of idle down
  screen.src = "images/Angry.png";

  setTimeout(() => {
    // Return to normal idle face
    screen.src = "images/Idle 1 up.png";
    isReacting = false;
  }, 600);
});

// Mouse scroll reaction
window.addEventListener("wheel", () => {
  if (isReacting) return; // prevent overlap with angry click

  isReacting = true;
  screen.src = "images/Happy.png";

  setTimeout(() => {
    screen.src = "images/Idle 1 up.png"; // back to idle face
    isReacting = false;
  }, 1200); // show happy face for ~1.2s
});


let totalTime = 30 * 60;
let timer;
let running = false;

function updateDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  document.getElementById("timer-display").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  totalTime = 30 * 60;
  updateDisplay();
}

updateDisplay();

function startTimer() {
  console.log("START CLICKED");

  if (running) return;
  running = true;

  timer = setInterval(() => {
    if (totalTime > 0) {
      totalTime--;
      updateDisplay();
    } else {
      clearInterval(timer);
      running = false;

      document.getElementById("screen").src =
        "images/Happy.png";

      timerSound.play();
        alert("🎉 Study session completed!");
        document.getElementById("screen").src = "images/Happy.png";
    }
  }, 1000);
}


