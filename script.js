// script.js

// ✅ Pure function used for testing
export function getGreeting(hour) {
  if (hour < 12) return "Good morning 🌅";
  if (hour < 18) return "Good afternoon 🌞";
  return "Good evening 🌙";
}



// // ✅ Confetti animation (browser only)
// function createConfetti() {
//   if (typeof document === "undefined") return; // <-- prevents Jest errors

//   const count = 50;
//   for (let i = 0; i < count; i++) {
//     const confetti = document.createElement("div");
//     confetti.classList.add("confetti");

//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * 200; 
//     confetti.style.left = `${x}px`;
//     confetti.style.top = `-${y}px`;
//     confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;

//     const size = Math.random() * 8 + 4; 
//     confetti.style.width = `${size}px`;
//     confetti.style.height = `${size}px`;
//     confetti.style.animationDelay = `${Math.random() * 0.5}s`;
    
//     document.body.appendChild(confetti);
//     setTimeout(() => confetti.remove(), 3000); 
//   }
// }

function createConfetti() {
  console.log("HOLA");
  if (typeof document === "undefined") return;
  const fragment = document.createDocumentFragment();
  const count = 50;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * 200;
    confetti.style.left = `${x}px`;
    confetti.style.top = "$0px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    const size = Math.random() * 8 + 4;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.animationDelay = `${Math.random() * 0.5}s`;
    fragment.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }

  document.body.appendChild(fragment);
}


// ✅ Sparkle animation (browser only)
function createSparkles() {
  if (typeof document === "undefined") return; // <-- prevents Jest errors

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

// ✅ Only run UI code in browser, not in Jest
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const hour = new Date().getHours();
    const greeting = getGreeting(hour);

    // change title dynamically
    title.textContent = `${greeting} — Ugliest UI Ever (But Not Anymore!) 😱`;

    // smooth color animation
    setInterval(() => {
      const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
      title.style.color = color;
    }, 1200);

    // confetti effect on page load
    createConfetti(); 

    // sparkle button event
      const button = document.getElementById("magicButton");
  if (button) {
    button.addEventListener("click", () => {
      createSparkles();
      createConfetti(); // ✅ confetti now works on click
    });
  }
});

}
