const start = document.querySelector('.start');

// Variables for the different moves
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Viarable for the different statuses of the game
const win = 'You win.'
const tie = `It's a tie.`
const loss = 'You lose.'


// Get the player's move and return it in lowercase
function playerMove() {
    let playerMove = ''
    playerMove = prompt("Enter your move");
    if (playerMove === ''){
        alert("Please enter a move")
    }
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

function playRound(playerMove, computerMove) {
    playerMove = playerMove()
    computerMove = computerMove()
    let computerLog = ` Computer picked ${computerMove}`
    
    let result = ''
    // rock
    // if (playerMove === rock){
    //     if (computerMove === rock){
    //         return `It's a tie`
    //     } else if (computerMove === paper){
    //         return `You lose. Computer chose paper`
    //     } else if (computerMove === scissors){
    //         return `You win. Computer chose scissors`
    //     }
    // // Paper
    // } else if (playerMove === paper){
    //     if (computerMove === rock){
    //         return `You win. Computer chose rock`
    //     } else if (computerMove === paper){
    //         return `It's a tie`
    //     } else if (computerMove === scissors){
    //         return `You lose. Computer chose scissors`
    //     }
    // // Scissors
    // } else {
    //     if (computerMove === rock){
    //         return `You lose. Computer chose rock`
    //     } else if (computerMove === paper){
    //         return `You win. Computer chose paper`
    //     } else if (computerMove === scissors){
    //         return `It's a tie`
    //     }
    // }

    if (playerMove === rock){
        if (computerMove === rock){
            result = tie;
            return result;
        } else if (computerMove === paper){
            result = loss;
            return result;
        } else {
            result = win;
            return result;
        }
    } else if (playerMove === paper){
        if (computerMove === rock){
            result = win;
            return result;
        } else if (computerMove === paper){
            result = tie;
            return result;
        } else {
            result = loss;
            return result;
        }
    } else if (playerMove === scissors){
        if (computerMove === rock){
            result = loss;
            return result;
        } else if (computerMove === paper){
            result = win;
            return result;
        } else {
            result = tie;
            return result;
        }
    }
}

function playGame(){
    let wins = ties = losses = 0;
    for (let i = 0; i < 4; i++){
        let game = playRound(playerMove, computerMove);
        if (game === win){
            wins++;
        } else if (game === tie){
            ties++;
        } else if (game === loss){
            losses++;
        }
    }
    alert(`Wins: ${wins} Ties: ${ties} Losses: ${losses}`);
}

start.addEventListener('click', ()=> {
    playGame();
})