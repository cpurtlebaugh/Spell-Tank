console.log("js_loaded");

/* MODEL */

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


/* VIEW FUNCTIONS */

// puts a word into the html div theBoard, input is a word,
// output none but side-effect of updating html
var displaysWord = function(word) {
  $("#theBoard").text(word);
};


$("#start").on('click', function() {
  displaysWord(chooseAWord());
});