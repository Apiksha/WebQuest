let sequence = [];
const correctSequence = ["box3", "box7", "box6"]; // The correct path
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

// Add event listeners to all clickable boxes
document.querySelectorAll(".clickable").forEach(box => {
    box.addEventListener("click", () => handleClick(box.id));
});

// Handle box clicks
function handleClick(boxId) {
    sequence.push(boxId);

    // Check if the player clicked correctly
    if (sequence[sequence.length - 1] !== correctSequence[sequence.length - 1]) {
        message.textContent = "Wrong path! Start again.";
        message.style.color = "red";
        sequence = []; // Reset the sequence
        return;
    }

    // Change color to show selection
    document.getElementById(boxId).style.backgroundColor = "#4CAF50";

    // Check if the sequence is complete
    if (sequence.length === correctSequence.length) {
        message.textContent = "You found the hidden path!";
        message.style.color = "green";
        nextBtn.classList.add("active");
        nextBtn.disabled = false;
    }
}

// Restart button functionality
restartBtn.addEventListener("click", () => {
    location.reload(); // Reloads the page
});

// proceed to next level
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "tenth.html";
});

