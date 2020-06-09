
function computerPlay () { //choose a random computer choice
  let myArray = ["Rock", "Paper", "Scissors"]
  return  myArray[Math.floor(Math.random()*myArray.length)];
  }

function humanPlay() { 
     return(event.target.id)
}

document.getElementById('Rock').addEventListener('click', playRound) 
document.getElementById('Paper').addEventListener('click', playRound)
document.getElementById('Scissors').addEventListener('click', playRound)

let playerScore =0;
let computerScore= 0;
let log = document.getElementById("logs");
let roundResult = document.getElementById("roundResult");
let declareWin = document.getElementById("declareWin");


function playRound(playerSelection, computerSelection) {
      computerSelection = computerPlay();
      playerSelection = humanPlay();
     
    if (computerSelection==playerSelection) {
      playerScore++;
      computerScore++;

      log.innerText = `Computer chose ${computerSelection}. 
      Player chose ${playerSelection}. `;
      
      roundResult.innerText = `It's a tie`;
     
      }

     else if(playerSelection=="Paper" && computerSelection=="Rock" ||
              playerSelection =="Rock" && computerSelection=="Scissors" ||
              playerSelection=="Scissors" && computerSelection=="Paper") {
      playerScore++;
       
      log.innerText = `Computer chose ${computerSelection}. 
      Player chose ${playerSelection}. `;
      roundResult.innerText = `Player wins!`  ;
    }
                
     else if(computerSelection=="Scissors" && playerSelection=="Paper" ||
             computerSelection=="Rock" && playerSelection=="Scissors" ||
             computerSelection =="Paper" && playerSelection=="Rock") {
           
              computerScore++;

            log.innerText = `Computer chose ${computerSelection}. 
            Player chose ${playerSelection}`;
            roundResult.innerText = `Computer wins!`;
             };

  document.getElementById("counter").innerText = `Player ${playerScore} : ${computerScore} Computer`;
  

 if(playerScore==5 || computerScore==5) {
 roundResult.innerText= "";
 document.getElementById('Rock').removeEventListener('click', playRound) 
document.getElementById('Paper').removeEventListener('click', playRound)
document.getElementById('Scissors').removeEventListener('click', playRound)
  if (computerScore>playerScore) { 
    declareWin.innerText= "GAME OVER. Machines rule.";
  }
  else if (playerScore>computerScore){
    declareWin.innerText="GAME OVER. HUMANS ARE SUPERIOR";
  }
    else {
    declareWin.innerText="GAME OVER. HUMAN EQUAL MACHINE?"
    }

   playAgain();
   }

  }

function playAgain() {
  let playAgain = document.getElementById("playAgain");
      playAgain.innerText= "Play again?";
      var btnYes = document.createElement("BUTTON");
     btnYes.innerHTML = "YES";
     playAgain.appendChild(btnYes);  
     var btnNo = document.createElement("BUTTON");   
     btnNo.innerHTML = "NO";                  
     playAgain.appendChild(btnNo);
   
   btnYes.addEventListener('click', restart);
   btnNo.addEventListener ('click', quitGame);
 }

  function restart () {
    document.getElementById('Rock').addEventListener('click', playRound) 
    document.getElementById('Paper').addEventListener('click', playRound)
    document.getElementById('Scissors').addEventListener('click', playRound)
    playerScore=0; 
    computerScore=0; 
    document.getElementById("counter").innerText = `Player ${playerScore} : ${computerScore} Computer`;
    log.innerHTML = ""; 
    declareWin.innerHTML= "";
    document.getElementById("playAgain").innerText= "";
  }
   

  function quitGame() {
    log.innerText="No more game.";
    declareWin.innerHTML= "";
    document.getElementById("Rock").onclick = function() {
      window.location.href= 'https://www.vampiretools.com/blog/short-history-scissors/' ;
    };
    document.getElementById("Paper").onclick= function(){
      window.location.href= 'https://www.vampiretools.com/blog/short-history-scissors/';
      }  
    document.getElementById("Scissors").onclick= function () {
      window.location.href= 'https://www.vampiretools.com/blog/short-history-scissors/'
       ;
  };
  

  }
     
  
  

