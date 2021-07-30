//grab elements from the DOM
const cube = document.querySelector(".cube__container");
const rollButton = document.querySelector(".roll__dice__btn");
//create a way to generate a random number

function randomNum() {
    const result = Math.floor(Math.random()* 6);
    if (result >= 1) {
        return result;
    } else {
        return 6;
    }
}

console.log(randomNum());

let currentClass="";

function rollDice() {
    let randomNumber = randomNum();
    console.log(randomNumber);
    let showClass = "show__" + randomNumber;
    console.log(showClass);
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
        cube.classList.add(showClass);
        currentClass = showClass;
}

console.log(rollDice());

rollButton.addEventListener('click', function(e) {
    e.preventDefault();
    rollDice();
})
