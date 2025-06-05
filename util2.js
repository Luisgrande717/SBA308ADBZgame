
let correctAnswers = 0;

// Function to track correct answers
export function incrementCorrectAnswers() {
    let correctAnswers = parseInt(sessionStorage.getItem("score")) || 0;
    correctAnswers++; // Increment score

    sessionStorage.setItem("score", correctAnswers); // Store in session

    const scoreElement = document.getElementById("scoreboard");
    if (scoreElement) {
        scoreElement.textContent = `Score: ${correctAnswers}`; // Update UI
    }
    return correctAnswers;
}