// 0=>Rock
// 1=>Paper
// 2=>Scissors

function getComputerChoice(){
    return Math.floor(Math.random()*3);
}
function getPlayerChoice(){
    let input=prompt("Rock, Paper or Scissors?");
    input=input.toLowerCase();
    let choice=-1;
    if(input==='rock')
        choice=0;
    else if(input==='paper')
        choice=1;
    if(input==='scissors')
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
function displayScoreBoard(result, round, playerName){
    switch(result){
        case 0:
            console.log(`Computer wins round ${round}`);
            break;
        case 1:
            console.log(`${playerName} wins round ${round}`);
            break;
        case 2: 
            console.log(`Round ${round} is a draw`);
            break;
        default:
            console.error("Error parsing result!!");
    }
}
function displayResult(playerName, playerWins, compWins){
    console.log(`${playerName} wins: ${playerWins} times`);
    console.log(`Computer wins: ${compWins} times`);
    if(playerWins>compWins){
        console.log(`Congrats!! ${playerName} wins the game`);
    }
    else if(compWins>playerWins){
        console.log(`${playerName} defeated. Computer wins the game`);
    }else{
        console.log(`Game's a draw`);
    }
}
function playGame(playerName){
    let round=0,
    playerChoice=-1,
    compChoice=-1,
    playerWins=0,
    compWins=0, 
    result=-1;

    playerName=getName();
    while(round<5){
        round++;
        compChoice=getComputerChoice();
        playerChoice=getPlayerChoice();

        result=decideWinner(playerChoice, compChoice);
        displayScoreBoard(result, round, playerName);
        if(result==0)
            compWins++;
        else if(result==1)
            playerWins++;
    }
    displayResult(playerName, playerWins, compWins);
}
window.onload= ()=>{
    playGame();
}