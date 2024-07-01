const passwordBox = document.getElementById("password");
const generateButton = document.querySelector(".generatebtn");
const copyButton = document.querySelector("#copybtn");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";
const allchars = uppercase + lowercase + number + symbol;

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copypassword);

function generatePassword() {
  let password = "";
  while (length > password.length) {
    const character = allchars[Math.floor(Math.random() * allchars.length)];
    password += character;
  }
  passwordBox.value = password;
}

function copypassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
}


