var winsCounter = 0;
var lossesCounter = 0;
var guessesLeftCounter = 9;
var userInput = "";
var alphabets = "abcdefghijklmnopqrstuvwxyz";

function compareAlphabet(letter) {
    for (var i = 0; i < 26; i++) {
        if (letter === alphabets[i]) {
            return true;
        }
    }

    return false;
}

function restart() {
    guessesLeftCounter = 9;
    userInput = "";
}

function updateStats(randomLetter = "") {
    document.querySelector("#letter").innerHTML = "Guess what letter I'm thinking of " + randomLetter;
    document.querySelector("#wins").innerHTML = "Wins: " + winsCounter;
    document.querySelector("#losses").innerHTML = "Losses: " + lossesCounter;
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeftCounter;
    document.querySelector("#userInput").innerHTML = "Your Guesses So Far: " + userInput;
}

updateStats();


document.onkeyup = function (event) {

    var keyPressed = "";
    var randomLetter = "";

    // computer randomly generates a letter
    if (guessesLeftCounter === 9) {
        console.log(Math.floor((Math.random() * 26)));
        randomLetter = alphabets[Math.floor((Math.random() * 26))];
    } else if (guessesLeftCounter === 0) {
        lossesCounter++;
        restart();
    }

    keyPressed = event.key;
    userInput = userInput + " " + keyPressed;
    console.log(userInput);

    if (compareAlphabet(randomLetter)) {
        winsCounter++;
        restart();
    } else {
        guessesLeftCounter--;
    }
    updateStats(randomLetter);
};
