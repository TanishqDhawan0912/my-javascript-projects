const start = document.querySelector("#btn1");
const stop = document.querySelector("#btn2");
let interval;
function startRandomColor() {
    interval = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
};

function stopRandomColor() {
    clearInterval(interval);
    setTimeout(() => {
        // document.body.style.backgroundColor = "white";
    }, 0);
    
};

start.addEventListener("click", startRandomColor);
stop.addEventListener("click", stopRandomColor);

const randomColor = function randomcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;   
}



