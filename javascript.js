const GameBoard = () => {
  let gameSpaces = Array.from(document.querySelectorAll(".space"));
  console.log(gameSpaces.at(0).state);
  gameSpaces.forEach(space => {
    space.textContent = "";
    space.addEventListener("click", play);
    console.log(space.state);
  });

  function play(e){
    console.log(e.target.state);
      let index = e.target.value; 
      e.target.state = "X";
      console.log(gameSpaces.value);
  }
}

const PlayerOne = () => {

}

const PlayerTwo = () => {
  
}
GameBoard();