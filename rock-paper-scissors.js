const choices = ["Rock", "Paper", "Scissors"];
const score = [0, 0];
gameOver = false;

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
function playRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return 0;
    }

    if (playerSelection === "Rock") {
        
        if (computerSelection === "Scissors") {
            return 1;
        }
        return -1;
    } 
    
    else if (playerSelection === "Paper") {

        if (computerSelection === "Rock") {
            return 1;
        }
        return -1;
    }

    // playerParsed === "Scissors"
    if (computerSelection === "Paper") {
        return 1;
    }
    return -1;
}

function updateScoreBoard(playerSelection) {
    outcome = playRound(playerSelection);

    scoreBoard = document.querySelector(".scoreboard");
    notifications = document.querySelector(".notifications");

    if (outcome === 1) {
        score[1]++;
        notifications.innerHTML = "Nice one!";
    }

    else if (outcome === -1) {
        score[0]++;
        notifications.innerHTML = "Darn...";
    }

    else {
        notifications.innerHTML = "It's a tie.";
    }

    scoreBoard.innerHTML = `Computer: ${score[0]} | You: ${score[1]}`;

    checkForWinner();
}

function checkForWinner() {
    if (gameOver) return;

    if (score[0] === 5) {
        alert("Curses!! The machines won!");
        gameOver = true;
    }
    else if (score[1] === 5) {
        alert("Yippee!! Humanity won!");
        gameOver = true;
    }
}