// // Select the start button
// const start = document.querySelector('.start');

// // 3 moves
// const rock = 'rock';
// const paper = 'paper';
// const scissors = 'scissors';

// // Game statuses
// const win = 'You win';
// const loss = 'You lose';
// const draw = `It's a draw`;

// function playerMove(){
//     let playerMove = ''
//     while (playerMove === '' || playerMove === null){
//         playerMove = prompt("Enter your move");
//     }
//     return playerMove.toLowerCase();
// } to be removed

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

// function playRound(playerMove, computerMove){
//     // Player and computer moves
//     let player = playerMove();
//     let computer = computerMove();
//     // Object that stores the result and the computer move
//     let round = {
//         result: '',
//         compMove: ''
//     }
//     round.compMove = computer;
//     // if player picks rock
//     if (player === rock){
//         if (computer === rock){
//             round.result = draw;
//         } else if (computer === paper){
//             round.result = loss;
//         } else if (computer === scissors){
//             round.result = win;
//         }
//     } else if (player === paper){
//         if (computer === rock){
//             round.result = win;
//         } else if (computer === paper){
//             round.result = draw;
//         } else if (computer === scissors){
//             round.result = loss;
//         }
//     } else if (player === scissors) {
//         if (computer === rock){
//             round.result = loss;
//         } else if (computer === paper){
//             round.result = win;
//         } else if (computer === scissors){
//             round.result = draw;
//         }
//     }
//     // return the object
//     return round;
// }

// function playGame(){
//     // Variables for the wins, draws and losses
//     let wins = draws = losses = 0;
//     for (let i = 0; i < 5; i++){
//         // currentGame object
//         let currentGame = playRound(playerMove, computerMove);
//         // Evaluate the game status and update wins, draws and losses accordingly
//         if (currentGame.result === win){
//             wins+=1;
//         } else if (currentGame.result === draw){
//             draws+=1;
//         } else if (currentGame.result === loss){
//             losses+=1;
//         }
//         // Alert currentGame status and indicate computer move
//         alert(`${currentGame.result}. Computer picked ${currentGame.compMove}\nWins: ${wins} Draws: ${draws} Losses: ${losses}`)
//     }
//     return `Here are the overall results:\nWins: ${wins} Draws: ${draws} Losses: ${losses}`;
// }

// start.addEventListener('click', ()=>{
//     alert(playGame())
// })

/* Below is all new code */

// select the buttons
const rps = document.querySelectorAll('.buttons div');
// select the results div
const result = document.querySelector('.results');

// select each button
rps.forEach(button => button.addEventListener('click', ()=>{
    const playerMove = button.id;
    const compMove = computerMove();
    const result = '';
    // draw
    if (playerMove === compMove){
        result = `It's a tie`;
    }

}))