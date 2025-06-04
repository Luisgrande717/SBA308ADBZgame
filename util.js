export async function fetchRandomCharacter() {
    const response = await fetch("https://dragonball-api.com/api/characters?page=1&limit=10");
    const data = await response.json();


    // Select a random character from the returned items
    const randomIndex = Math.floor(Math.random() * data.items.length);
    const character = data.items[randomIndex];

    return {
        name: character.name,
        image: character.image // Ensure this is the correct key
    };
}

let correctAnswers = 0;

//  Function to track correct answers
export function incrementCorrectAnswers() {
    correctAnswers++;
    console.log(`Correct Answers: ${correctAnswers}`);
    return correctAnswers;
}

//  Function to display a 6-second countdown timer
export function startTimer(displayElement) {
    let timeLeft = 6; // Set timer duration

    const timerInterval = setInterval(() => {
        displayElement.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            displayElement.textContent = "Time's up!";
        }

        timeLeft--;
    }, 1000); // Update every second
}