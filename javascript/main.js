console.log("js_loaded");

/* MODEL */

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

// Assign index as random selection of the wordSet's array index
// Creates a category var. & assigns it to the new wordSet[index] var.
// Assigns the index var. as the index of topics var. & puts it into html
// Creates a word var. that is randomized based on the category array


var chooseAWord = function() {
  var index = Math.floor(Math.random() * wordSet.length);
  var category = wordSet[index];
  $("#topic").text(topics[index]);
  word = category[Math.floor(Math.random() * category.length)];
  var hiddenWord = word.replace(/\w/g, "_ ");
  return hiddenWord;
};


/* VIEW FUNCTIONS */

// puts a word into the html div theBoard, input is a word,
// output none but side-effect of updating html
var displayWord = function(x) {
  $("#theBoard").text(x);
};

$("#start").on('click', function() {
  displayWord(chooseAWord());
});

// takes user input
$("#submit").on('click', function() {}