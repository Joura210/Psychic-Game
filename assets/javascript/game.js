
// global variables

var wins = 0;
var losses = 0;
var guessLeft = 9;
// var guessSoFar = "";
var compGuess = "";

var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var guessLefttext = document.getElementById("guessLeft");
var guessSoFartext = document.getElementById("guessSoFar");



// make connection to variables
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"]
var used = [];
compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(compGuess);

document.onkeyup = function (event) {
    var userGuess = event.key;
    used.push(userGuess)
    if (guessLeft != 1) {
        guessLeft -= 1;
        guessLefttext.textContent = ("Guesses Left: " + guessLeft);
        guessSoFartext.textContent = ("Guessed So far: " + used);


        if (compGuess === userGuess) {
            wins++;
            winText.textContent = ("Wins: " + wins);
            guessLeft = 9;
            guessLefttext.textContent = ("Guesses Left: 9");
            used = [];
            guessSoFartext.textContent = ("Guesses So far: 0");
            compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            console.log(compGuess);

        }

    } else {
        losses++;
        lossText.textContent = ("Loses : " + losses);
        guessLeft = 9;
        guessLefttext.textContent = ("Guesses Left: 9");
        used = [];
        guessSoFartext.textContent = ("Guessed So far: 0");
        compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        console.log(compGuess);



    }


}

// win will be when compguess===userguess
//loss activates when guess left = 0
// guess left subtracts when comp guess does not equal user guess
// guess so far fills in on.key action