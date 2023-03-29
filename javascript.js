let startButton = document.querySelector(".start-btn");
let pOne;
let pTwo;

const gameBoard = (event) => {
  
  event.preventDefault();
  let result = document.querySelector(".result");
  result.textContent ="";
  setPlayerNames();
  startButton.textContent = "Restart";
  let gameSpaces = document.querySelectorAll(".space");
  gameSpaces.forEach(space => {
    space.textContent = "";
    space.setAttribute("state", "none");
    pOne.moves = 0;
    pTwo.moves = 0;
    space.addEventListener("click", play);
  });

  function play(e){
    if((e.target.getAttribute("state") === "none") && (pOne.moves == pTwo.moves)){
      pOne.play(e);
      pOne.moves = pOne.moves + 1;
      console.log(pOne.moves);
      gameOverCheck();
    }
    else if((e.target.getAttribute("state") === "none") && (pOne.moves > pTwo.moves)){
      pTwo.play(e);
      pTwo.moves = pTwo.moves + 1;
      gameOverCheck();
    }
    
  }
  const gameOver = (winner) => {
    gameSpaces.forEach(space => {
      space.removeEventListener("click", play);
    });
    let result = document.querySelector(".result");
    if((winner === true) && (pOne.moves > pTwo.moves))
    {
      result.textContent = `${pOne.name} WINS!`;
    }
    else if( (winner === true) && (pOne.moves === pTwo.moves)){
      result.textContent = `${pTwo.name} WINS!`; 
    }
    else{
      result.textContent = "TIE!"; 
    }
  }

  const gameOverCheck = () =>{
    // rows win logic//
    let winner = false;
    if( (gameSpaces[0].getAttribute("state") === gameSpaces[1].getAttribute("state") ) && 
    (gameSpaces[1].getAttribute("state") === gameSpaces[2].getAttribute("state") ) && gameSpaces[0].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);
  
    }
    else if( (gameSpaces[3].getAttribute("state") === gameSpaces[4].getAttribute("state") ) && 
    (gameSpaces[3].getAttribute("state") === gameSpaces[5].getAttribute("state") ) && gameSpaces[3].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);

    }
    else if( (gameSpaces[6].getAttribute("state") == gameSpaces[7].getAttribute("state") ) && 
    (gameSpaces[6].getAttribute("state") == gameSpaces[8].getAttribute("state") ) && gameSpaces[6].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);
    }
    // column win logic//
    else if( (gameSpaces[0].getAttribute("state") === gameSpaces[3].getAttribute("state") ) && 
    (gameSpaces[0].getAttribute("state") === gameSpaces[6].getAttribute("state") ) && gameSpaces[0].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);
  
    }
    else if( (gameSpaces[1].getAttribute("state") === gameSpaces[4].getAttribute("state") ) && 
    (gameSpaces[1].getAttribute("state") === gameSpaces[7].getAttribute("state") ) && gameSpaces[1].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);

    }
    else if( (gameSpaces[2].getAttribute("state") == gameSpaces[5].getAttribute("state") ) && 
    (gameSpaces[2].getAttribute("state") == gameSpaces[8].getAttribute("state") ) && gameSpaces[2].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);
    }
    // cross win logic//
    else if( (gameSpaces[0].getAttribute("state") === gameSpaces[4].getAttribute("state") ) && 
    (gameSpaces[0].getAttribute("state") === gameSpaces[8].getAttribute("state") ) && gameSpaces[0].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);
    }
    else if( (gameSpaces[2].getAttribute("state") == gameSpaces[4].getAttribute("state") ) && 
    (gameSpaces[2].getAttribute("state") == gameSpaces[6].getAttribute("state") ) && gameSpaces[2].getAttribute("state") !== "none" )
    {
      winner = true;
      gameOver(winner);
    }
    else if(pOne.moves === 5){
      gameOver(winner);
    }
  }
}

const PlayerOne = (playerName) =>
{ 
  let moves = 0;
  let name =   playerName.toUpperCase();
  if(name === ""){
    name = "PLAYER ONE"
  }
  const play =  (e) => {
   e.target.textContent ="X";
   e.target.setAttribute("state","X");
  }
  return {moves, play, name};
} 

const PlayerTwo = (playerName) => {
  let moves = 0;
  let name = playerName.toUpperCase();
  if(name === ""){
    name = "PLAYER TWO"
  }
  const play =  (e) => {
   e.target.textContent ="O";
   e.target.setAttribute("state","O");
  }
  return {moves, play, name}
}

const setPlayerNames = () => {
  let form = document.querySelector("form");
  let playerOneName = document.getElementById("player-one").value;
  let playerTwoName = document.getElementById("player-two").value;
  pOne = PlayerOne(playerOneName);
  pTwo = PlayerTwo(playerTwoName);
  form.style.display = "none";

}

startButton.addEventListener("click", gameBoard);