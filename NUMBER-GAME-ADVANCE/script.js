let randNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const userinput = document.querySelector("#input");
const guessSlot = document.querySelector("#display1");
const remaining = document.querySelector("#display2");
const lowOrHigh = document.querySelector("#display3");
const strtOver = document.querySelector(".mypara");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than or equal to 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMsg(`Game Over. The number was ${randNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randNumber) {
        displayMsg(`Your guess is correct!`);
        endGame();
    } else if (guess < randNumber) {
        displayMsg(`Too low! Try again.`);
    } else {
        displayMsg(`Too high! Try again.`);
    }
}

function displayGuess(guess) {
    userinput.value = "";
    guessSlot.innerHTML += ` ${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
    lowOrHigh.innerHTML = `<strong>${message}</strong>`;
}

function endGame() {
    userinput.value = "";
    userinput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML = `<button id="newgame">Start New Game</button>`;
    strtOver.appendChild(p);
    playGame = false;
    newgame();
}


function newgame() {
    const newgamebutton = document.querySelector("#newgame")
    addEventListener("click", function (event) {
        randNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML=""
        remaining.innerHTML=""
        playGame = true;
    });
}
