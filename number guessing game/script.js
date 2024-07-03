const userinput = document.querySelector("#guessnum");
const submit = document.querySelector("#submit");
const guessslot = document.querySelector(".guessslot");
const allguesses = document.querySelector(".allguess");
const remaining = document.querySelector(".remaining");
const newgame = document.querySelector("#new");
const endgame = document.querySelector("#reset");

const random = Math.floor(Math.random() * 100) + 1;

let playgame = true;
let prevguess = [];
let numguess = 0;
endgame.disabled = true;

newgame.addEventListener("click", function () {
  window.location.reload();
});

endgame.addEventListener("click", function () {
  userinput.value = "";
  playgame = true;
  submit.style.display = "none";
  userinput.removeAttribute("readonly");
  prevguess = [];
  allguesses.innerHTML = "";
  numguess = 0;
  remaining.innerHTML = "10";
  displaymessage(`Ohh no! You Ended the game! The number was ${random}`);
  endgame.style.display = "none";
});

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    endgame.disabled = false;
    endgame.style.backgroundColor = "#e51d1d";
    const guess = userinput.value;
    console.log(guess);
    numguess++;
    validateguess(guess);
    userinput.value = "";
  });
}

function validateguess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number");
  } else {
    checkguess(guess);
  }
}

function checkguess(guess) {
  if (guess === random) {
    displaymessage(`You guessed correctly! The number was ${random}`);
    endgame();
  } else {
    if (numguess === 10) {
      displaymessage(`Game Over! The number was ${random}`);
      endgame();
    } else {
      prevguess.push(guess);
      allguesses.innerHTML = `${prevguess},  `;
      remaining.innerHTML = `${10 - numguess}  `;
    }
  }
}

function displaymessage(message) {
  guessslot.innerHTML = message;
}
