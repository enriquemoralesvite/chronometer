const displayCronometro = document.getElementById("display-cronometro");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let segundos = 0;
let intervalo = null;


startButton.addEventListener("click", () => {
    intervalo = setInterval(() => {
        segundos++;
        displayCronometro.textContent = segundos;
    }, 1000);
});


stopButton.addEventListener("click", () => {
    clearInterval(intervalo);
});

resetButton.addEventListener("click", () => {
    clearInterval(intervalo);
    segundos = 0;
    displayCronometro.textContent = segundos;
});
