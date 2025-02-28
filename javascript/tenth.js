const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const clueDiv = document.getElementById("clue");
const answerInput = document.getElementById("answerInput");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");

// Step 1: Console Clue
console.log("%cThere is a hidden path... but only those who see beyond can find it.", "color: cyan; font-size: 16px;");
console.log("%cCheck the page styles and make the 'Toggle Dark Mode' button visible.", "color: yellow; font-size: 14px;");

// Step 2: Clicking Toggle Button Reveals a Clue AND Toggles Dark Mode
toggleDarkModeBtn.addEventListener("click", () => {
    // Toggle dark/light mode
    document.body.classList.toggle("light-mode");

    // Reveal the next hint
    clueDiv.style.display = "block";
    clueDiv.textContent = "Find the answer in the console...";

    // Reveal the console question
    console.log("%cAnswer this question: Which console command is used to display an error message?", "color: yellow; font-size: 14px;");
    console.log("%cType your answer as a function call: submitAnswer('yourAnswer')", "color: lightgreen; font-size: 14px;");
});

// Step 3: Player must answer correctly in the console
window.submitAnswer = function(answer) {
    if (answer.toLowerCase() === "console.err()") {
        console.log("%cCorrect! The secret word is: 'shadow'.", "color: green; font-size: 14px;");
        
        // Step 4: Show input field on the page
        answerInput.style.display = "block";
    } else {
        console.log("%cWrong answer! Try again.", "color: red; font-size: 14px;");
    }
}

// Step 5: Player enters secret word
answerInput.addEventListener("input", () => {
    if (answerInput.value.toLowerCase() === "shadow") {
        message.textContent = "Correct! You may proceed.";
        message.style.color = "green";
        nextBtn.classList.add("active");
        nextBtn.style.display = "inline-block";
    } else {
        message.textContent = "Wrong answer! Keep searching.";
        message.style.color = "red";
    }
});

// Step 6: Restart or Proceed
restartBtn.addEventListener("click", () => {
    location.reload();
});

nextBtn.addEventListener("click", () => {
    window.location.href = "logic.html";
});