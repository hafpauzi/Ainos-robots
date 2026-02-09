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

  const direction = Math.random() > 0.5
    ? "images/Ear left.png"
    : "images/Ear right.png";

  ears.src = direction;

  setTimeout(() => {
    ears.src = "images/Idle ears.png";
  }, 260);
}

setInterval(earTwitch, 9000);

/* ---------- CLICK REACTION ---------- */

screen.addEventListener("click", () => {
  isReacting = true;

  screen.src = "images/Idle 2 down.png";
  ears.src = "images/Ear right.png";

  setTimeout(() => {
    ears.src = "images/Idle ears.png";
    screen.src = "images/Idle 1 up.png";
    isReacting = false;
  }, 600);
});
