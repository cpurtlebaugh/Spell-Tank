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

var guessCount = 6;

var audio1 = $("#applause");
var audio2 = $("#sadNoise");

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

/* VIEW FUNCTIONS */

// puts a word into the html div theBoard, input is a word,
// output none but side-effect of updating html
var displayWord = function() {
  $("#theBoard").text(hiddenWord);
};

var displayAnswer = function() {
  $("#theBoard").text(word);
};

// clears the board

$("#clear").on('click', function() {
  clearBoard();
});

var clearBoard = function() {
  location.reload();
};


// starts the game and selects a random topic / word
$("#start").on('click', function() {
  chooseAWord();
  displayWord();
});

// the in play function

$("#buttons").on('click', function(event) {
  if ($(event.target).hasClass("found") || $(event.target).hasClass("wrong")) {
    return;
  }
  var found = false;
  var guess = event.target.innerHTML.toLowerCase();
  // console.log(guess);
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      var a = hiddenWord.split('');
      console.log(a);
      a[i] = guess.toLowerCase();
      hiddenWord = a.join('');
      console.log(hiddenWord);
      found = true;
    };
  }
  if (found) {
    $(event.target).addClass("found");
  } else {
    $(event.target).addClass("wrong");
    guessCount--;
    if (guessCount === 5) {
      $("#w6").css("visibility", "visible");
    } else if (guessCount === 4) {
      $("#w5").css("visibility", "visible");
    } else if (guessCount === 3) {
      $("#w4").css("visibility", "visible");
    } else if (guessCount === 2) {
      $("#w3").css("visibility", "visible");
    } else if (guessCount === 1) {
      $("#w2").css("visibility", "visible");
    } else if (guessCount === 0) {
      $("#w1").css("visibility", "visible");
    }
  };
  console.log(hiddenWord);
  displayWord();
  if (guessCount === 0) {
    $(audio2).trigger("play");
    alert("you've lost the game!");
    displayAnswer();
    $(this).off(event);
  }
  if (hiddenWord === word) {
    $(audio1).trigger("play");
    alert("you've won!");
  }
});