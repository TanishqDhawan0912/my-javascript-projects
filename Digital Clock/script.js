const time = document.querySelector('.clock');

setInterval(() => {
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString()
}, 1000);