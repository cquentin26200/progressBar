const div = document.querySelector("div");
const span = document.querySelector("span");
let number = 1;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let rdmNumber = randomNumber(5000, 10000);

const interval = setInterval(() => {
  div.style.width = number++ + "vw";
  span.innerHTML++;
}, 1000);

setTimeout(() => clearInterval(interval), rdmNumber);
