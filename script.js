let playerLives = 5;
let computerLives = 5;
//testing why my github is being difficult
let round = 1; 
const roundHeading = document.getElementById('round');

const options = ["rock", "paper", "scissors"];
const getComputerChoice = () => options[Math.floor(Math.random() * 3)];

const cards = document.querySelectorAll('.card-human');

const playerHearts = document.querySelectorAll('.human-hearts .heart');
const computerHearts = document.querySelectorAll('.computer-hearts .heart');

cards.forEach(card => {
  card.addEventListener('click', () => {
    round += 1;
    roundHeading.textContent = `ROUND ${round}`;
    if (playerLives === 0 || computerLives === 0) {
      if (playerLives === 0) {
        alert("Game over! Computer won the game!");
      } else {
        alert("Good Game! You Win!");
      }
      return;
    }

    const playerChoice = card.id;
    const computerChoice = getComputerChoice();

    const computerCardImg = document.querySelector(`#${computerChoice}PC img`);
    if (computerCardImg) {
      computerCardImg.classList.add('glow-red');
      setTimeout(() => {
        computerCardImg.classList.remove('glow-red');
      }, 300); 
    }

    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      computerLives -= 1;
      if (computerLives >= 0) computerHearts[computerLives].style.visibility = 'hidden';
    } else {
      playerLives -= 1;
      if (playerLives >= 0) playerHearts[playerLives].style.visibility = 'hidden';
    }

  });
});
