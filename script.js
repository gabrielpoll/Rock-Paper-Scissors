 function getComputerChoice() {
    let getRandomNumber = Math.random();
    console.log(getRandomNumber)
    if (0 < getRandomNumber && getRandomNumber < 0.333) {
        return ("scissor");
    } else if ( 0.333 < getRandomNumber && getRandomNumber < 0.666) {
        return ("rock");
    } else {
        return ("paper");
    }
 }

function getHumanChoice() {
    const askPlayer = prompt("Rock, paper or scissor?").toLowerCase();
    if (askPlayer === "rock") {
        return "rock";
    } else if (askPlayer === "paper") {
        return "paper";
    } else if (askPlayer === "scissor") {
        return "scissor";}
    }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'scissor') {
        if (computerChoice === 'scissor') {
            alert("TIE, scissor and scissor");
        } else if (computerChoice === 'paper') {
            alert("Human WINS, scissor and paper");
            humanScore++;
        } else {
            alert("Computer wins");
            computerScore++;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'paper') {
            alert("TIE, paper and paper");
        } else if (computerChoice === 'rock') {
            alert("Human wins, paper beats rock");
            humanScore++;
        } else {
            alert("Computer wins");
            computerScore++;
        }
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            alert("Tie, rock and rock");
        } else if (computerChoice === 'scissor') {
            alert("Human wins, rock beat scissor");
            humanScore++;
        } else {
            alert("Computer wins");
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i ++) {
        let humanSelect = getHumanChoice();
        let computerSelect = getComputerChoice();
        playRound(humanSelect, computerSelect);
    }
    if (humanScore > computerScore) {
        alert(`Human wins. Human: ${humanScore} | Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`Computer wins. Human: ${humanScore} | Computer: ${computerScore}`);
    } else if (computerScore === humanScore) {
        alert(`No one win, a TIE. Human: ${humanScore} | Computer: ${computerScore}`);
    }
}

playGame();
