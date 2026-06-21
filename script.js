// Variables to track game state
let playerScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play the game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let message = "";

    if (playerChoice === computerChoice) {
        message = `Draw! Computer also chose ${computerChoice}`;
    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        message = `You Win! Computer chose ${computerChoice}`;
    } 
    else {
        computerScore++;
        message = `You Lose! Computer chose ${computerChoice}`;
    }

    // Update DOM
    document.getElementById("result").textContent = message;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// User events using addEventListener
document.getElementById("rock").addEventListener("click", function () {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playGame("scissors");
});