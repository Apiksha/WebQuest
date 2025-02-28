function checkClue() {
    let userInput = document.getElementById("clueInput").value.trim().toLowerCase();
    let correctClue = atob("aWxsdXNpb24="); 
    let messageBox = document.getElementById("message");

    if (userInput === correctClue) {
        messageBox.style.color = "green";
        messageBox.textContent = "Correct! Moving to the next level...";
        setTimeout(() => {
            window.location.href = "ghostlyTrail.html"; 
        }, 2000);
    } else {
        messageBox.style.color = "red";
        messageBox.textContent = "Wrong clue! Try again.";
    }
}

function revealClue() {
    let clueElement = document.getElementById("clue");

    setInterval(() => {
        let computedColor = window.getComputedStyle(clueElement).color;

        if (computedColor === "rgb(0, 0, 0)") {
            clueElement.textContent = atob(clueElement.getAttribute("data")); 
        }
    }, 500); 
}
document.addEventListener("DOMContentLoaded", revealClue);

// styling 
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
