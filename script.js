console.log("Hello World");

function getComputerChoice(){

    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber==0){
        return "rock";
    }
    else if (randomNumber==1){
        return "paper";
    }
    else{
        return "scissors"
    }
}

var playerScore =0;
var ComputerScore =0;

function playRound(playerSelection, computerSelection) {
    
    let p=playerSelection;
    let c=computerSelection;

    if (p=="rock" && c=="paper"){
        ComputerScore++;
        return "you lose! paper beats rock."
    }
    else if (p=="rock" && c=="scissors"){
        playerScore++;
        return "you win! rock beats scissors."
    }
    else if (p=="rock" && c=="rock"){
        return "It's a draw."
    }
    else if (p=="paper" && c=="rock"){
        playerScore++;
        return "you win! paper beats rock."
    }
    else if (p=="paper" && c=="scissors"){
        ComputerScore++;
        return "you lose! scissors beats paper."
    }
    else if (p=="paper" && c=="paper"){
        return "It's a draw."
    }
    else if (p=="scissors" && c=="paper"){
        playerScore++;
        return "you win! scissors beats paper."
    }
    else if (p=="scissors" && c=="rock"){
        ComputerScore++;
        return "you lose! rocks beats scissors"
    }
    else if (p=="scissors" && c=="scissors"){
        return "Its a draw."
    }
}
   
    function game(){
        for (let i = 0; i < 5; i++) {
            let c=getComputerChoice();
            let p=prompt("choose rock, paper or scissor.")
            p=p.toLowerCase();
            
            playRound(p, c);

            
        }

          console.log("the final result is: player:" + playerScore + "and computer:" + ComputerScore);
    }

    game();

  