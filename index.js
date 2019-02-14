var Word = require("./word.js");

var wordChoices = ["bark", "meow", "moo", "growl", "quack", "neigh"];

var randomNumber = Math.floor(Math.random() * wordChoices.length);

var guessThisWord = wordChoices[randomNumber];

