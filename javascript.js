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


let humanScore = 0;
let computerScore = 0;
const btns = document.getElementById("buttons");

function playRound(humanChoice, computerChoice) {
 let winner;
    
    //Human wins

 if (humanChoice === "paper" && computerChoice === "rock") {
    document.getElementById("result").textContent = "You win! Paper beats rock.";
    winner = "human";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
     document.getElementById("result").textContent = "You win! Scissors beats paper.";
     winner = "human";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
     document.getElementById("result").textContent = "You win! Rock beats scissors.";
     winner = "human";
    } 
    
    // Human loses

    else if (humanChoice === "paper" && computerChoice === "scissors") {
     document.getElementById("result").textContent ="You lose! Scissors beats paper.";
     winner = "computer";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
     document.getElementById("result").textContent = "You lose! Paper beats rock.";
     winner = "computer";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
     document.getElementById("result").textContent = "You lose! Rock beats scissors.";
     winner = "computer";
    } 
    
    // It's a tie

    else if (humanChoice === computerChoice) {
     document.getElementById("result").textContent = "It's a tie!";
     winner = "tie";
    } 
    if (winner === "human") {
     humanScore += 1;
    } else if (winner === "computer") {
     computerScore += 1;
    }
    document.getElementById("points").innerHTML=`Human score = ${humanScore}<br>Computer score = ${computerScore}`;
    
    if (humanScore === 5) {
    document.getElementById("winner").textContent = "You win!";
   let buttons = document.getElementsByTagName("button");
   for (let btn of buttons) {
    btn.disabled = true;
   }
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
        let buttons = document.getElementsByTagName("button");
   for (let btn of buttons) {
    btn.disabled = false;
  }
  computerScore = 0;
  humanScore = 0;
  resetButton.remove()
  document.getElementById("points").innerHTML=`Human score = 0<br>Computer score = 0`
  document.getElementById("winner").textContent = "";
  document.getElementById("result").textContent = "";
    } );
    btns.appendChild(resetButton);
} else if (computerScore === 5) {
    document.getElementById("winner").textContent = "Computer wins!";
    let buttons = document.getElementsByTagName("button");
   for (let btn of buttons) {
    btn.disabled = true;
  }
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", () => {
    let buttons = document.getElementsByTagName("button");
   for (let btn of buttons) {
    btn.disabled = false;
  }
  computerScore = 0;
  humanScore = 0;
  resetButton.remove();
  document.getElementById("points").innerHTML=`Human score = 0<br>Computer score = 0`;
  document.getElementById("winner").textContent = "";
  document.getElementById("result").textContent = "";
} );
    btns.appendChild(resetButton);
 }
}


document.getElementById("rock").addEventListener("click", ()=> playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));

