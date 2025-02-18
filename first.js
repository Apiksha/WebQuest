const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow frontend requests
app.use(bodyParser.json());

// Correct answer for first level
const correctAnswer = "network";
let accessGranted = false;

// Route to check the second level answer
app.post('/check-answer', (req, res) => {
    const { answer } = req.body;

    if (answer.trim().toLowerCase() === "dyohtml") {
        res.json({ correct: true, nextPage: "second.html" });
    } else {
        res.json({ correct: false, message: "Incorrect! Keep searching." });
    }
});

// Route to check the first answer (this part is needed for the hidden clue)
app.post('/check-answer2', (req, res) => {
    const userAnswer = req.body.answer.trim().toLowerCase();
    
    if (userAnswer === correctAnswer) {
        accessGranted = true; // Allow access to the hidden clue
        res.json({ correct: true });
    } else {
        accessGranted = false;
        res.json({ correct: false });
    }
});

// Serve the hidden clue ONLY if the answer was correct
app.get('/hidden-clue', (req, res) => {
    if (accessGranted) {
        res.json({ message: "Great job! The next step is at <a href='third.html'>third.html</a>" });
        accessGranted = false; // Reset access after serving clue
    } else {
        res.status(403).json({ error: "You haven't solved the riddle yet!" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
