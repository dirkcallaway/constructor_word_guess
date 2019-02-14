var Letter = require("./Letters.js");

var Word = function(guessThisWord) {
  this.wordName = guessThisWord;
  this.wordArrMaker = function(word){
    var guessThisWordArr = word.split(" ").join("").split("");
    for(var i = 0; i < guessThisWordArr.length; i++){
      letterArr.push(new Letter(guessThisWordArr[i]))
    }
  }
  this.letterArr = [];
  this.displayWord = function() {
    var currentWordDisplay = "";
    for(var i = 0; i < letterArr.length; i++){
      currentWordDisplay += letterArr[i].guessed();
      if(i < letter.length){
        currentWordDisplay += " ";
      }
    }
  };
  this.guessLetter = function(guess){
    for(var i = 0; i < letterArr.length; i++){
      letterArr[i].hasBeenGuessed(guess);
    }
  };
};

module.exports = Word;