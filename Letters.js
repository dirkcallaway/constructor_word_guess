Letter = function (wordLetter) {
  this.wordLetter = wordLetter;
  this.beenGuessed = false;
  this.guessed = function(){
    if(this.beenGuessed){
      return this.wordLetter;
    } else {
      return "_";
    }
  };
  this.hasBeenGuessed = function(guess){
    if(guess === this.wordLetter){
      this.beenGuessed = true;
    };
  };
};

module.exports = Letter;