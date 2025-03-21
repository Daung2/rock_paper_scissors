let computerSeletion;
let userSelection;
let humanscore = 0;
let computerscore = 0;

function getComputerChoice() {
    computerSeletion = Math.floor(Math.random()*3);
    switch (computerSeletion) {
        case 0:
            computerSeletion = "Rock";
        break;
        case 1:
            computerSeletion = "Paper";
        break;
        case 2:
            computerSeletion = "Scissors";
        break
    }
    return computerSeletion;
}

function getHumanChoice() {
    userSelection = document.getElementById('humanChoice').value;
    return userSelection;
}

function playRound (userChoice,computerChoice) {
    if (userChoice ===computerChoice) {
        alert("It's a tie!");
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        humanscore++;
        alert("You win! Rock beats Scissors");
    }
    if (userChoice === "Rock" && computerChoice === "Paper") {
        computerscore++;
        alert("You lose! Paper beats Rock");
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        humanscore++;
        alert("You win! Paper beats Rock");
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        computerscore++;
        alert("You lose! Scissors beats Paper");
    }
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        humanscore++;
        alert("You win! Scissors beats Paper.");
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        computerscore++;
        alert = ("You lose! Rock beats Scissors");
    }
}

function playGame() {

    getHumanChoice();
    getComputerChoice();
    playRound(userSelection,computerSeletion);
    alert("Your score:"+humanscore+ "   Computerscore:" +computerscore)+ ".";

}