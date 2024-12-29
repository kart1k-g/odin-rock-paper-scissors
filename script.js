// 0=>Rock
// 1=>Paper
// 2=>Scissors

function getComputerChoice(){
    return Math.floor(Math.random()*3);
}

function getPlayerChoice(id){
    let choice=-1;
    if(id==='rock-btn')
        choice=0;
    else if(id==='paper-btn')
        choice=1;
    if(id==='scissors-btn')
        choice=2;
    return choice;
}

function decideWinner(playerChoice, compChoice){
    // 0=>"Computer"
    // 1=>"Player"
    // 2=>"Tie"
    let result=-1;
    if(playerChoice===compChoice){
        result=2;
    }else if((playerChoice>compChoice+1) || (playerChoice==0 && compChoice==2)){
        result=1;
    }else{
        result=0;
    }
    return result;
}

function getName(){
    let playerName=prompt("You would like to be called...");
    return playerName;
}

function displayScoreBoard(result){
    switch(result){
        case 0:
            scoreboardP.textContent=(`Computer wins round ${round}`);
            break;
        case 1:
            scoreboardP.textContent=(`${playerName} wins round ${round}`);
            break;
        case 2: 
            scoreboardP.textContent=(`Round ${round} is a draw`);
            break;
        default:
            console.error("Error parsing result!!");
    }
}

function displayResult(){
    if(playerWins>compWins){
        gameResultP.textContent=(`Congrats!! ${playerName} wins the game`);
    }
    else if(compWins>playerWins){
        gameResultP.textContent=(`${playerName} defeated. Computer wins the game`);
    }else{
        gameResultP.textContent=(`Game's a draw`);
    }
}

function playGame(playerChoice){
    let compChoice=-1,
    result=-1;
    
    round++;
    compChoice=getComputerChoice();
    
    result=decideWinner(playerChoice, compChoice);

    return result;
    // displayResult(playerName, playerWins, compWins);
}

function resetGame(){
    compWins=0;
    playerWins=0;
    round=0;
    scoreboardP.textContent="";
}

function manageGame(event){
    const playerChoice=getPlayerChoice(event.target.id);
    const result=playGame(playerChoice);

    displayScoreBoard(result);
    if(result==0)
        compWins++;
    else if(result==1)
        playerWins++;

    if(compWins===5 || playerWins===5){
        displayResult();
        resetGame();
    }
}

function initialise(){
    playerName=getName();
    scoreboardP=document.querySelector("#scoreboard");
    gameResultP=document.querySelector("#game-result");
}


const playBtns=document.querySelectorAll(".play-btn");
playBtns.forEach((btn)=>{
    btn.addEventListener("click", manageGame)
});


let round=0,
    playerWins=0,
    compWins=0, 
    playerName,
    scoreboardP,
    gameResultP, dummy;

window.addEventListener("load", initialise);