const button = document.querySelector("button");
const message = document.querySelector(".message");
const results = document.querySelector(".results");
const gameArea = document.querySelector(".gameArea");
const instructions = document.querySelector(".instructions");

let inPlay = false;
let playArea = {};
let counter = 0;

function showMessage(notification) {
  message.innerHTML = `<h3>${notification}</h3>`;
}

showMessage("Click start to begin!");

button.addEventListener("click", function() {
  inPlay = true;
  button.style.display = "none";
  instructions.style.display = "none";
  results.innerHtml = "";
  counter = 0;

  showMessage("Starting...");
})
