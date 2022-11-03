console.log("Lets Play Rock Paper Scissor...");

function getComputerChoice() {
    let option = ["rock","paper","scissor"];
    return option[Math.floor(Math.random()*3)];
}

function playRounds(u,computer) {
   let user = u.toLowerCase();
   if(user === computer) {
        return "tie";
   } else {
        if(user === "rock") {
            if(computer === "scissor") 
                return "won";
            else
                return "lost";
        }
        if(user === "scissor") {
            if(computer === "paper") 
                return "won";
            else
                return "lost";
        }
        if(user === "paper") {
            if(computer === "rock") 
                return "won";
            else
                return "lost";
        }    
    }
}

function gameResult() { 
    let userWins = 0;
    let computerWins = 0; 
    for(let i=0;i<5;i++){
        let userChoice = prompt("Enter your choice : Rock, Paper or Scissor : ");
        let computerChoice = getComputerChoice();
        let result = playRounds(userChoice, computerChoice);
        if(result === "tie"){
            console.log("It's a tie!");
        }
        else if (result === "won"){
            console.log (`You Won! ${userChoice} beats ${computerChoice}`);
            userWins++;
        }
        else {
            console.log(`You lost! ${computerChoice} beats ${userChoice}`);
            computerWins++;
        }
        console.log(`Your Score : ${userWins} Computer Score : ${computerWins}`)
    }
    if(userWins>computerWins)
        console.log("Congratulations! You won the game.")
    else if(userWins === computerWins)
        console.log("Well! Its a tie.")
    else
        console.log("Oops! You lost the game.")

}

gameResult()