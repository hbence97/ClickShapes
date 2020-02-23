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

function showCircle() {
  playArea.timer = setTimeout(myCircle, random(3000));
}

function myCircle() {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = random(setVerticalMargin()) + "px";
  circle.style.left = random(setHorizontalMargin()) + "px";
  circle.start = new Date().getTime();
  circle.addEventListener("click", clicked);
  gameArea.appendChild(circle);
}

function setVerticalMargin() {
  let maxHeight = gameArea.clientHeight;
  if (maxHeight <= 50) {
    maxHeight += 100;
  } else {
    maxHeight -= 100;
  }
  return maxHeight;
}

function setHorizontalMargin() {
  let maxWidth = gameArea.clientWidth;
  if (maxWidth <= 50) {
    maxWidth += 100;
  } else {
    maxWidth -= 100;
  }
  return maxWidth;
}

function random(number) {
  let randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
}

function resetGame() {
  clearTimeout(playArea.timer); // You need this otherwise if you win, it will keep showing you circles
  inPlay = false;
  button.style.display = "block";
}

showMessage("Click start to begin!");

button.addEventListener("click", function() {
  inPlay = true;
  button.style.display = "none";
  instructions.style.display = "none";
  results.innerHTML = "";
  counter = 0;

  showMessage("Get ready!");
  showCircle();
});

function clicked(e) {
  let start = e.target.start;
  let end = new Date().getTime();
  let duration = (end-start) / 1000;

  clearTimeout(playArea.timer);
  showMessage("It took you " + duration + " seconds to hit the target.");
  if (duration > 1) {
    gameArea.children[0].remove();
    results.innerHTML = `Too slow. <span id="loser">You lost!</span> Your score was ${counter}.<br> Click the Start button to play again.`;
    resetGame();
  } else {
    gameArea.children[0].remove();
    playArea.timer = setTimeout(myCircle, random(3000));
    counter++;
    if (counter === 10) {
      results.innerHTML = `Congratulations! <span id="winner">You won!</span><br> You reached ${counter}! Click the Start button to play again.`;
      resetGame();
    }
  }
}
