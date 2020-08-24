var you = 0
var comp = 0

function computerPlay() {
    const arr = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3)
    return arr[random]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissor') || (playerSelection == 'rock' && computerSelection == 'scissor')) {
        you++
        return ("You Win! " + playerSelection + " beats " + computerSelection)
    }
    else if ((computerSelection == 'rock' && playerSelection == 'paper') || (playerSelection == 'paper' && playerSelection == 'scissor') || (playerSelection == 'rock' && playerSelection == 'scissor')) {
        comp++
        return ("You Lose! " + computerSelection + " beats " + playerSelection)
    }
    else {
        return 'This round was a tie'
    }
}

function game() {
    let playerSelection = prompt('Enter your move (rock/paper/scissors)')
    let computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
}

for (let i = 0; i < 5; i++) {
    game()
}
console.log("You: "+you+"\nComputer: "+comp+"\n"+((you>comp)?"You win!":((you<comp)?"Computer wins!":"Tie")))