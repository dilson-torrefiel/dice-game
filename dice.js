/**
 * Dice Game JavaScript
 * This script handles the logic for a simple dice game where two players roll a die and the higher number wins.
 * It generates random numbers for each player, updates the dice images accordingly, and displays the winner.
 * Developed by Dilson Torrefiel
 * Last updated: June 2024
 */
var randomNumber1 = 0;
var randomNumber2 = 0;
document.querySelector(".win-flag-1").classList.add("win-flag-none");
document.querySelector(".win-flag-2").classList.add("win-flag-none");

// Player 1 rolls the dice
function rollDice1() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
}
// Player 2 rolls the dice
function rollDice2() {
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
}

// Roll both dice
function rollDice() {
  rollDice1();
  rollDice2();
  // Who wins?
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".welcome-message p").innerHTML = "Player 1 Wins!";

    document.querySelector(".win-flag-1").classList.remove("win-flag-none");
    document.querySelector(".win-flag-2").classList.add("win-flag-none");
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".welcome-message p").innerHTML = "Player 2 Wins!";

    document.querySelector(".win-flag-2").classList.remove("win-flag-none");
    document.querySelector(".win-flag-1").classList.add("win-flag-none");
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector(".welcome-message p").innerHTML = "It's a Draw!";

    document.querySelector(".win-flag-1").classList.remove("win-flag-none");
    document.querySelector(".win-flag-2").classList.remove("win-flag-none");
  } else {
    document.querySelector(".welcome-message p").innerHTML =
      "Something went wrong!";
  }
  // Set the dice images
  document.querySelector(".dice-image1").src =
    `./images/dice-${randomNumber1}.png`;
  document.querySelector(".dice-image2").src =
    `./images/dice-${randomNumber2}.png`;
}
