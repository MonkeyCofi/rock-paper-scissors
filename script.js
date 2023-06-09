const start = document.querySelector('.start');
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Get the player's move and return it in lowercase
function playerMove() {
    let playerMove;
    playerMove = prompt("enter your move");
    return playerMove.toLowerCase();
}

function computerMove() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerMove = ''
    if (randomNumber === 1) {
        computerMove = 'rock';
    } else if (randomNumber === 2) {
        computerMove = 'paper'
    } else {
        computerMove = 'scissors'
    }
    return computerMove;
}

/* 
    Get both user and computer moves and store in a variable
    
*/
function playRound(playerMove, computerMove) {
    playerMove = playerMove()
    computerMove = computerMove()
    // rock
    if (playerMove === rock){
        if (computerMove === rock){
            return `It's a tie`
        } else if (computerMove === paper){
            return `You lose. Computer chose paper`
        } else if (computerMove === scissors){
            return `You win. Computer chose scissors`
        }
    // Paper
    } else if (playerMove === paper){
        if (computerMove === rock){
            return `You win. Computer chose rock`
        } else if (computerMove === paper){
            return `It's a tie`
        } else if (computerMove === scissors){
            return `You lose. Computer chose scissors`
        }
    // Scissors
    } else {
        if (computerMove === rock){
            return `You lose. Computer chose rock`
        } else if (computerMove === paper){
            return `You win. Computer chose paper`
        } else if (computerMove === scissors){
            return `It's a tie`
        }
    }
}

function game(playerMove, computerMove) {
    let wins = losses = draws = 0;
}

start.addEventListener('click', ()=> {
    console.log(playRound(playerMove, computerMove));
})