let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.random() * 100;
let intRandomNumber = Math.ceil(randomNumber);

// console.log(intRandomNumber);

function checkGuess() {
    let inputValue = parseInt(userInput.value);
    if (inputValue > intRandomNumber) {
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.textContent = "Too High! Try Again.";
    } else if (inputValue < intRandomNumber) {
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.textContent = "Too Low! Try Again.";
    } else if (inputValue === intRandomNumber) {
        gameResult.style.backgroundColor = "green";
        gameResult.textContent = "Congratulations! You got it right.";
    } else {
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.textContent = "Provide a valid input";
    }
}
