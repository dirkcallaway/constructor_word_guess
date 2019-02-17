var Word = require("./word.js");
var inquirer = require("inquirer");

var wordChoices = ["bark", "meow", "moo", "growl", "quack", "neigh"];
var randomNumber = Math.floor(Math.random() * wordChoices.length);
var guessThisWord = wordChoices[randomNumber];

var guessesLeft = 10;
var gameOver = false;
var letters_guessed = new Set();

var lettersLeft = guessThisWord.length;
var word = new Word(guessThisWord);

var guessGame = function () {
  word.displayWord();
  inquirer.prompt([{
    type: "input",
    name: "letter",
    message: "Guess a letter!"
  }]).then(function (response) {
    debugger;
    guess(response.letter);
    if (!gameOver) {
      guessGame();
    }
  })
};

guessGame();

var guess = function (letter) {
  if (letter.length === 1) {
    if (!letters_guessed.has(letter)) { //Checks to see if letter has been guessed already...
      letters_guessed.add(letter);  //Adds letter to set of guessed letters...
    } else { //If letter has been guessed already...
      console.log("You've already guessed that letter.");
      return;
    }
    var correctLetters = word.guessLetter(letter);
    console.log(correctLetters);
    //If user guessed a letter correctly...
    if (correctLetters > 0) {
      console.log("Good guess!");
      lettersLeft -= correctLetters;
    } else {  //If guess was incorrect...
      guessesLeft--;
      console.log("Bad guess! You have " + guessesLeft + " guesses left!");
    }

    //Check to see if all letters are guessed... if so win and game over
    if (lettersLeft === 0) {
      console.log("You Win!");
      gameOver = true;
    }

    //Check to see if there are guesses left... if not lose & game over
    if (guessesLeft === 0) {
      console.log("You lose!");
      console.log("The word was: " + guessThisWord);
      gameOver = true;
    }

  } else { //User guessed more than one letter....
    console.log("Only guess 1 letter.")
  }
};