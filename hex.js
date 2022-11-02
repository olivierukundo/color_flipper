const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
// get random number between 0-3
let colorTo = "#";
for (let i = 0; i < 6; i++){
    colorTo += colors[getRandomNumber()];
}

color.textContent = colorTo;
document.body.style.backgroundColor = colorTo;
});
// const randomNumber = getRandomNumber();
// document.body.style.backgroundColor = colors[randomNumber];
// color.textContent = colors[randomNumber];
// }); 

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}