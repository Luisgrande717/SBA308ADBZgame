import { fetchRandomCharacter } from "./util.js";// IMPORTS FROM THE OTHER JS FILES
import { incrementCorrectAnswers } from "./util2.js";

document.addEventListener("DOMContentLoaded", async () => { //ensures the game logic begins only after the document is ready.
    const imageElement = document.getElementById("fighter-image");
    const optionButtons = document.querySelectorAll(".option-btn");
    const feedbackMessage = document.getElementById("feedback-message");
    const scoreboard = document.getElementById("scoreboard");

    let correctAnswer = "";

    // Updated Section: Reset score on page refresh
    function resetScore() {
        sessionStorage.setItem("score", 0); // Reset stored score
        scoreboard.textContent = "Score: 0"; // Update UI
    }

    function updateScoreboard() {
        const score = parseInt(sessionStorage.getItem("score")) || 0;
        scoreboard.textContent = `Score: ${score}`;
    }

    function checkAnswer(selected) {
        if (selected === correctAnswer) {
            feedbackMessage.textContent = "✔️ Correct!"; //WHO KNEW YOU CAN ADD EMOJI!! A: GOOGLE
            feedbackMessage.style.color = "green";
            incrementCorrectAnswers(); // Update score
            updateScoreboard(); // Refresh UI
        } else {
            feedbackMessage.textContent = "❌ Wrong! Try Again.";
            feedbackMessage.style.color = "red";
        }
        setTimeout(loadGame, 2000);
    }

    async function loadGame() {
        const characterData = await fetchRandomCharacter();
        imageElement.src = characterData.image;
        correctAnswer = characterData.name;

        const options = generateOptions(correctAnswer);
        optionButtons.forEach((btn, index) => {
            btn.textContent = options[index];
            btn.onclick = () => checkAnswer(btn.textContent);
        });
    }

    function generateOptions(correct) {
        let options = [correct, "Buu", "Raditz", "Frieza"];
        return options.sort(() => Math.random() - 0.5);
    }

    resetScore(); // Updated Section: Reset score when the page loads
    loadGame(); // Start game on page load
});

