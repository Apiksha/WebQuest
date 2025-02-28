// javascript/twelth.js

const maze = document.getElementById('maze');
const quizModal = document.getElementById('quiz-modal');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const statusElement = document.getElementById('status');

const mazeWidth = 10;
const mazeHeight = 10;
let playerX = 0;
let playerY = 0;
let currentQuestionIndex = 0;
let mazeGrid = [];

const questions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
        correctAnswer: "HyperText Markup Language",
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: "color",
    },
    {
        question: "What is JavaScript primarily used for in web development?",
        options: ["Styling web pages", "Adding interactivity to web pages", "Structuring web pages", "Database management"],
        correctAnswer: "Adding interactivity to web pages",
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Digital Object Model", "Dynamic Object Model"],
        correctAnswer: "Document Object Model",
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<url>", "<href>"],
        correctAnswer: "<a>",
    },
    {
        question: "What is the purpose of the `<head>` tag in HTML?",
        options: ["To display the main content", "To define the document's metadata", "To create a footer", "To add images"],
        correctAnswer: "To define the document's metadata",
    },
    {
        question: "Which CSS selector targets all paragraph elements?",
        options: ["#paragraph", ".paragraph", "p", "*"],
        correctAnswer: "p",
    },
    {
        question: "What is a JavaScript function?",
        options: ["A variable", "A loop", "A block of reusable code", "A CSS style"],
        correctAnswer: "A block of reusable code",
    },
    {
        question: "What is an API?",
        options: ["A programming language", "A style sheet", "An interface for software interaction", "A database"],
        correctAnswer: "An interface for software interaction",
    },
    {
        question: "What is responsive design?",
        options: ["Designing for large screens only", "Designing for fast loading speeds", "Designing to adapt to different screen sizes", "Designing for print"],
        correctAnswer: "Designing to adapt to different screen sizes",
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        options: ["No difference", "`==` checks value, `===` checks value and type", "`===` checks value, `==` checks value and type", "Both are invalid"],
        correctAnswer: "`==` checks value, `===` checks value and type",
    },
    {
        question: "What is the purpose of the `localStorage` in web development?",
        options: ["To store data on the server", "To store data in the browser", "To style web pages", "To create animations"],
        correctAnswer: "To store data in the browser",
    },
    {
        question: "How do you open the browser's developer tools?",
        options: ["Ctrl+Shift+D", "F12", "Alt+D", "Ctrl+Alt+I"],
        correctAnswer: "F12",
    },
    {
        question: "Which of the following is a common JavaScript error?",
        options: ["StyleError", "TypeError", "LayoutError", "DesignError"],
        correctAnswer: "TypeError",
    },
    {
        question: "How do you debug CSS layout issues?",
        options: ["Using print statements", "Using browser developer tools", "Using a text editor", "Using a graphics program"],
        correctAnswer: "Using browser developer tools",
    },
    {
        question: "Why is semantic HTML important for accessibility?",
        options: ["It makes the code shorter", "It improves search engine rankings", "It provides meaning to content", "It adds visual effects"],
        correctAnswer: "It provides meaning to content",
    },
    {
        question: "What is a popular JavaScript framework?",
        options: ["Python", "Java", "React", "C++"],
        correctAnswer: "React",
    },
    {
        question: "What is npm?",
        options: ["A text editor", "A browser", "A package manager for JavaScript", "A database"],
        correctAnswer: "A package manager for JavaScript",
    },
    {
        question: "What does the `async` keyword do in JavaScript?",
        options: ["Creates a loop", "Defines a variable", "Declares an asynchronous function", "Adds CSS styles"],
        correctAnswer: "Declares an asynchronous function",
    },
    {
        question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
        options: ["To add a border", "To specify the image source", "To provide alternative text for images", "To add a caption"],
        correctAnswer: "To provide alternative text for images",
    },
    {
        question: "What is the purpose of the `viewport` meta tag?",
        options: ["To add JavaScript code", "To define the character set", "To control the viewport's size and scaling", "To add CSS styles"],
        correctAnswer: "To control the viewport's size and scaling",
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["To define a variable", "To refer to the current object", "To create a loop", "To handle errors"],
        correctAnswer: "To refer to the current object",
    },
    {
        question: "Which HTTP method is used to retrieve data from a server?",
        options: ["POST", "PUT", "DELETE", "GET"],
        correctAnswer: "GET",
    },
    {
        question: "What is the role of a 'callback' function in JavaScript?",
        options: ["To style elements", "To handle asynchronous operations", "To define variables", "To create loops"],
        correctAnswer: "To handle asynchronous operations",
    },
    {
        question: "What does the term 'RESTful API' refer to?",
        options: ["A programming language", "A software design architecture", "A database system", "A network protocol"],
        correctAnswer: "A software design architecture",
    },
    {
        question: "What is the purpose of 'version control' in software development?",
        options: ["To design user interfaces", "To track and manage changes to code", "To optimize website loading speeds", "To handle database queries"],
        correctAnswer: "To track and manage changes to code",
    },
    {
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        options: ["Queue", "Linked List", "Stack", "Tree"],
        correctAnswer: "Stack",
    },
    {
        question: "What is 'SQL' used for?",
        options: ["Styling web pages", "Managing relational databases", "Creating animations", "Handling network requests"],
        correctAnswer: "Managing relational databases",
    },
    {
        question: "What is the purpose of 'cookies' in web development?",
        options: ["To store data on the server", "To store data in the user's browser", "To style web pages", "To create animations"],
        correctAnswer: "To store data in the user's browser",
    },
    {
        question: "What does 'HTTPS' provide that 'HTTP' does not?",
        options: ["Faster loading speeds", "Encrypted communication", "Better SEO", "More accurate data retrieval"],
        correctAnswer: "Encrypted communication",
    },
    {
        question: "What is the purpose of a 'framework' in web development?",
        options: ["To write code directly", "To provide a structured foundation for building applications", "To design graphics", "To manage hardware"],
        correctAnswer: "To provide a structured foundation for building applications",
    },
];

