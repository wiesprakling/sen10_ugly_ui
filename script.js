// script.js

// New function for the confetti effect
function createConfetti() {
  const count = 50;
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Position the confetti randomly near the center top
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * 200; // Only in the top 200px

    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;

    // Apply a unique size and animation delay
    const size = Math.random() * 8 + 4; // 4px to 12px
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.animationDelay = `${Math.random() * 0.5}s`;
    
    document.body.appendChild(confetti);
    
    // Remove after animation
    setTimeout(() => confetti.remove(), 3000); 
  }
}

// script.js (Modified document.addEventListener)

document.addEventListener("DOMContentLoaded", () => {
  // ... (Your existing title change and smooth color animation code) ...

  // Run the confetti effect on page load! (Your requirement)
  createConfetti(); 

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
