document.getElementById('checkButton').addEventListener('click', checkAnswer);

function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value;
    const hiddenValue1 = "1";
    const hiddenValue2 = 1;
    const hiddenValue3 = true;
    
    const correctAnswer = (hiddenValue1 + hiddenValue2) && (hiddenValue3 + hiddenValue2);
    
    if (userAnswer == correctAnswer) {
        document.getElementById('result').textContent = "Correct! You've cracked the logic. Next step: find the hidden CSS property.";
        console.log("Next clue: a CSS property is hiding some text.");
    } else {
        document.getElementById('result').textContent = "Incorrect. Try again.";
        document.getElementById('hint').style.display = 'block';
        giveHint();
    }
}

function giveHint() {
    document.getElementById('hint').textContent = "Hint: Some important values are hidden in the script. Look closely!";
    console.log("Look at the hidden clues in the HTML file.");
}

// Console Interaction Challenge
console.log("%cYou are on the right track! Solve this to proceed:", "color: green; font-size: 14px;");
console.log("What JavaScript function logs messages to the console? Type your answer below: (write answer in the format : consoleChallenge('answer'))");

window.consoleChallenge = function(answer) {
    if (answer.toLowerCase() === 'console.log') {
        console.log("%cCorrect! Now solve this riddle:", "color: blue; font-size: 14px;");
        console.log("I start as a single string and then merge with myself in numeric form. In the end, a boolean and I merge changing my value. What have I become?");
    } else {
        console.log("%cIncorrect. Try again!", "color: red; font-size: 12px;");
    }
};