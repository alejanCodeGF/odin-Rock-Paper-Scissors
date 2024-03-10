function getChoiceInWord(n){ // Choice from number to text
    let result;
    if (n == 0) result = "Rock";
    else if (n == 1) result = "Paper";
    else if (n == 2) result = "Scissors";
    return result; 
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3); // 0 Rock, 1 Paper, 2 Scissors
}

function playRound(playerSelection, computerSelection) {
    let p1;
    p1 = (playerSelection.toLowerCase() == "rock") ? 0 : 
    p1 = (playerSelection.toLowerCase() == "paper") ? 1 : 
    p1 = (playerSelection.toLowerCase() == "scissors") ? 2 : -1;
    if (p1 == -1) return "The choice is not correct, try it again"

    let p2 = computerSelection;
    if (p1 == p2) return `It's a Tie! You both chose ${getChoiceInWord(p1)} and ${getChoiceInWord(p2)}`
    else if ((p1 + 1) == p2 || p1 == 2 && p2 == 0) return `You Lose! ${getChoiceInWord(p2)} beats ${getChoiceInWord(p1)}`
    return `You won! ${getChoiceInWord(p1)} beats ${getChoiceInWord(p2)}`
}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(prompt("Write your choice! [Rock, Paper, Scissors]"), getComputerChoice()))
    }
}

playGame() // If you press "Cancel", the game crashes and ends (is what you want)