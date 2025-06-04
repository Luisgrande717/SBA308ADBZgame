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