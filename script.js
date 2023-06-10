// Select the start button
const start = document.querySelector('.start');

// 3 moves
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Game statuses
const win = 'You win';
const loss = 'You lose';
const draw = `It's a draw`;

function playerMove(){
    let playerMove = prompt("Enter your move");
    if (playerMove === ''){
        alert("Please enter a valid move");
        return;
    }
    return playerMove.toLowerCase();
}

function computerMove(){
    let computerMove = ''
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1){
        computerMove = 'rock';
    } else if (randomNumber === 2){
        computerMove = 'paper';
    } else if (randomNumber === 3){
        computerMove = 'scissors';
    }
    return computerMove;
}

function playRound(playerMove, computerMove){
    let player = playerMove();
    let computer = computerMove();
    let result = '';
    // if player picks rock
    if (player === rock){
        if (computer === rock){
            result = draw;
        } else if (computer === paper){
            result = loss;
        } else if (computer === scissors){
            result = win;
        }
    } else if (player === paper){
        if (computer === rock){
            result = win;
        } else if (computer === paper){
            result = draw;
        } else if (computer === scissors){
            result = loss;
        }
    } else if (computer === scissors) {
        if (computer === rock){
            result = loss;
        } else if (computer === paper){
            result = win;
        } else if (computer === scissors){
            result = draw;
        }
    }
    return result
}

function playGame(){
    for (let i = 0; i < 4; i++){
        let round = playRound(playerMove, computerMove);
        alert(round);
    }
}

start.addEventListener('click', ()=>{
    alert(playGame())
})