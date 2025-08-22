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



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    
    //Human wins

    if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats rock.")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper.")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats scissors.")
    } 
    
    // Human loses

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beats paper.")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats rock.")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats scissors.")
    } 
    
    // It's a tie

    else if (humanChoice === computerChoice) {
        alert("It's a tie!")
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
