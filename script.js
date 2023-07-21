


const result=document.querySelector(".result");
const player=document.querySelector(".player-score");
const aiScore=document.querySelector(".ai-score");

player.textContent=playerScore;
aiScore.textContent=ComputerScore;

const rock = document.querySelector('#rock');

rock.addEventListener('click', ()=> {
    console.log(playRound("rock", getComputerChoice()))
});

const paper = document.querySelector('#paper');

paper.addEventListener('click', ()=> {
    console.log(playRound("paper", getComputerChoice()))
});

const scissor = document.querySelector('#scissor');

scissor.addEventListener('click', ()=> {
    console.log(playRound("scissors", getComputerChoice()))
});

function getComputerChoice(){

    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber==0){
        player.textContent=playerScore;

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
        player.textContent="player score:" + playerScore;
        aiScore.textContent="computer score:" + ComputerScore;
        result.textContent="you lose! paper beats rock."
        return "you lose! paper beats rock."
    }
    else if (p=="rock" && c=="scissors"){
        playerScore++;
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent="you win! rock beats scissors."
        return "you win! rock beats scissors."
    }
    else if (p=="rock" && c=="rock"){
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent="It's a draw.";
        return "It's a draw."
    }
    else if (p=="paper" && c=="rock"){
        playerScore++;
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent= "you win! paper beats rock.";
        return "you win! paper beats rock."
    }
    else if (p=="paper" && c=="scissors"){
        ComputerScore++;
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent="you lose! scissors beats paper."
        return "you lose! scissors beats paper."
    }
    else if (p=="paper" && c=="paper"){
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent="It's a draw."
        return "It's a draw."
    }
    else if (p=="scissors" && c=="paper"){
        playerScore++;
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent="you win! scissors beats paper."
        return "you win! scissors beats paper."
    }
    else if (p=="scissors" && c=="rock"){
        ComputerScore++;
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent="you lose! rocks beats scissors"
        return "you lose! rocks beats scissors"
    }
    else if (p=="scissors" && c=="scissors"){
        player.textContent=playerScore;
        aiScore.textContent=ComputerScore;
        result.textContent="Its a draw."
        return "Its a draw."
    }
}

    function game(){}
      

    game();

  