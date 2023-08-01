function getComputerChoice() {
    let computerChoice = 0;
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
    return computerChoice;
}

function singleRound(playerSelection, computerSelection) {

}

function game() {

}

const computerSelection = getComputerChoice();
let playerSelection = prompt("Do you choose rock, paper or scissors?");