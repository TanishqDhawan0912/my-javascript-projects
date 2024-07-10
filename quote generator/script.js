const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newquotebtn = document.getElementById("newquotebtn");
const tweetbtn = document.getElementById("tweetbtn");

fetch("https://api.quotable.io/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  })
  .catch((error) => {
    console.log(error);
  });

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`,
    "Tweet Window",
    "width=600, height=300"
  );
}

newquotebtn.addEventListener("click", () => {
  window.location.reload();
});

tweetbtn.addEventListener("click", tweet);
