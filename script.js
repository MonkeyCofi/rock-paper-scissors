// // 3 moves
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Game statuses
const win = 'You win. ';
const loss = 'You lose. ';
const draw = `It's a draw.`;

// compute the computer move
function computerMove(){
    let computerMove = ''
    // get random number between 1 and 3
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    // assign each move with numbers 1 through 3
    if (randomNumber === 1){
        computerMove = 'rock';
    } else if (randomNumber === 2){
        computerMove = 'paper';
    } else if (randomNumber === 3){
        computerMove = 'scissors';
    }
    return computerMove;
}
// function to get the result of the current round
function returnResult(player, computer){
    let result = '';
    let computerMove = `Computer picked ${computer}`;
    // if statements for what player picked

    // rock
    if (player === rock){
        if (computer === rock){
            result = draw;
        } else if (computer === paper){
            result = loss + computerMove;
        } else{
            result = win + computerMove;
        }
    // paper
    } else if (player === paper){
        if (computer === rock){
            result = win + computerMove;
        } else if (computer === paper){
            result = draw;
        } else{
            result = loss + computerMove;
        }
    // scissors
    } else {
        if (computer === rock){
            result = loss + computerMove;
        } else if (computer === paper){
            result = win + computerMove;
        } else{
            result = draw;
        }
    }
    return result;
}

// select the buttons
const rps = document.querySelectorAll('.buttons div');
// select the results div
const resultContainer = document.querySelector('.results');
// create p element to display result of current round
const result = document.createElement('p');

let round = 0;
// array to record the winners per round
let winners = [];


// select each button
rps.forEach(button => button.addEventListener('click', ()=>{
    // base the player move on the id of the button pressed
    const playerMove = button.id;
    // call computer move and store it in variable
    const compMove = computerMove();
    
    result.innerText = returnResult(playerMove, compMove);
    // append result to the container
    resultContainer.appendChild(result);
}));

/*  
    initialize a counter variable
    
    if round < 5, record the winner of each round
        use an array to record the winner
        append the winner to the array after each round
    Once round === 5, print the overall results
    reset the round counter and the winners array 

*/

