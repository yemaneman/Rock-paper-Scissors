const container= document.querySelector(".container")
const buttons=document.querySelectorAll("button")
const content=document.createElement('p')
function getComputerChoice(){
 return  Math.random();
}

let wins=0
let loses=0
buttons.forEach(button=> {
  button.addEventListener("click", ()=>{
   const humanChoice=button.innerHTML.trim().toLowerCase();
   let computerChoice=getComputerChoice();
  
if (computerChoice<=1/3){
    computerChoice='rock'
}
else if(computerChoice >1/3 &&computerChoice <=2/3){
    computerChoice='paper'
}
else{
    computerChoice='scissors'
}

if (humanChoice===computerChoice){
    content.innerHTML=`computer choice : ${computerChoice} your choice : ${humanChoice} .it's a draw.<br> <br> Wins:${wins}<br>  Loses:${loses}`;
}
else if((computerChoice === 'rock' && humanChoice === 'paper') ||
   (computerChoice === 'paper' && humanChoice === 'scissors') ||
   (computerChoice === 'scissors' && humanChoice === 'rock')){
    wins+=1
    content.innerHTML=`computer choice : ${computerChoice} your choice : ${humanChoice} .you win.<br> <br> Wins:${wins}<br>  Loses:${loses} `;
}
else{
    loses+=1
    content.innerHTML=`computer choice : ${computerChoice} your choice : ${humanChoice} .you lose <br> <br> Wins:${wins}<br>  Loses:${loses}`;
}
if(wins>=5&&wins%5===0){
    content.innerHTML+=`<br> You Win For this round`;
}
if (loses>=5&&loses%5===0)
     content.innerHTML+=`<br> Computer Wins For this round`;
  })
})
   
if (container.contains(content)) {
      container.removeChild(content);
    } 
else {
      container.appendChild(content);
    }


