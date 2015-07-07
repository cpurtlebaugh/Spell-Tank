console.log("js_loaded");

/* MODEL */

// var wordSet = [
//   "kaleidescope",
//   "soundscape",
//   "acquisition",
//   "mississippi",
//   "bookkeeper"
// ];

// an array of words within categorical arrays

var wordSet = [
  ["singapore", "azerbaijan", "grand canyon", "sahara desert",
    "south korea", "niagra falls"
  ],
  ["george washington", "ron weasley", "han solo", "alan turing",
    "cleopatra", "nelson mandela"
  ],
  ["bonobo", "aardvark", "whale shark", "hippopotamus",
    "crocodile", "sperm whale"
  ],
  ["kaleidescope", "soundscape", "acquisition", "mississippi",
    "bookkeeper"
  ]
];

var topics = ["places", "people", "animals", "random"];

// choose a word randomly from "wordSet" array, returns a word
// var chooseAWord = function() {
//   var word = wordSet[Math.floor(Math.random() * wordSet.length)];
//   return word;
// };

// Chooses a category array randomly from wordSet. It then returns a
// random word from the chosen category array.
var chooseAWord = function() {
  var index = Math.floor(Math.random() * wordSet.length);
  var category = wordSet[index];
  $("#topic").text(topics[index]);
  var word = category[Math.floor(Math.random() * category.length)];
  return word;
};

// display the category a word comes from
// var displaysCategory = function() {
//   if (chooseAWord.category === wordSet[0]) {
//     $("#displayTopic") = "TOPIC: Places";
//   } else if (chooseAWord.category === wordSet[1]) {
//     $("#displayTopic") = "TOPIC: People";
//   } else if (chooseAWord.category === wordSet[2]) {
//     $("#displayTopic") = "TOPIC: Animals";
//   } else if (chooseAWord.category === wordSet[3]) {
//     $("#displayTopic") = "TOPIC: Random";
//   }
// };


/* VIEW FUNCTIONS */

// puts a word into the html div theBoard, input is a word,
// output none but side-effect of updating html
var displaysWord = function(word) {
  $("#theBoard").text(word);
};

$("#start").on('click', function() {
  displaysWord(chooseAWord());
});