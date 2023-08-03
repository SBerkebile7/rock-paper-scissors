
function game() {
    let pWin = 0;
    let cWin = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose rock, paper or scissors?");
        playerSelection.toLowerCase();

        const computerSelection = getComputerChoice();
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

        if(playerSelection == 'rock') {
            if(computerSelection == 'rock') {
                console.log('It is a tie!')
            } else if(computerSelection == 'paper') {
                console.log('You lose! Paper beats rock.')
                cWin++;
            } else {
                console.log('You win! Rock beats scissors.')
                pWin++;
            }
        } else if(playerSelection == 'paper') {
            if(computerSelection == 'rock') {
                console.log('You win! Paper beats rock.')
                pWin++;
            } else if(computerSelection == 'paper') {
                console.log('It is a tie!')
            } else {
                console.log('You lose! Scissors beats paper.')
                cWin++;
            }
        } else {
            if(computerSelection == 'rock') {
                console.log('You lose! Rock beats scissors.')
                cWin++;
            } else if(computerSelection == 'paper') {
                console.log('You win! Scissors beats paper.')
                pWin++;
            } else {
                console.log('It is a tie!')
            }
        }
    }
    if(pWin > cWin) {
        console.log("Congratulations! You beat the computer " + pWin + " to " + cWin + ".")
    } else if(cWin > pWin) {
        console.log('Oh no! You lost to the computer ' + cWin + " to " + pWin + ".'")
    } else {
        console.log("It is a tie with a score of " + pWin + " and " + cWin + ".")
    }
}

game();