// one way to change the background color of the page

// const greybtn = document.querySelector("#grey")
// const whitebtn = document.querySelector("#white")
// const yellowbtn = document.querySelector("#yellow")
// const bluebtn = document.querySelector("#blue")

// greybtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "grey"
// })

// whitebtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white"
// })

// yellowbtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "yellow"
// })

// bluebtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "blue"
// })

// other way to change the background color of the page

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});

n