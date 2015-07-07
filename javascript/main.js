console.log("js_loaded");

var wordSet = [
  "kaleidescope",
  "soundscape",
  "acquisition",
  "mississippi",
  "bookkeeper"
];

// choose a word randomly from "wordSet" array, returns a word
var chooseAWord = function() {
  var word = wordSet[Math.floor(Math.random() * wordSet.length)];
  return word;
};