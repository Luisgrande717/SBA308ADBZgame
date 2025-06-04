import { fetchRandomCharacter } from './util.js';
 
document.addEventListener("DOMContentLoaded", async () => {
    const imageElement = document.getElementById("fighter-image");
    const optionButtons = document.querySelectorAll(".option-btn");
    const feedbackMessage = document.getElementById("feedback-message");

    let correctAnswer = "";


    //start of game
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
        return options.sort(() => Math.random() - 0.5); // Shuffle options
    }

    function checkAnswer(selected) {
        if (selected === correctAnswer) {
            feedbackMessage.textContent = "✔️ Correct!";
            feedbackMessage.style.color = "green";
        } else {
            feedbackMessage.textContent = "❌ Wrong! Try Again.";
            feedbackMessage.style.color = "red";
        }
        setTimeout(loadGame, 2000); // Load next round
    }

   loadGame(); // Start game on page load
});