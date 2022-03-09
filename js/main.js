/* JavaScript for rock-paper-scissors game */

//Define Global Variables
let playerSelection;
let computerSelection;
let playerScore=0;
let computerScore=0;
let tie=0;
let playerWinRound="You win this round";
let computerWinRound="Computer win this round";
let tiePlayerComputer="It's a tie!";
let playerWinGame="Congratulations! You win the game.";
let computerWinGame="Computer win the game.";

//Computer randomly selects Rock, Paper or Scissors
function computerPlay () {
    const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
    const randomComputerSelection = Math.floor(Math.random()*computerChoices.length);
    const computerSelection=(randomComputerSelection, computerChoices[randomComputerSelection]);
    return computerSelection;
}

//Play one round between Player & Computer
function playRound() {
    playerSelection=prompt("Let's play Rock, Paper, Scissors! Please write your choise:").toUpperCase();
    computerSelection=computerPlay();
    if (playerSelection!="ROCK" & playerSelection!="PAPER" & playerSelection!="SCISSORS") {
        playRound();
    }
    if (playerSelection===computerSelection) {
        return tiePlayerComputer;
    }
    else if (playerSelection==="ROCK" & computerSelection==="PAPER") {
        return computerWinRound;
    }
    else if (playerSelection==="PAPER" & computerSelection==="SCISSORS") {
        return computerWinRound;
    }
    else if (playerSelection==="SCISSORS" & computerSelection==="ROCK") {
        return computerWinRound;
    }
    else {
        return playerWinRound;
    }
}

//Play best of five
for (let i=1; i<100; i++) {
    let roundResult=playRound();
    if (roundResult===playerWinRound) {
        playerScore++;
    }
    else if (roundResult===computerWinRound) {
        computerScore++;
    }
    else {
        tie++;
    }
    console.log(`Round ${i}:`);
    console.log(`You selected: ${playerSelection} - Computer selected: ${computerSelection}`);
    console.log(roundResult);
    console.log(`Your Score: ${playerScore} : Computer Score: ${computerScore}`);
    if (playerScore===3 || computerScore===3) {
        break;
    }
}

//Declare the winner
if (playerScore===3) {
    console.log(playerWinGame);
}
else {
    console.log(computerWinGame);
}
