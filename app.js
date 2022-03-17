const buttons = document.querySelectorAll('button')
const result = document.querySelector('#score')
let playerScore = 0;
let computerScore = 0;

// Function to generate a number between 1 and 3. 1 = Rock, 2 = Paper, 3 = Scissors
function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1
    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else if (num == 3) {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {

    let winnerMessage = `You win! ${playerSelection} beats ${computerSelection}.`
    let loserMessage = `You lose! ${computerSelection} beats ${playerSelection}.`
    let drawMessage = `Draw! Both picked ${playerSelection}.`

    if (playerScore === 5 || computerScore === 5) {return `A winner has already been declared. Player Score: ${playerScore}, Computer Score: ${computerScore}`}
    if (playerSelection == computerSelection) { return `${drawMessage}. Player: ${playerScore}, Computer: ${computerScore}` }

    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            playerScore++
            return `${winnerMessage}. Player: ${playerScore}, Computer: ${computerScore}`
        } else if (computerSelection == "Paper") {
            computerScore++
            return `${loserMessage}. Player: ${playerScore}, Computer: ${computerScore}`
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            playerScore++
            return `${winnerMessage}. Player: ${playerScore}, Computer: ${computerScore}`
        } else if (computerSelection == "Rock") {
            computerScore++
            return `${loserMessage}. Player: ${playerScore}, Computer: ${computerScore}`
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore++
            return `${winnerMessage}. Player: ${playerScore}, Computer: ${computerScore}`
        } else if (computerSelection == "Scissors") {
            computerScore++
            return `${loserMessage}. Player: ${playerScore}, Computer: ${computerScore}`
        }
    } else { return "Something went wrong" }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = prompt("Enter Rock, Paper or Scissors")
        //let playerSelection = buttonsArr[]
        console.log(playRound(playerSelection, computerSelection))
    }
}


// Adds an eventlistener to each of our buttons, and the button returns the id attached to it when the event is triggered
buttons.forEach(element => {
    element.addEventListener('click', function (e){
        let playerSelection = element.id
        let computerSelection = computerPlay()
        result.textContent = playRound(playerSelection, computerSelection)
        console.log(`Player Chose: ${playerSelection}, Computer Chose: ${computerSelection}. Score: ${playerScore}:${computerScore}`)
    })
});