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





