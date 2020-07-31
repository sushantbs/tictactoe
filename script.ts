// Game logic

// This is the player whose turn it is to play
let playerToPlay = 1;

type Turn = {
  // define the type here
}

type TurnsPlayed = {
  // define the data structure you need to track the types here
}

// This is a data structure to store all the turns that have been played so far
let turnsPlayed: TurnsPlayed;

function checkGameState() {
  // check the game state logic to determine if the game is over
}

function showUserMessage(text) {
  // show messages to the user
}

function handleTileClick(e) {
  // this is the function that should be invoked to handle tile click
}

function initialize() {
  // initialize the grid to handle the correct inputs
}

window.onload = function () {
  initialize();
};
