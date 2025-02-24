const car = document.getElementById("car");
const finish = document.getElementById("finish");
const walls = document.querySelectorAll(".wall");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const hiddenInput = document.getElementById("hiddenInput");

let posX = 10;
let posY = 10;
const speed = 10;

// Move the car
document.addEventListener("keydown", (event) => {
    let newX = posX;
    let newY = posY;

    if (event.key === "ArrowUp") newY -= speed;
    if (event.key === "ArrowDown") newY += speed;
    if (event.key === "ArrowLeft") newX -= speed;
    if (event.key === "ArrowRight") newX += speed;

    if (!checkCollision(newX, newY)) {
        posX = newX;
        posY = newY;
        car.style.left = posX + "px";
        car.style.top = posY + "px";
    }

    if (checkWin()) {
        message.textContent = "You reached the goal!";
        message.style.color = "green";
        nextBtn.classList.add("active");
        nextBtn.disabled = false;
    }
});

// Check collision with walls
function checkCollision(x, y) {
    for (let wall of walls) {
        let rect = wall.getBoundingClientRect();
        if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
            message.textContent = "Oops! Hit a wall. Solve the puzzle!";
            message.style.color = "red";
            return true;
        }
    }
    return false;
}

// Check if player reaches the goal
function checkWin() {
    let carRect = car.getBoundingClientRect();
    let finishRect = finish.getBoundingClientRect();
    return (
        carRect.left >= finishRect.left &&
        carRect.right <= finishRect.right &&
        carRect.top >= finishRect.top &&
        carRect.bottom <= finishRect.bottom
    );
}

// Decoding the Base64 clue when color is changed
document.addEventListener("change", () => {
    const clue = document.getElementById("encodedClue");
    if (clue.style.color === "red") {
        clue.textContent = atob(clue.textContent);
        clue.style.fontSize = "16px";
    }
});

// Checking the hidden input field
hiddenInput.addEventListener("input", (event) => {
    if (event.target.value === "red") {
        document.getElementById("wall2").style.display = "none"; // Remove the obstacle
        message.textContent = "Wall removed! Proceed.";
        message.style.color = "blue";
    }
});

// Restart button
restartBtn.addEventListener("click", () => {
    location.reload();
});

// Next level button
nextBtn.addEventListener("click", () => {
    window.location.href = "nextlevel.html";
});
