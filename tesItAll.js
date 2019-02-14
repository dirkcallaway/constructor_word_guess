var letterArr = [];

Letter = function (wordLetter) {
  this.wordLetter = wordLetter;
  this.beenGuessed = false;
  this.guessed = function () {
    if (this.beenGuessed) {
      return this.wordLetter;
    } else {
      return "_";
    }
  };
  this.hasBeenGuessed = function (guess) {
    if (guess === this.wordLetter) {
      this.beenGuessed = true;
    };
  };
};

Word = function () {
  this.wordArrMaker = function (guessThisWord) {
    letterArr = [];
    var guessThisWordArr = guessThisWord.split(" ").join("").split("");
    for (var i = 0; i < guessThisWordArr.length; i++) {
      letterArr.push(new Letter(guessThisWordArr[i]))
    }
    console.log(letterArr);
  }
  this.displayWord = function () {
    var currentWordDisplay = "";
    for (var i = 0; i < letterArr.length; i++) {
      currentWordDisplay += letterArr[i].guessed();
      if (i < letterArr.length) {
        currentWordDisplay += " ";
      }
    }
    console.log(currentWordDisplay);
  };
  this.guessLetter = function (guess) {
    Letter.hasBeenGuessed();
  };
}