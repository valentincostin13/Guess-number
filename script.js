let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".message").textContent = "Introduce a number";
  } else {
    if (guess == randomNumber) {
      document.querySelector(".message").textContent = "Correct!";
      document.querySelector(".number").textContent = score;
      document.querySelector("body").style.backgroundColor = "#60b347";
      let currentHighScore = document.querySelector(".highscore").textContent;
      if (score > currentHighScore) {
        document.querySelector(".highscore").textContent = score;
      }
      restart();
    } else if (guess < randomNumber) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
      if (score == 0) {
        failed();
      }
    } else {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
      if (score == 0) {
        failed();
      }
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  restart();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function restart() {
  await sleep(1000);
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
}

function failed() {
  document.querySelector("body").style.backgroundColor = "#FF0000";
  document.querySelector(
    ".message"
  ).textContent = `Game over!The number is ${randomNumber}`;
  restart();
}
