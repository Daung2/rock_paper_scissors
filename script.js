let computerSeletion;
let userSelection;
let humanscore = 0;
let computerscore = 0;
let rounds = 0;
let humanChoice = document.getElementById("humanChoice");
let uiHumanScore = document.getElementById("humanScore");
let scores = document.getElementById("scores");
let uiComputerScore = document.getElementById("computerScore");
let win = document.querySelector(".winner");
let buttom = document.getElementById("restart");

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



humanChoice.addEventListener("click",(e) =>{
    let target = e.target;
    switch(target.id) {
        case "rock": 
            userSelection = "Rock";
        break
        case "paper": 
            userSelection = "Paper";
        break
        case "scissors": 
            userSelection = "Scissors";
        break
    }
    
    if(humanscore == 5 || computerscore == 5){
        e.preventDefault()
        endGame();
    }
    else{
        playGame();
    }
    
})

// function getHumanChoice() {
//     userSelection = document.getElementById('humanChoice').value;
//     return userSelection;
// }

function playRound (userChoice,computerChoice) {
    rounds++;
    let winOrLose = "";
    if (userChoice ===computerChoice) {
        winOrLose = "It's a tie!";
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        humanscore++;
        winOrLose = "You win! Rock beats Scissors";
    }
    if (userChoice === "Rock" && computerChoice === "Paper") {
        computerscore++;
        winOrLose= "You lose! Paper beats Rock";
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        humanscore++;
        winOrLose = "You win! Paper beats Rock";
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        computerscore++;
        winOrLose = "You lose! Scissors beats Paper";
    }
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        humanscore++;
        winOrLose = "You win! Scissors beats Paper.";
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        computerscore++;
        winOrLose = "You lose! Rock beats Scissors";
    }
    win.textContent = winOrLose;
    win.append();
}

function playGame() {
    getComputerChoice();
    playRound(userSelection,computerSeletion);
    uiHumanScore.textContent = `HumanScore: ${humanscore}`;
    uiComputerScore.textContent = `ComputerScore: ${computerscore}`;
    scores.insertBefore(uiHumanScore, buttom);
    scores.append(uiComputerScore);
};

function endGame(){
    if(humanscore == 5) {
        win.textContent = "Congratulation, You win!!";
        win.append;
    }
    if (computerscore == 5) {
        win.textContent = "Oops, You lose!!";
        win.append;
    }
   
    alert("Please press the restart button.")
};

function restart () {
    computerscore = 0;
    humanscore = 0;
    uiHumanScore.textContent = `HumanScore: ${humanscore}`;
    uiComputerScore.textContent = `ComputerScore: ${computerscore}`;
    scores.insertBefore(uiHumanScore, buttom);
    scores.append(uiComputerScore);
    win.textContent ="Let play again!"; 
    win.append();
}
