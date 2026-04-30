"use strict";

// Selecting Element

const playerEl0 = document.querySelector(".player-0");
const playerEl1 = document.querySelector(".player-1");
const scoreEl0 = document.querySelector("#score-0");
const scoreEl1 = document.querySelector("#score-1");
const currentEl0 = document.querySelector("#current-0");
const currentEl1 = document.querySelector("#current-1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

let score, currentScore, activePlayer, playing;

// Starting Condition
const initialValues = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEl.classList.add("hidden");
  playerEl0.classList.remove("player-winner");
  playerEl1.classList.remove("player-winner");
  playerEl0.classList.add("player-active");
  playerEl1.classList.remove("player-active");
  document.querySelector(".winner-0").classList.add("hidden");
  document.querySelector(".winner-1").classList.add("hidden");
};

initialValues();

// Player Switch Function
const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle("player-active");
  playerEl1.classList.toggle("player-active");
};

// Roll button function
btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold Button function
btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 50) {
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
      document
        .querySelector(`.winner-${activePlayer}`)
        .classList.remove("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", initialValues);
