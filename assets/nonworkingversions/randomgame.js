<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    
    <script type="text/javascript">

There should be only one loop. You should also loop trough shorter word but a hint with word length would be nice...

let display = document.querySelector('.display');
let guessQuerySelector = document.querySelector('#character');
let textForm = document.querySelector('.textForm');

var commonWords = [
  "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he",
  "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be",
  "this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
  "what", "all", "were", "we", "when", "your", "can", "said", "there",
  "use", "an", "each", "which", "she", "do", "how", "their", "if", "will",
  "up", "other", "about", "out", "many", "then", "them", "these", "so",
  "some", "her", "would", "make", "like", "him", "into", "time", "has",
  "look", "two", "more", "write", "go", "see", "number", "no", "way",
  "could", "people", "my", "than", "first", "water", "been", "call",
  "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
  "come", "made", "may", "part"
];

// Grabbing Random Word
var getRandomWord = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var randomWord = getRandomWord(commonWords);
console.log('randomWord', randomWord);

// Function that submits the values
textForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var counter = 10;
  var triedCharacters = [];
  var correctCharacters = [];

  var guessWord = guessQuerySelector.value;
  var shorterWordlength = randomWord.length > guessWord.length ? guessWord.length : randomWord.length;

  console.log('guessWord', guessWord);

  for (i = 0; i < shorterWordlength; i++) {
      if (guessWord[i] === randomWord[i]) {
        correctCharacters.push(guessWord[i])
        console.log("correct " + correctCharacters)
      } else {
        triedCharacters.push(guessWord[i])
        console.log("incorrect " + triedCharacters)
      }
  }
  randomWord = getRandomWord(commonWords);
  console.log('randomWord', randomWord);
})

</body>
</html>