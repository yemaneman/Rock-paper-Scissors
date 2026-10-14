let gamePlaying=true
while(gamePlaying){
function getComputerChoice(){
 return  Math.random();
}

let computerChoice=getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){
    return prompt("What do you like to choose Rock,Paper,or Scissors")
}

let humanChoice=getHumanChoice();
if (humanChoice === null) {
    console.log("Game cancelled. Goodbye!");
    gamePlaying = false;
    break; // Stops the loop instantly without playing the round
  }

  // Normalize human choice to lowercase
  humanChoice = humanChoice.toLowerCase().trim();

if (computerChoice<=1/3){
    computerChoice='rock'
}
else if(computerChoice >1/3 &&computerChoice <=2/3){
    computerChoice='paper'
}
else{
    computerChoice='Scissors'
}

if (humanChoice==computerChoice){
    console.log("it's a draw")
}
else if((computerChoice === 'rock' && humanChoice === 'paper') ||
   (computerChoice === 'paper' && humanChoice === 'scissors') ||
   (computerChoice === 'scissors' && humanChoice === 'rock')){
    console.log(`computer choice ${computerChoice} and your choice ${humanChoice} you win `)

}
else{
  console.log(`computer choice ${computerChoice} and your choice ${humanChoice} you lose `)
  
}

if (!humanChoice) {
    gamePlaying=false
    break; // Stops the loop instantly
  }
}
