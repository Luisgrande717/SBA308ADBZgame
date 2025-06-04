export async function fetchRandomCharacter() {
    const response = await fetch("https://web.dragonball-api.com/api/characters/random");
    const data = await response.json();
    return {
        name: data.name,
        image: data.image
    };
}