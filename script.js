const buttons = document.querySelectorAll(".buttons button");
const resultPara = document.querySelector("#result");
const playerSelectionID = document.querySelector("#player-selection");
const computerSelectionID = document.querySelector("#computer-selection");
const computerScoreID = document.querySelector("#computer-score");
const playerScoreID = document.querySelector("#player-score");
const roundsID = document.querySelector("#rounds");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        const playerSelection = e.target.textContent.toLowerCase();
        const computerSelection = getComputerChoice();

        playerSelectionID.textContent = playerSelection;
        computerSelectionID.textContent = computerSelection;

        console.log(`jogador escolheu ${playerSelection} e o computador ${computerSelection}`)
        
        playRound(playerSelection, computerSelection);
    }) 
});

function getComputerChoice() {
    const num = Math.random();
    switch (true) {
        case (num < 0.33):
            return "rock";
        case (num < 0.66):
            return "paper";
        default:
            return "scissor";
    }
}

const gameState = {
    playerScore: 0,
    computerScore: 0,
    rounds: 0
};

function playRound(player, computer) {
    const tabelaValores = {
        "rock": "scissor",
        "paper": "rock",
        "scissor": "paper"
    };

    if (player === computer) {
        resultPara.textContent = 'Empate';
    }
    else if (tabelaValores[player] === computer) {
        resultPara.textContent = 'Player wins';
        gameState.playerScore += 1;
        playerScoreID.textContent = gameState.playerScore;
    }
    else {
        resultPara.textContent = 'Computer Wins';
        gameState.computerScore += 1;
        computerScoreID.textContent = gameState.computerScore;
    }
    gameState.rounds += 1
    roundsID.textContent = gameState.rounds;
}



