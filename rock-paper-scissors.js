const choices = ["Rock", "Paper", "Scissors"];

// Return 'Rock', 'Papers', or 'Scissors' randomly
function computerPlay() {
    let roll = Math.floor(Math.random()*3);
    return choices[roll];
}

// Return input string with first letter capitalized, rest lowercase
function parseInput(selection) {
    return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
}

// Returns true for valid selection, else returns false
function checkSelection(selection) {
    if (!choices.includes(selection)) {
        console.log("Error! Invalid Input! Please enter Rock, Paper, or Scissors!");
        return false;
    }
    return true;
}

// Prints round outcome to console
function logOutput(playerSelection, computerSelection, outcome) {

    if (outcome === 1) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!"`);
    }

    else if (outcome === -1) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }

    else {
        console.log("It's a Tie!");
    }
}

// Prints game outcome to the console
function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You won the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("The game was a tie!");
    }
}

// Returns 1 for player wins, 0 for tie, and -1  for computer wins
function playRound(playerSelection, computerSelection) {
    let playerParsed = parseInput(playerSelection)
    let computerParsed = parseInput(computerSelection)

    if (playerParsed === computerParsed) {
        return 0;
    }

    if (playerParsed === "Rock") {
        
        if (computerParsed === "Scissors") {
            return 1;
        }
        return -1;
    } 
    
    else if (playerParsed === "Paper") {

        if (computerParsed === "Rock") {
            return 1;
        }
        return -1;
    }

    // playerParsed === "Scissors"
    if (computerParsed === "Paper") {
        return 1;
    }
    return -1;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round=0; round<5; round++) {
        computerSelection = computerPlay();
        playerSelection = parseInput(prompt("Enter Rock, Paper, or Scissors!"));

        while (!checkSelection(playerSelection)) {
            playerSelection = parseInput(prompt("Enter Rock, Paper, or Scissors!"));
        }

        outcome = playRound(playerSelection, computerSelection);

        logOutput(playerSelection, computerSelection, outcome);

        if (outcome === 1) {
            playerScore++;
        }

        else if (outcome === -1) {
            computerScore++;
        }
    }

    declareWinner(playerScore, computerScore);
}