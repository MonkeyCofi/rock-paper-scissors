/*
    Get user input for move
    Assign three variables: 1 for rock, 2 for paper, 3 for scissors
    Randomly generate computer move
*/

/*
    create computer move variable
    use math.floor() to round down the value of:
        (math.random() * 3) + 1 as there are 3 moves. Add 1 because math.random counts 0 as the start
    return this value
*/
const start = document.querySelector('.start');
const rock = 1;
const paper = 2;
const scissors = 3;

function playerMove() {
    let playerMove;
    playerMove = prompt("enter your move");
    return playerMove;
}

function computerMove() {
    let computerMove = Math.floor((Math.random() * 3) + 1);
    return computerMove;
}
