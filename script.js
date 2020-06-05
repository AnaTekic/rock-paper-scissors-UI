

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

function game() {
 
}
  
  function playRound(playerSelection, computerSelection) {
      computerSelection = computerPlay();
      playerSelection = humanPlay();
     
 
 
    if (computerSelection==playerSelection) {
      playerScore++;
      computerScore++;
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
   playAgain();
   }

    
 function playAgain() {
     document.getElementById("logs").innerText= "Play again?";
 
     var btnYes = document.createElement("BUTTON");
     btnYes.innerHTML = "YES";
             
logs.appendChild(btnYes);  
     
     var btnNo = document.createElement("BUTTON");   
  
     btnNo.innerHTML = "NO";                  
logs.appendChild(btnNo);
   
   btnYes.addEventListener('click', function restart(){playerScore=0; computerScore=0; logs.innerHTML = ""; playRound()});
   btnNo.addEventListener ('click', quitGame);

 
  }}

  

  function quitGame() {
    document.getElementById("logs").innerText="No more game.";
     
    document.getElementById("Rock").onclick = function() {
      window.location.href = 'https://www.nationalgeographic.com/science/earth/inside-the-earth/rocks/';
    };
    document.getElementById("Paper").onclick= function(){
        window.location.href= 'https://interestingengineering.com/the-long-and-complex-history-of-paper';
    
      }   ;
    document.getElementById("Scissors").onclick= function () {
        window.location.href= 'https://www.vampiretools.com/blog/short-history-scissors/';
  };
   
  }
  

