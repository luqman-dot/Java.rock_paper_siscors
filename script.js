const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementById('result');
const userScoreDiv = document.getElementById('user-score');
const computerScoreDiv = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener('click', playGame));

function playGame(event) {
    const userChoice = event.target.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, winner);
    updateScores(winner);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function displayResult(userChoice, computerChoice, winner) {
    if (winner === 'tie') {
        resultDiv.textContent = `It's a tie! You both chose ${userChoice}.`;
    } else if (winner === 'user') {
        resultDiv.textContent = `You win! ${capitalize(userChoice)} beats ${computerChoice}.`;
    } else {
        resultDiv.textContent = `You lose! ${capitalize(computerChoice)} beats ${userChoice}.`;
    }
}

function updateScores(winner) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    userScoreDiv.textContent = `Your Score: ${userScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
