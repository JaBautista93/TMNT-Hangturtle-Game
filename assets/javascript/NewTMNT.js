//Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var HenchmanText = document.getElementById("Henchman-text");
    var TurtlesText = document.getElementById("Turtles-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("ties-text");
    var guessesleft = document.getElementById("guesses-left")

//this array contains our henchman for the game
var Henchman = ["Bebop", "Krang", "Rat King", "Rocksteady", "Shredder", "Slash",
    "Baxter Stockman", "General Traag", "Tokka", "Razhar", "Dragon Lord",
    "Tatsu", "Rock Soliders", "Foot Clan", "Leather Head", "Fishface",
    "Hun", "Triceratons"
];

//Guessed Letters
var GuessedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"
];

//this variable will holds the number of guess left
var guessesleft = 10;


//this variable will count the number of times we win
var winsText = 0;
var resetGuess = ""

//this is empty array to push the letters from the current word choosen
let underScore = [];

//this is empty arrays to push guesses to the page
let userpushkey = [];

//process for selecting word
let randNum = [Math.floor(Math.random() * Henchman.length)];
console.log(randNum);
let choosenWord = Henchman[randNum];
console.log(choosenWord.toUpperCase());

//creating underscores based on lenght of word
for (var i = 0; i < choosenWord.length; i++) {
    if (choosenWord[i] === " ") {
        underScore.push(" ")
     } else {
        underScore.push("_")
     }
}
    //underScore.toString()
    document.getElementById("Henchman-text").innerHTML = underScore.join(" ");

console.log(underScore);

//Determines which key was pressed. use jQuery for getting key presses,  Need to store
// the function, look up wheel of fortune
       document.onkeyup = function (event) {
        var userGuess = event.key;
        userpushkey.push(userGuess);
        userpushkey.toString()
        document.getElementById("Turtles-text").innerHTML = userpushkey.join(" ");
        console.log(userpushkey);
//game alert logic look up word matching with jQuery and Javascript, full in the blank

        function guessLetter(letter) {
            var goodGuess = false;
            var keepGuessing = false;

            for (let i = 0; i < choosenWord.length; i++) {
                if (choosenWord[i] === letter) {
                    GuessedLetters[i] = letter;
                    goodGuess = true;
                    GuessedLetters.push(underScore);
                    GuessedLetters.toString()
                    document.getElementById("Henchman-text").innerHTML = GuessedLetters.join(" ")
                    console.log(GuessedLetters);
                }
                if (GuessedLetters(i) == "") {
                    keepGuessing = true;
                    console.log(keepGuessing);
                }
                if (goodGuess) {
                    console.log("You got this Ninja Son! Don't give up on no matter how bad you want pizza");
                    console.log(GuessedLetters.join(choosenWord));
                    if (!keepGuessing) {
                        console.log('Cowabunga dude, you did it!');
                        console.log(keepGuessing);
                    }
                } else {
                    console.log('O No we are going to be turtle soup!');
                }
            }
        }
    }