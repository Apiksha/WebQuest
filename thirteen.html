<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Level 11 - Secret Code Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #222;
            color: white;
        }

        h1 {
            color: #ffcc00;
        }

        #progress-bar {
            width: 0%;
            height: 20px;
            background-color: #ffcc00;
            transition: width 0.3s ease-in-out;
        }

        #progress-container {
            width: 50%;
            background-color: #444;
            margin: 20px auto;
            height: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 0px 10px #ffcc00;
        }

        #clue {
            display: none;
            font-size: 24px;
            color: #00ff00;
            margin-top: 20px;
            animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <h1>Enter the Secret Code!</h1>
    <p>Type the correct sequence to unlock the next level.</p>

    <div id="progress-container">
        <div id="progress-bar"></div>
    </div>

    <p id="clue">🎉 Secret Clue: Go to "sequence".html 🎉</p>

    <script>
        let sequence = ""; 
        let correctSequence = "";
        let progress = 0;

        // Fetch the correct sequence from the server
        fetch('http://localhost:3000/get-sequence')
            .then(response => response.json())
            .then(data => {
                correctSequence = data.sequence.toLowerCase(); // Ensure lowercase
                console.log("Correct Sequence:", correctSequence);
            })
            .catch(error => {
                console.error('Error fetching sequence:', error);
            });

        document.addEventListener("keydown", (event) => {
            if (!correctSequence) return; // Don't process if sequence is not loaded

            let typedLetter = event.key.toLowerCase(); // Convert input to lowercase
            let nextExpectedLetter = correctSequence[sequence.length]; // Expected next letter

            if (typedLetter === nextExpectedLetter) {
                sequence += typedLetter;
                progress = (sequence.length / correctSequence.length) * 100;
                document.getElementById("progress-bar").style.width = progress + "%";

                if (sequence === correctSequence) { // If full sequence is matched
                    document.getElementById("clue").style.display = "block";
                    console.log("Unlocked!");
                }
            } else {
                // Wrong letter entered → reset progress
                sequence = "";
                progress = 0;
                document.getElementById("progress-bar").style.width = "0%";
                console.log("Wrong input! Progress reset.");
            }
        });
    </script>
</body>
</html>
