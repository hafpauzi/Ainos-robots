const screen = document.getElementById("screen");
const antenna = document.getElementById("antenna");

let isReacting = false;

/* ---------- SCREEN BLINK ---------- */

function blink() {
  if (isReacting) return;

  screen.src = "images/screen_blink.png";

  setTimeout(() => {
    screen.src = "images/screen_open.png";
  }, 180); // blink speed
}

setInterval(blink, 1800); // blink every ~2s

/* ---------- ANTENNA TWITCH ---------- */

function antennaTwitch() {
  if (isReacting) return;

  const direction = Math.random() > 0.5
    ? "images/antenna_left.png"
    : "images/antenna_right.png";

  antenna.src = direction;

  setTimeout(() => {
    antenna.src = "images/antenna_idle.png";
  }, 250);
}

setInterval(antennaTwitch, 14000); // every 14s

/* ---------- CLICK REACTION ---------- */

screen.addEventListener("click", () => {
  isReacting = true;

  screen.src = "images/screen_blink.png";
  antenna.src = "images/antenna_right.png";

  setTimeout(() => {
    antenna.src = "images/antenna_idle.png";
    screen.src = "images/screen_open.png";
    isReacting = false;
  }, 600);
});
