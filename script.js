// select the buttons
const rps = document.querySelectorAll('.buttons div');
// select the results div
const resultContainer = document.querySelector('.result');
// create p element to display result of current round
const result = document.createElement('p');
// select the modal
const modal = document.querySelector('.modal-container');
// select the results list
const results = document.querySelector('.results');
// select the reset button
const reset = document.querySelector('.reset');


// // 3 moves
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Game statuses
const win = 'You win. ';
const loss = 'You lose. ';
const draw = `It's a draw.`;

// variable to keep track of the rounds
let round = 0;
// array to record the winners per round
let winners = [];

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
    let computerMove = ` Computer picked ${computer}`;
    // if statements for what player picked

    // rock
    if (player === rock){
        if (computer === rock){
            result = draw;
        } else if (computer === paper){
            // result = loss + computerMove;
            result = loss;
        } else{
            // result = win + computerMove;
            result = win;
        }
    // paper
    } else if (player === paper){
        if (computer === rock){
            // result = win + computerMove;
            result = win
        } else if (computer === paper){
            result = draw;
        } else{
            // result = loss + computerMove;
            result = loss;
        }
    // scissors
    } else {
        if (computer === rock){
            // result = loss + computerMove;
            result = loss;
        } else if (computer === paper){
            // result = win + computerMove;
            result = win;
        } else{
            result = draw;
        }
    }
    winners.push(result);
    return result + computerMove;
}

// select each button
rps.forEach(button => button.addEventListener('click', ()=>{
    let winner = document.createElement('li');
    if (round < 4){
        const playerMove = button.id;
        const compMove = computerMove();
        result.innerText = returnResult(playerMove, compMove);
        // append result to the container
        resultContainer.appendChild(result);
        // create a list element to accomodate for each round's winner
        /* Code below needs rework */
        if (winners[round] === win){
            winner.innerHTML = 'Player';
        } else if (winners[round] === loss){
            winner.innerHTML = 'Computer';
        } else {
            winner.innerHTML = 'Draw';
        }
        results.appendChild(winner);
    } else if (round === 4){
        if (winners[4] === win){
            winner.innerHTML = 'Player';
        } else if (winners[4] === loss){
            winner.innerHTML = 'Computer';
        } else {
            winner.innerHTML = 'Draw';
        }
        // unhide the modal
        modal.classList.remove('hidden');
        result.innerText = '';
        round = 0;
    }
    /* Code above needs rework */
    console.log(winners[round]);
    round+=1;
}));

// hide modal when reset button is pressed
reset.addEventListener('click', ()=>{
    modal.classList.add('hidden');
})

/*  
    initialize a counter variable
    
    if round < 5, record the winner of each round
        initialize a winners array
        append the winner to the array after each round
    Once round === 5
        toggle the hidden class for the modal
        append the results into the modal
        
    reset the round counter and the winners array 

*/

