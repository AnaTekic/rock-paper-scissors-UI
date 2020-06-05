

function computerPlay () { //choose a random computer choice
  let myArray = ["Rock", "Paper", "Scissors"]
  return  myArray[Math.floor(Math.random()*myArray.length)];
  }

function humanPlay() { //valja kad se testira. console log vrati kliknut paper ili rock ili scissors
     return(event.target.id)
}

document.getElementById('Rock').addEventListener('click', playRound) 
document.getElementById('Paper').addEventListener('click', playRound)
document.getElementById('Scissors').addEventListener('click', playRound)

 let playerScore =0;
 let computerScore= 0;
 let countRound= 1;


function game() {
 
}
  
  function playRound(playerSelection, computerSelection) {
      computerSelection = computerPlay();
      playerSelection = humanPlay();

    if (computerSelection==playerSelection) {
 
      document.getElementById("logs").innerText = `Computer chose ${computerSelection}. 
Player chose ${playerSelection}. 
It's a tie!`;
       
   }
     else if(playerSelection=="Paper" && computerSelection=="Rock" ||
              playerSelection =="Rock" && computerSelection=="Scissors" ||
              playerSelection=="Scissors" && computerSelection=="Paper") {
      playerScore++;
       
      document.getElementById("logs").innerText = `Computer chose ${computerSelection}. 
Player chose ${playerSelection}. 
Player wins!`;
         
    }
                
     else if(computerSelection=="Scissors" && playerSelection=="Paper" ||
             computerSelection=="Rock" && playerSelection=="Scissors" ||
              computerSelection =="Paper" && playerSelection=="Rock") {
     computerScore++;
           document.getElementById("logs").innerText = `Computer chose ${computerSelection}. 
Player chose ${playerSelection}. 
Computer wins!`;
         
     };
     document.getElementById("counter").innerText = `Player ${playerScore} : ${computerScore} Computer`;
  
 if(playerScore==5 || computerScore==5) {

  if (computerScore>playerScore) { 
    document.getElementById("logs").innerText= "GAME OVER.Machines rule";
  }
  else if (playerScore>computerScore){
    document.getElementById("logs").innerText="GAME OVER. HUMANS ARE SUPERIOR";
  }
    else {
   document.getElementById("logs").innerText="GAME OVER. HUMAN EQUAL MACHINE?"
    }
 }
  }
  

  