// fonction permettant d'avoir un chiffre random entre 0 et 2
function computerPlay( ){
  return Math.floor(Math.random( ) *3);
};
// fonction pour un round
const rock = 0 ;
const paper = 1;
const scissors = 2;
const computerSelection = computerPlay( );
function playRound (playerSelection, computerSelection ){
  if (playerSelection == computerSelection){
    return "It's a Draw";
  };
  else if (playerSelection == 0 & computerSelection == 1) {
    return "You lose, Paper beats Rock";
  } ;
  else if (playerSelection == 0 & computerSelection == 1) {
    return "You win, Rock beats Scissors";
  };
  else if (playerSelection == 1 & computerSelection == 0){
    return "You win, Paper beats Rock";
  };
  else if (playerSelection == 1 & computerSelection == 2){
    return "You lose, Scissors beats Paper ";
  };
  else if (playerSelection == 2 & computerSelection == 0){
    return "You lose, Rock beats Scissors";
  };
};
