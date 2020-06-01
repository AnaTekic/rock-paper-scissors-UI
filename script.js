

function computerPlay () { //choose a random computer choice
  let myArray = ["Rock", "Paper", "Scissors"]
  return  myArray[Math.floor(Math.random()*myArray.length)];
  }

function humanPlay() { //valja kad se testira. console log vrati kliknut paper ili rock ili scissors
     return(event.target.id)
}

document.getElementById('Rock').addEventListener('click', game) 
document.getElementById('Paper').addEventListener('click', game)
document.getElementById('Scissors').addEventListener('click', game)


function game() {
  let playerScore =0;
  let computerScore= 0;
  let countRound= 1;
 
  
  function playRound(playerSelection, computerSelection) {
      computerSelection = computerPlay();
      playerSelection = humanPlay();
    
    let log = document.getElementById("log");
 let score = document.createElement("p");
    let counter = document.createTextNode( `Player ${playerScore} : ${computerScore}  Computer`);
    score.appendChild(counter);
    
    
let playerPara = document.createElement("p");
let compPara = document.createElement("p");
let node = document.createTextNode(`You chose ${playerSelection}`);
let compChoice = document.createTextNode(`Computer chose ${computerSelection}`);
playerPara.appendChild(node);
compPara.appendChild(compChoice)
;

  
log.appendChild(playerPara);
log.appendChild(compPara);
log.appendChild(score); 
   
    if (computerSelection==playerSelection) {
     
      let tie = document.createElement("p")
      let tieText = document.createTextNode("It's a tie!");
      tie.appendChild(tieText);
      
      log.appendChild(tie);
      
       playerScore++;
       computerScore++;
       
   }
     else if(playerSelection=="Paper" && computerSelection=="Rock" ||
              playerSelection =="Rock" && computerSelection=="Scissors" ||
              playerSelection=="Scissors" && computerSelection=="Paper") {
      playerScore++;
       
       let playerWin = document.createElement("p");
       let playerWinText = document.createTextNode("Player wins!" + playerSelection + " beats " + computerSelection +".");
       playerWin.appendChild(playerWinText);
       
       log.appendChild(playerWin);
       

    }
                
     else if(computerSelection=="Scissors" && playerSelection=="Paper" ||
             computerSelection=="Rock" && playerSelection=="Scissors" ||
              computerSelection =="Paper" && playerSelection=="Rock") {
     computerScore++
       
       let computerWin = document.createElement("p");
       let computerWinText = document.createTextNode ("Player loses! " + computerSelection + " beats " + playerSelection + ".");
       computerWin.appendChild(computerWinText);
       
       log.appendChild(computerWin);
         
     }
     
  }
  

playRound();
  }

