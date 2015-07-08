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

var word, hiddenWord;

// Assign index as random selection of the wordSet's array index
// Creates a category var. & assigns it to the new wordSet[index] var.
// Assigns the index var. as the index of topics var. & puts it into html
// Creates a word var. that is randomized based on the category array


var chooseAWord = function() {
  var index = Math.floor(Math.random() * wordSet.length);
  var category = wordSet[index];
  $("#topic").text(topics[index]);
  word = category[Math.floor(Math.random() * category.length)];
  hiddenWord = word.replace(/\w/g, "_");
};




// stores the guesser's letter, input is a letter from html input,
// output is adding the letter to an array


/* VIEW FUNCTIONS */

// puts a word into the html div theBoard, input is a word,
// output none but side-effect of updating html
var displayWord = function() {
  $("#theBoard").text(hiddenWord);
};

$("#start").on('click', function() {
  chooseAWord();
  displayWord();
});

$("#buttons").on('click', function(event) {
  if ($(event.target).hasClass("found") ||
    $(event.target).hasClass("wrong")) {
    return;
  }
  var found = false;
  var guess = event.target.innerHTML.toLowerCase();
  console.log(guess);
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      var a = hiddenWord.split('');
      console.log(a);
      a[i] = guess.toUpperCase();
      hiddenWord = a.join('');
      console.log(hiddenWord);
      found = true;
    }
  }
  if (found) {
    $(event.target).addClass("found");
  } else {
    $(event.target).addClass("wrong");
  }
  console.log(hiddenWord);
  displayWord();
});