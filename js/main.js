console.log('hellow');

//Caching the DOM - putting dom elements into variables so you don't constantly need to getElementById('etc').
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById(("pcScore"));
// Use '_' for variable names so you know it's a DOM variable
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3); //Math.floor rounds the number to the nearest decimal number and the '* 3' gives us the max number to be random with.
  return choices[randomNumber];
}
// console.log(getComputerChoice());


function win(user, computer) {
  const smallUserWord = "user".fontsize(3).sup(3); //to show which hand belongs to which player
  const smallCompWord = "pc".fontsize(3).sup(3);
  const user_div = document.getElementById(user);
  userScore++; //increments +1 whenever a win is made by the user
  userScore_span.innerHTML = userScore; //calls on the DOM for the scoreboard to change when a win is made
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user}${smallUserWord} vs ${computer}${smallCompWord}. You Win!`; //DOM element prints which was played by the user and PC and who won the hand
  document.getElementById('r').classList.add('greenGlow');
  console.log(user_div);
  setTimeout(function() { user_div.classList.remove('greenGlow') }, 300);
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup(3);
  const smallCompWord = "pc".fontsize(3).sup(3);
  result_p.innerHTML = `${user}${smallUserWord} vs ${computer}${smallCompWord}. You Lose!`;
}

function draw(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup(3);
  const smallCompWord = "pc".fontsize(3).sup(3);
  result_p.innerHTML = `${user}${smallUserWord} vs ${computer}${smallCompWord}. It's a draw!`;;
}

// A function that compares the User's hand to the PC's hand
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log('PC: ' + computerChoice + ' VS ' + 'User: ' + userChoice);
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
    win(userChoice, computerChoice);
      console.log("User Wins!");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      console.log("You lose. PC wins!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    draw(userChoice, computerChoice);
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
