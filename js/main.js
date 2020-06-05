console.log('hellow');

//Caching the DOM - putting dom elements into variables so you don't constantly need to getElementById('etc').
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById(("pcScore"));
// Use '_' for variable names so you know it's a DOM variable
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3); //Math.floor rounds the number to the nearest decimal number and the '* 3' gives us the max number to be random with.
  return choices[randomNumber];
}
// console.log(getComputerChoice());

// A function that compares the User's hand to the PC's hand
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log('PC: ' + computerChoice + ' VS ' + 'User: ' + userChoice);
  switch (userChoice + computerChoice) {
    case "rockpaper":
    case "paperrock":
    case "scissorspaper":
      console.log("User Wins!");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("PC wins!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("It's a draw!");
      break;

  }
}

function main() {
    rock_div.addEventListener('click', function() {
      game("rock");
    });
    paper_div.addEventListener('click', function() {
      game("paper");
    });
    scissors_div.addEventListener('click', function() {
      game("scissors");
    });
}

main();
