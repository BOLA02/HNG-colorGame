"use strict"
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F7C400", "#8E44AD", "#E74C3C"];
        let targetColor = "";
        let score = 0;

        const colorBox = document.getElementById("colorBox");
        const colorOptions = document.getElementById("colorOptions");
        const gameStatus = document.getElementById("gameStatus");
        const scoreDisplay = document.getElementById("score");
        const newGameButton = document.getElementById("newGameButton");

        function getRandomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function startGame() {
            targetColor = getRandomColor();
            colorBox.style.backgroundColor = targetColor;
            colorOptions.innerHTML = "";
            gameStatus.textContent = "";
            gameStatus.className = "";

            colors.forEach(color => {
                const button = document.createElement("button");
                button.style.backgroundColor = color;
                button.dataset.testid = "colorOption";
                button.addEventListener("click", () => checkGuess(color));
                colorOptions.appendChild(button);
            });
        }

        function checkGuess(color) {
            if (color === targetColor) {
                gameStatus.textContent = "Correct!";
                gameStatus.className = "correct";
                colorBox.style.transform = "scale(1.2)";
                setTimeout(() => colorBox.style.transform = "scale(1)", 500);
                score++;
            } else {
                gameStatus.textContent = "Wrong, try again!";
                gameStatus.className = "wrong";
            }
            scoreDisplay.textContent = score;
        }

        newGameButton.addEventListener("click", startGame);

        startGame();