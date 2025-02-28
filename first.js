const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');  // ✅ Required for WebSocket
const WebSocket = require('ws'); 
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(bodyParser.json());

const server = http.createServer(app);  // ✅ Create an HTTP server

// ✅ Attach WebSocket to the server
const wss = new WebSocket.Server({ server });

// ✅ Serve static files (like `fourteen.html`)
app.use(express.static(path.join(__dirname)));

// ✅ WebSocket Logic: Send Clue as WebSocket Data
wss.on('connection', (ws) => {
    console.log("🔌 New WebSocket connection established.");
    ws.send("Welcome to the WebSocket server!");

    // ✅ Send the clue in WebSocket data after 10 seconds
    setTimeout(() => {
        const clueMessage = JSON.stringify({
            type: "clue",
            message: "🎉 Secret Clue: Go to final.html 🎉"
        });
        ws.send(clueMessage);
    }, 100);
})

// ✅ Game Logic Routes
const correctAnswer = "network";
let accessGranted = false;

// ✅ Check Level 1 answer
app.post('/check-answer', (req, res) => {
    const { answer } = req.body;
    if (answer.trim().toLowerCase() === "dyohtml") {
        res.json({ correct: true, nextPage: "second.html" });
    } else {
        res.json({ correct: false, message: "Incorrect! Keep searching." });
    }
});

// ✅ Check Level 2 answer
app.post('/check-answer2', (req, res) => {
    const userAnswer = req.body.answer.trim().toLowerCase();
    if (userAnswer === correctAnswer) {
        accessGranted = true;
        res.json({ correct: true });
    } else {
        accessGranted = false;
        res.json({ correct: false });
    }
});

// ✅ Serve the hidden clue ONLY if Level 1 was passed
app.get('/hidden-clue', (req, res) => {
    if (accessGranted) {
        res.json({ message: "Great job! The next step is at <a href='third.html'>third.html</a>" });
        accessGranted = false; // Reset access after serving clue
    } else {
        res.status(403).json({ error: "You haven't solved the riddle yet!" });
    }
});


// ✅ Correct Sequence (Adjust if filenames change)
const correctSequence = "fs";

// ✅ Route to Check the Sequence (Final Challenge)
app.post('/check-sequence', (req, res) => {
    const userSequence = req.body.sequence.toLowerCase().replace(/\s/g, '');

    if (userSequence === correctSequence) {
        res.json({ success: true, message: "🎉 Congratulations! You've completed the Web Treasure Hunt! Quickly fill the form to secure your rank : https://forms.gle/R2s7nmtfrXscXmaE6" });
    } else {
        res.json({ success: false, message: "❌ Incorrect! Try again." });
    }
});


// ✅ Start the server (Use `server.listen`, NOT `app.listen`)
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
