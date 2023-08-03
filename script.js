function getComputerChoice() {
    let computerChoice = 0;
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
            computerChoice = 'rock'
            console.log('computer plays rock')
            break;
        case 2:
            computerChoice = 'paper'
            console.log('computer plays paper')
            break;
        case 3:
            computerChoice = 'scissors'
            console.log('computer plays scissors')
            break;
    }
    return computerChoice;
}

function singleRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock') {
        if(computerSelection == 'rock') {
            return('It is a tie!')
        } else if (computerSelection == 'paper') {
            return('You lose! Paper beats rock.')
        } else {
            return('You win! Rock beats paper.')
        }
    } else if (playerSelection == 'paper') {
        if(computerSelection == 'rock') {
            return('You win! Paper beats rock.')
        } else if (computerSelection == 'paper') {
            return('It is a tie!')
        } else {
            return('You lose! Scissors beats paper.')
        }
    } else {
        if(computerSelection == 'rock') {
            return('You lose! Rock beats scissors.')
        } else if (computerSelection == 'paper') {
            return('You win! Scissors beats paper.')
        } else {
            return('It is a tie!')
        }
    }
}

function game() {

}

let playerSelection = prompt("Do you choose rock, paper or scissors?");
playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));