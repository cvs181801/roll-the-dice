//grab elements from the DOM

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