function generateMaze() {
    // Predefined solvable maze
    mazeGrid = [
        ['path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall'],
        ['wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall'],
        ['wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall'],
        ['wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall'],
        ['wall', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall'],
        ['wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'path'],
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ];
}

function drawMaze() {
    maze.innerHTML = '';
    for (let y = 0; y < mazeHeight; y++) {
        for (let x = 0; x < mazeWidth; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if (mazeGrid[y][x] === 'wall') {
                cell.classList.add('wall');
            } else if (x === playerX && y === playerY) {
                cell.classList.add('player');
            } else if (x === 0 && y === 0) { 
                // Start position
                cell.classList.add('start');
                cell.textContent = "Start";
            } else if (x === mazeWidth - 1 && y === mazeHeight - 1) {
                // End position
                cell.classList.add('end');
                cell.textContent = "End";
            }

            maze.appendChild(cell);
        }
    }
}


function showQuizModal(moveCallback) {
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, moveCallback));
        optionsElement.appendChild(button);
    });
    quizModal.style.display = 'block';
}

function checkAnswer(selectedAnswer, moveCallback) {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        feedbackElement.textContent = "Correct!";
        setTimeout(() => {
            quizModal.style.display = 'none';
            feedbackElement.textContent = '';

            // Increment and cycle the question index
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                currentQuestionIndex = 0; // Cycle back to the first question
            }

            moveCallback();
        }, 1000);
    } else {
        feedbackElement.textContent = "Incorrect! Back to start.";
        setTimeout(() => {
            quizModal.style.display = 'none';
            feedbackElement.textContent = '';
            playerX = 0;
            playerY = 0;
            drawMaze();
        }, 1000);
    }
}

// Arrow key movement
document.addEventListener('keydown', (event) => {
    let newX = playerX;
    let newY = playerY;

    switch (event.key) {
        case 'ArrowUp':
            newY--;
            break;
        case 'ArrowDown':
            newY++;
            break;
        case 'ArrowLeft':
            newX--;
            break;
        case 'ArrowRight':
            newX++;
            break;
        default:
            return;
    }

    if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight && mazeGrid[newY][newX] === 'path') {
        showQuizModal(() => {
            playerX = newX;
            playerY = newY;
            drawMaze();

            if (playerX === mazeWidth - 1 && playerY === mazeHeight - 1) {
                statusElement.textContent = "Congratulations! Moving to next level.";
                setTimeout(() => {
                  window.location.href = "toggle.html";
                }, 2000); 
            }
        });
    }
});

// Initialization
generateMaze();
drawMaze();
showQuizModal(() => {
    drawMaze();
});