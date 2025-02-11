const colors = [
    "red", "yellow", "green", "purple", "pink", "blue", "orange", "brown", "teal", "cyan", 
    "magenta", "lime", "maroon", "navy", "olive", "gold", "silver", "coral", "aqua", "plum"
];


const btnChangeColor = document.getElementById('btn-change-color');
const colorName = document.getElementById('color-name');

btnChangeColor.addEventListener('click', () => {
    const randomColor = getRandomColor();
    
    document.body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
});

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
