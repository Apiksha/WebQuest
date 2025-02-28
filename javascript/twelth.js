function checkFile() {
    let input = document.getElementById("filename-input").value.trim();
    let fileHint = document.getElementById("file-hint");
    
    if (input.toLowerCase() === "secrets.txt") {
        fileHint.innerHTML = "Good job! Now open <a href='secrets.txt' target='_blank'>secrets.txt</a> in a new tab.";
    } else {
        fileHint.textContent = "Try again! Think about the puzzle carefully.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let finalInput = document.createElement("input");
    finalInput.setAttribute("id", "final-answer");
    finalInput.setAttribute("placeholder", "Enter final keyword...");
    finalInput.style.display = "none";
    
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-final");
    submitButton.textContent = "Submit Final Answer";
    submitButton.style.display = "none";
    submitButton.onclick = checkFinalAnswer;
    
    document.body.appendChild(finalInput);
    document.body.appendChild(submitButton);
});

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        let finalInput = document.getElementById("final-answer");
        let submitButton = document.getElementById("submit-final");
        finalInput.style.display = "block";
        submitButton.style.display = "block";
    }
});

function checkFinalAnswer() {
    let finalInput = document.getElementById("final-answer").value.trim();
    if (finalInput.toLowerCase() === "nextlevel") {
        alert("Congratulations! You have unlocked Level 13.");
        window.location.href = "thirteen.html";
    } else {
        alert("Incorrect! Keep searching the styles.");
    }
}
