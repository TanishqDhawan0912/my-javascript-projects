let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let btn = document.querySelector("#calcbtn");

function CalculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 < m1) {
    y3--;
    m3 = 12 - (m1 - m2);
  } else {
    m3 = m2 - m1;
  }
  if (d2 < d1) {
    m3--;
    d3 = getDaysInMonth(y1, m1) - (d1 - d2);
  } else {
    d3 = d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  PrintAge(y3, m3, d3);
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", CalculateAge);

function PrintAge(y, m, d) {
  let result = document.querySelector(".result");
  result.innerHTML = `You Age is <span>${y}</span> years, <span>${m}</span>  months and <span>${d}</span> days.`;
}
