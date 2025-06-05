import { fetchRandomCharacter } from "./util.js";
import { incrementCorrectAnswers } from "./util2.js";

document.addEventListener("DOMContentLoaded", async () => {
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
            feedbackMessage.textContent = "✔️ Correct!";
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
        let options = [correct, "Goku", "Vegeta", "Frieza"];
        return options.sort(() => Math.random() - 0.5);
    }

    resetScore(); // Updated Section: Reset score when the page loads
    loadGame(); // Start game on page load
});



















// import { fetchRandomCharacter, incrementCorrectAnswers } from './util.js';
 
// document.addEventListener("DOMContentLoaded", async () => {
//     const imageElement = document.getElementById("fighter-image");
//     const optionButtons = document.querySelectorAll(".option-btn");
//     const feedbackMessage = document.getElementById("feedback-message");

//     let correctAnswer = "";
    
//     //start of game
//     async function loadGame() {
//         const characterData = await fetchRandomCharacter();
//         imageElement.src = characterData.image;
//         correctAnswer = characterData.name;

//         const options = generateOptions(correctAnswer);
//         optionButtons.forEach((btn, index) => {
//             btn.textContent = options[index];
//             btn.onclick = () => checkAnswer(btn.textContent);
//         });
//     }

//     function generateOptions(correct) {
//         let options = [correct, "Goku", "Vegeta", "Frieza"];
//         return options.sort(() => Math.random() - 0.5); // Shuffle options
//     }

//     function checkAnswer(selected) {
//         if (selected === correctAnswer) {
//             feedbackMessage.textContent = "✔️ Correct!";
//             feedbackMessage.style.color = "green";
//         } else {
//             feedbackMessage.textContent = "❌ Wrong! Try Again.";
//             feedbackMessage.style.color = "red";
//         }
//         setTimeout(loadGame, 2000); // Load next round
//     }

//    loadGame(); // Start game on page load
// });