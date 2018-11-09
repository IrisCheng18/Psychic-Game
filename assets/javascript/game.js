var winsCounter = 0;
var lossesCounter = 0;
var guessesLeftCounter = 9;
var userInput = "";
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = "";

function restart() {
    guessesLeftCounter = 9;
    userInput = "";
    randomLetter = "";
}

function updateStats(randomLetter = "") {
    // document.querySelector("#letter").innerHTML = "Guess what letter I'm thinking of " + randomLetter;
    document.querySelector("#wins").innerHTML = "Wins: " + winsCounter;
    document.querySelector("#losses").innerHTML = "Losses: " + lossesCounter;
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeftCounter;
    document.querySelector("#userInput").innerHTML = "Your Guesses So Far: " + userInput;
}

updateStats();


document.onkeyup = function (event) {

    var keyPressed = "";

    // computer randomly generates a letter
    if (guessesLeftCounter === 9) {
        console.log(Math.floor((Math.random() * 26)));
        randomLetter = alphabets[Math.floor((Math.random() * 26))];
        console.log(randomLetter);
    };

    keyPressed = event.key;
    userInput = userInput + " " + keyPressed;
    console.log(keyPressed);

    if (randomLetter === keyPressed) {
        winsCounter++;
        restart();
    } else {
        guessesLeftCounter--;
        if (guessesLeftCounter === 0) {
            lossesCounter++;
            restart();
        }
    }

    updateStats(randomLetter);
};
