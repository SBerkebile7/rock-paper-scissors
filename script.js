
function game() {
    let pWin = 0;
    let cWin = 0;

    const choiceRock = document.getElementById("rock");
    const choicePaper = document.getElementById("paper");
    const choiceScissors = document.getElementById("scissors");

    const playerScore = document.getElementById("playerScore");
    const computerScore = document.getElementById("computerScore");
    const gameHistory = document.getElementById("gameHistory");

    choiceRock.addEventListener("click", (event) => {
        event.preventDefault();
        playRound("rock");
    })
    choicePaper.addEventListener("click", (event) => {
        event.preventDefault();
        playRound("paper");
    })
    choiceScissors.addEventListener("click", (event) => {
        event.preventDefault();
        playRound("scissors");
    })

    function playRound(choice){
        const playerChoice = choice;

        const computerSelection = getComputerChoice();

        function getComputerChoice() {
        const compChoice = document.createElement("span");

            let computerChoice = 0;
            switch(Math.floor(Math.random() * 3) + 1) {
                case 1:
                    computerChoice = 'rock'
                    gameHistory.appendChild(compChoice);
                    compChoice.textContent = 'Computer plays rock'
                    break;
                case 2:
                    computerChoice = 'paper'
                    gameHistory.appendChild(compChoice);
                    compChoice.textContent = 'Computer plays paper'
                    break;
                case 3:
                    computerChoice = 'scissors'
                    gameHistory.appendChild(compChoice);
                    compChoice.textContent = 'Computer plays scissors'
                    break;
            }
            return computerChoice;
        }

        console.log(playerChoice);

        const pChoice = document.createElement("span");
        const gameOutcome = document.createElement("span");

        if(playerChoice == 'rock') {
            if(computerSelection == 'rock') {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays rock'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('It is a tie!')
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            } else if(computerSelection == 'paper') {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays rock'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('Computer wins!')
                cWin++;
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            } else {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays rock'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('Player wins!')
                pWin++;
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            }
        } else if(playerChoice == 'paper') {
            if(computerSelection == 'rock') {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays paper'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('Player wins!')
                pWin++;
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            } else if(computerSelection == 'paper') {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays paper'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('It is a tie!')
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            } else {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays paper'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('Computer wins!')
                cWin++;
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            }
        } else {
            if(computerSelection == 'rock') {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays scissors'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('Computer wins!')
                cWin++;
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            } else if(computerSelection == 'paper') {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays scissors'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('Player wins!')
                pWin++;
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            } else {
                gameHistory.appendChild(pChoice);
                pChoice.textContent = 'Player plays scissors'
                gameHistory.appendChild(gameOutcome);
                gameOutcome.textContent = ('It is a tie!')
                computerScore.textContent = ("Computer Score: " + cWin);
                playerScore.textContent = ("Player Score: " + pWin);
            }
        }
    }

    if(pWin == 3) {
        console.log("Congratulations! You beat the computer " + pWin + " to " + cWin + ".")
    } else if(cWin == 3) {
        console.log('Oh no! You lost to the computer ' + cWin + " to " + pWin + ".'")
    } else {
        console.log("It is a tie with a score of " + pWin + " and " + cWin + ".")
    }
}

game();