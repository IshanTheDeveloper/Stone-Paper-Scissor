let userScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#comp-score");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result-area");
const gameplay1 = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 1) {
    computerScore.innerText = Number(computerScore.innerText) + 1;
    result.innerText = "Computer won";
  } else if (randomNum == 2) {
    userScore.innerText = Number(userScore.innerText) + 1;
    result.innerText = "User won";
  } else {
    result.innerText = "It's a tie!!";
  }
};
const gameplay2 = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 1) {
    result.innerText = "It's a tie!!";
  } else if (randomNum == 2) {
    computerScore.innerText = Number(computerScore.innerText) + 1;
    result.innerText = "Computer won";
  } else {
    userScore.innerText = Number(userScore.innerText) + 1;
    result.innerText = "User won";
  }
};
const gameplay3 = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 1) {
    userScore.innerText = Number(userScore.innerText) + 1;
    result.innerText = "User won";
  } else if (randomNum == 2) {
    result.innerText = "It's a tie!!";
  } else {
    computerScore.innerText = Number(computerScore.innerText) + 1;
    result.innerText = "Computer won";
  }
};
const resetoperation = () => {
  userScore.innerText = 0;
  computerScore.innerText = 0;
};
rock.addEventListener("click", gameplay1);
paper.addEventListener("click", gameplay2);
scissor.addEventListener("click", gameplay3);
reset.addEventListener("click", resetoperation);
