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
    if (p1 == -1) return "The choice is not correct, try it again";

    let p2 = computerSelection;
    if (p1 == p2) return `It's a Tie! You both chose ${getChoiceInWord(p1)} and ${getChoiceInWord(p2)}`;
    else if ((p1 + 1) == p2 || p1 == 2 && p2 == 0) return `You lose! ${getChoiceInWord(p2)} beats ${getChoiceInWord(p1)}`;
    return `You won! ${getChoiceInWord(p1)} beats ${getChoiceInWord(p2)}`;
}

const BEST_OF = 5
const btns = document.querySelectorAll("button");
const log_text = document.querySelector("#log-text");
const points_p1 = document.querySelector("#p1-points");
const points_p2 = document.querySelector("#p2-points");
const div_btns = document.querySelector("#div_btns");
let gameOver = true;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (gameOver) { // if the game ends, you can't continue playing (else: pass)
            let result = playRound(btn.name, getComputerChoice());
            log_text.textContent = result;
            if (result.startsWith("You won")){
                points_p1.textContent += "✅";
            }
            else if (result.startsWith("You lose")){
                points_p2.textContent += "✅";
            }
            if (points_p1.textContent.length >= BEST_OF) {
                log_text.textContent = "You win!";
                gameOver = false; // condition == false, generate try again button
            }
            else if (points_p2.textContent.length >= BEST_OF) {
                log_text.textContent = "Computer wins";
                gameOver = false;
            }
            if (!gameOver){
                const btn_try_again = document.createElement("button");
                btn_try_again.textContent = "Try again!";
                btn_try_again.addEventListener("click", () => { // Event of the try again button
                    log_text.textContent = "Let's start!";
                    points_p1.textContent = "";
                    points_p2.textContent = "";
                    div_btns.removeChild(btn_try_again);
                    gameOver = true; // Comes back to cond = 0, so the game restarts
                })
                div_btns.appendChild(btn_try_again); // append button
            }
        }
    })
});
