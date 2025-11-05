// script.js

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const hour = new Date().getHours();
  let greeting = "Welcome!";
  if (hour < 12) greeting = "Good morning 🌅";
  else if (hour < 18) greeting = "Good afternoon 🌞";
  else greeting = "Good evening 🌙";

  // change title dynamically
  title.textContent = `${greeting} — Ugliest UI Ever (But Not Anymore!) 😱`;

  // smooth color animation
  setInterval(() => {
    const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
    title.style.color = color;
  }, 1200);

  // sparkle button event
  const button = document.getElementById("magicButton");
  button.addEventListener("click", createSparkles);
});

function createSparkles() {
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
  }
}
