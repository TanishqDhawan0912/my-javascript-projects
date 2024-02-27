const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const player1plus = document.querySelector("#player1plus");
const player2plus = document.querySelector("#player2plus");
const reset = document.querySelector("#reset");

let p1score = 0;
let p2score = 0;
let winningscore = 5;
let isgameover = false;

player1plus.addEventListener("click", function () {
  if (!isgameover) {
    if (p1score !== winningscore) {
      p1score += 1;
      score1.textContent = p1score;
      if (p1score === winningscore) {
          isgameover = true;
          score1.style.color = "green";
          score2.style.color = "red";
      }
    }
  }
});

player2plus.addEventListener("click", function () {
  if (!isgameover) {
    if (p2score !== winningscore) {
      p2score += 1;
      score2.textContent = p2score;
      if (p2score === winningscore) {
          isgameover = true;
          score2.style.color = "green";
          score1.style.color = "red";
      }
    }
  }
});

reset.addEventListener("click", function () {
  p1score = 0;
  p2score = 0;
  score1.textContent = p1score;
  score2.textContent = p2score;
  score1.style.color = "black";
  score2.style.color = "black";
  isgameover = false;
});

let scorechange = document.querySelector("#scorechange");

scorechange.addEventListener("change", function () {
  winningscore = parseInt(scorechange.value);
  reset.click();
});
