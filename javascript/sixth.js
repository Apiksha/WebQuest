function checkClue() {
    let userInput = document.getElementById("clueInput").value.trim().toLowerCase();
    let correctClue = atob("aWxsdXNpb24="); 
    let messageBox = document.getElementById("message");

    if (userInput === correctClue) {
        messageBox.style.color = "green";
        messageBox.textContent = "Correct! Moving to the next level...";
        setTimeout(() => {
            window.location.href = "seventh.html"; 
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
