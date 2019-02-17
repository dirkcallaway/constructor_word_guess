var Letter = require("./Letters.js");

Word = function(guessThisWord) {
  this.wordName = guessThisWord;
  this.letterArr = [];
  this.wordArrMaker = function(word){
    var guessThisWordArr = word.split(" ").join("").split("");
    for(var i = 0; i < guessThisWordArr.length; i++){
      letterArr.push(new Letter(guessThisWordArr[i]))
    }
  }
  this.displayWord = function() {
    var currentWordDisplay = "";
    for(var i = 0; i < this.letterArr.length; i++){
      currentWordDisplay += this.letterArr[i].guessed();
      if(i < letter.length){
        currentWordDisplay += " ";
      }
    }
    console.log(currentWordDisplay);
  };
  this.guessLetter = function(guess){
    for(var i = 0; i < this.letterArr.length; i++){
      letterArr[i].hasBeenGuessed(guess);
    }
  };
};

module.exports = Word;