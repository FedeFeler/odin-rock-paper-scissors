function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 0.3) {
        return "rock"
    } else if (computerChoice > 0.3 && computerChoice <= 0.6) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Write an option").toLowerCase();
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    
    

    function playRound(humanChoice, computerChoice) {
    let winner;
    
    //Human wins

    if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats rock.");
        winner = "human";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper.");
        winner = "human";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats scissors.");
        winner = "human";
    } 
    
    // Human loses

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beats paper.");
        winner = "computer";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats rock.");
        winner = "computer";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats scissors.");
        winner = "computer";
    } 
    
    // It's a tie

    else if (humanChoice === computerChoice) {
        alert("It's a tie!");
        winner = "tie";
    } 
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
}

let roundCounter = 0;
while (roundCounter <= 4) {
    playGame();
    roundCounter += 1;
} 

if (humanScore > computerScore) {
    alert(`Human score: ${humanScore}.\nComputer score: ${computerScore}.\nWinner: Human.`)
} else if (humanScore < computerScore) {
    alert(`Human score: ${humanScore}.\nComputer score: ${computerScore}.\n
Winner: Computer.`)
} else {
    alert("It's a tie.")
}
