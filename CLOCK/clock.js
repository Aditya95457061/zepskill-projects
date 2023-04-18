
let time = document.querySelector('#time');
setInterval(() => {
    let newTime = new Date().toLocaleTimeString();
    time.textContent = newTime
}, 1000);