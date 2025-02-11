
const btnChangeColor = document.getElementById("btn-change-color");
const colorName = document.getElementById("color-name");
const body = document.body;

function getRandomHexColor() {
    const hexCharacters = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length);
        hexColor += hexCharacters[randomIndex];
    }

    return hexColor;
}

btnChangeColor.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    colorName.textContent = newColor;
});
