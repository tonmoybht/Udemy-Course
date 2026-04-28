"use strict";

let displayMassage = (massage) =>
  (document.querySelector(".massage").textContent = massage);

let displayNumber = (number) =>
  (document.querySelector(".number").textContent = number);

let displayScore = (score) =>
  (document.querySelector(".score").textContent = score);

let displayGuess = (guess) => (document.querySelector(".guess").value = guess);

// Check Button
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // When There's no value
  if (!guess) {
    displayMassage("No Number!");

    // When Player Wins
  } else if (guess === randomNumber) {
    displayNumber(guess);
    displayMassage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When Guess is too high
  } else if (guess !== randomNumber) {
    displayMassage(guess > randomNumber ? "Too high" : "Too Low!");
    score--;
    if (score > 1) {
      displayScore(score);
    } else {
      displayMassage("You Lost The Game!!!");
      displayScore(0);
    }
  }
});

// Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayMassage("Start Guessing...");
  displayGuess("");

  displayNumber("?");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
