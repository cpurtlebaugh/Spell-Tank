# SPELL TANK

## WHAT IS IT?
Spell Tank is a fun, spin-off of the classic game Hangman. This time our stickfigure
hero meets his demise in a tank of water. Oh what a fate! With each wrong guess,
you render the man one div closer to his demise. With only 6 chances to chose
a letter incorrectly, you better be ready to guess wisely against this 2D
array of topics and words.

## TECHNOLOGIES
* <strong>HTML</strong>: was used to create the general contents of the game. The dunk
  tank was built with 6 divs. Each div fills up one at a time upon each wrong guess to
  act as a counter. The alphabet was one big div with 26 span tags.

* <strong>CSS</strong>: was used to style the page contents and cleanly display
  some of the game logic. For example, a correct or incorrect guess on a letter
  triggered the letter's style to change.

* <strong>Javascript:</strong>: was used to store variables including the 2D
  array of topics/word and the page reload. Some of the main function started out
  heavily with vanilla javascript in regards to counting and converting the guesses
  to display onto the board.

* <strong>JQuery:</strong> was used heavily. It was used to manipualte the DOM
  because the vast majority of the logic was tied to it. The version of jQuery used
  was v. 2.1.4 via a CDN.

* <strong>RegEx:</strong> was used once to convert the randomnized word into a
  hiddneWord that would display as dashes in the browser.

## DESIGN APPROACH
The design approach was focused on addressing game logic before style. It
was also focused on breaking down user stories singularly to ensure completion of
one objective at a time. There are global variables, and event listeners but for
the most part the game functions off of a few event listeners. The main event
listener is based on the clickable letters in the alphabet and the entire active
play portion is embedded within this function, including win/lose notifications.
The game ends by turning the event listener off.


## GET STARTED / INSTALL
Go to github, and stick a fork in it. Jk, fork it and feel free to make requests
on the master to improve this beatuy...or install the files and open up the html
file in your browser and give it a whirl. To select a random word click on the
"play" button. To reset the board, click clear. If you'd like to play the game
without downloading you can go to: http://cpurtlebaugh.github.io/


## IN FLIGHT
 * Make it into a 2 player game.
 * Increase the topic/word array.
 * Add user selection for levels of difficulty.
 * Make it responsive and mobile friendly.
 * Remove alert windows. Visually represent winning/losing.

## THE LATEST VERSION
v. 0.50 & crawling....

## LICENSING
General Public Use

## USER STORIES

### MVP
* [x] As a guesser, I would like to be presented with a new, random word.
* [x] As a guesser, I'd like for there to be a category so I'm not guessing in
  the dark.
* [X] As a guesser, I would like to see a placeholder for each letter contained
  in the word so I can better visualize the answer.
* [X] As a guesser, I would like to be able to choose a new letter.
* [X] As a guesser, I would like to see the letters I have correctly chosen
* [X] As a guesser, I would like to see the letters I have chosen incorrectly
* [X] As a guesser, I'd like to know how many wrong guesses I have made.
* [X] As a guesser, I'd like to see a fun visualization of the number of wrong
  guesses I've made / have left so that I can feel the fear of losing!
* [X] As a guesser, I'd like to know when I win the game and have a choice to
  play again.
* [X] As an administrator, I would like the guesser to have a limited number of
  choices so the game has an end. (6 guesses)

### ICEBOX
* [X] Added sound effects for fun :)
* [ ] Administrator, I would like there to be a 2nd player mode so there
  is a word chooser and guesser so the game is more interactive.
* [ ] As a guesser, I'd like to know how many wrong guesses I have left.
* [ ] As a chooser, I would like there to be a visual depiction of my opponent's
  slow demise.
* [ ] As a guesser, I would like there to be a visual depiction of my victory.
* [ ] As an administrator, I'd like there to be a time-limit so the players don't
  loose interest.
* [ ] As chooser, I would like to pick between difficulty levels so I can
  match my opponent's skill-level.

