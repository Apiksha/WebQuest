// Console Interaction Challenge
console.log("%cYou are on the right track! Solve this to proceed:", "color: green; font-size: 14px;");
console.log("What JavaScript function logs messages to the console? Type your answer below: (write answer in the format : consoleChallenge('answer'))");

window.consoleChallenge = function(answer) {
    if (answer.toLowerCase() === 'console.log') {
        console.log("%cCorrect! Now solve this riddle:", "color: blue; font-size: 14px;");
        console.log("I start as the string '1'. Then, I turn into the number 1 and combine with myself. Later, I AND with true, which changes my value. What have I become?");
        
        document.getElementById("checkButton").addEventListener("click", function() {
            let riddleAnswer = document.getElementById("answerInput").value.trim();
        
            if (riddleAnswer === "1") { 
                console.log("%cWell done! Redirecting you to the next challenge...", "color: purple; font-size: 14px;");
                document.getElementById("result").innerHTML = "<p style='color: green;'>Correct! Redirecting...</p>";
                setTimeout(() => {
                    window.location.href = "hiddenTrail.html";
                }, 2000);
            } else {
                console.log("%cIncorrect. Try again!", "color: red; font-size: 12px;");
                document.getElementById("result").innerHTML = "<p style='color: red;'>Incorrect. Try again!</p>";
            }
        });
    }
};
