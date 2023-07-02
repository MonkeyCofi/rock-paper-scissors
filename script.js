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
let round = 1;
// array to record the winners per round
let winners = [];
// variable for final round
let FINAL_ROUND = 5;
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
// rps.forEach(button => button.addEventListener('click', ()=>{
//     let winner = document.createElement('li');
//     const playerMove = button.id;
//     const compMove = computerMove();
//     result.innerText = returnResult(playerMove, compMove);
//     // append result to the container
//     resultContainer.appendChild(result);
//     ++round;
// }));

rps.forEach(button => button.addEventListener('click', ()=>{
    let winner = document.createElement('li');
    const currentRound = `Round ${round}: `;
    if (round < FINAL_ROUND){
        let playerMove = button.id;
        let compMove = computerMove();
        result.innerText = returnResult(playerMove, compMove);
        // append result to the container
        resultContainer.appendChild(result);

        // conditions for modal popup
        if (winners[round-1] === win){
            winner.innerHTML = currentRound + `Player won`;
        } else if (winners[round-1] === loss){
            winner.innerHTML = currentRound + `Computer won`;
        } else {
            winner.innerHTML = currentRound + `It's a draw`;
        }
        // append the results to the modal
        results.appendChild(winner);
        console.log(round);
        // increment the round
        round+=1;
    } else {
        // add to the round
        round++;
        // edge case for the last round
        if (winners[FINAL_ROUND - 2] === win){
            winner.innerHTML = currentRound + `Player won`;
        } else if (winners[FINAL_ROUND - 2] === loss){
            winner.innerHTML = currentRound + `Computer won`;
        } else {
            winner.innerHTML = currentRound + `It's a draw`;
        };
        results.appendChild(winner);
        // unhide the modal
        modal.classList.remove('hidden');
        // reset round count to 1
        round = 1;
        // empty the winners array
        winners = [];
    }
}));

// hide modal when reset button is pressed
reset.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    /* 
        when play again is hit, remove all the results from the results list
        ignore the first child of nodes, as it is a header
        start selection from the second child of ul.results

        while childNodes[1] of results is not NULL
            remove results childNodes
            next childNode will automatically be set to childNode[1]
    */
    while(results.childNodes[1]){
        results.removeChild(results.childNodes[1]);
    }
});