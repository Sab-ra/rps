// Welcome message, and warm-up for user
let greetings = "Hi, welcome to Rock. Paper. Scissors. Shoot";
  console.log( greetings );
let rounds = prompt( "How many rounds would you play?", '3' );
rounds = Number( rounds );
  console.log( `You're about to play ${ rounds }-round game.` );
// Initiate global variables 
let roundCounter = 0;
let shootCounter = 0;
let userChoice;
let computerChoice;
let scoreUserComputer = [ 0, 0 ];
  console.log( `You're playing against computer. The score is ${ scoreUserComputer }.` );
let pieces = [ 'rock', 'paper', 'scissors' ];
let piecesValue = [ 0, 0, 0 ]; // [0] - rock, [1] - paper, [2] - scissors
  console.log( `Initial pieces values for rock, paper, scissors are ${ piecesValue }.` );

// Win-message
let rockWinMessages = [ "Rock smashes steel!", "Rock crushes scissors!", "Rock and smash!" ];
let paperWinMessages = [ "Paper wraps the rock!", "Paper stronger when bends!", "Saving paper!" ];
let scissorsWinMessages = [ "Sharp and furious against paper!", "Blades against flex!" ];

// lose-message
let rockLoseMessages = [ "Your rock was wrapped.", "Living rocks suffocated by plastick paper." ];
let paperLoseMessages = [ "Paper was literary shreddered with the scissors", "Paper can't withdstand the blades." ];
let scissorsLoseMessages = [ "Scissors clang  and broke", "Blades can't destroy the rock." ];

// Tie-message
let tieMessages = [ "It's a tie! Shoot again", "You're bloody good, both of you. Come again!" ];

// Lousy-message
let lousyMessages = [ "You showed a wrong simbol with your bloody fingers!", "Try to be less original with symbols ;)" ];

// Initiate global functions
function sample( array ) {                                                  // random choice from the given array
  return array[ Math.floor( Math.random() * array.length )]
};

function getComputerChoice() {
  return computerChoice = sample( pieces );
};

function assignPiecesValue( choice ) {
  if( choice === 'rock' ) {
    return piecesValue = [ 1, 2, 0 ]
  } else if( choice === 'paper' ) {
    return piecesValue = [ 0, 1, 2 ]
  } else {
    return piecesValue = [ 2, 0, 1 ]
  }
};

function evaluateUserChoice( piecesValue, userChoice ) {
  if( userChoice === 'r' ) {
    return shootPower = piecesValue[ 0 ]
  } else if ( userChoice === 'p' ) {
    return shootPower = piecesValue[ 1 ]
  } else if ( userChoice === 's' ) {
    return shootPower = piecesValue[ 2 ]
  } else {
    return shootPower = -1
  }
}

function shootResult ( shootPower ) {
  if( shootPower === 2 ) {
    return win( userChoice )
  } else if( shootPower === 1 ) {
    return tie( userChoice )
  } else if( shootPower === 0 ) {
    return lose()
  } else if( shootPower === -1 ) {
    return lousyChoice()
  }
}

function win( piece ) {
  shootCounter += 1;
  roundCounter += 1;
  scoreUserComputer[ 0 ] += 1;
  if( userChoice === 'r' ) {
    return sample( rockWinMessages )
  } else if( userChoice === 'p' ) {
    return sample( paperWinMessages )
  } else if( userChoice === 's' ) {
    return sample( scissorsWinMessages )
  }
}

function lose( piece ) {
  shootCounter += 1;
  roundCounter += 1;
  scoreUserComputer[ 1 ] += 1;
  if( userChoice === 'r' ) {
    return sample( rockLoseMessages )
  } else if( userChoice === 'p' ) {
    return sample( paperLoseMessages )
  } else if( userChoice === 's' ) {
    return sample( scissorsLoseMessages )
  }
}

function tie() {
  shootCounter += 1;
  return sample( tieMessages );
}

function lousyChoice() {
  shootCounter += 1;
  return sample( lousyMessages );
}

// Play game till all rounds are played
  // Play round, till defineWinner
  getComputerChoice();
  assignPiecesValue( computerChoice );
    console.log( `Values of rock, paper, scissors in this shoot are ${ piecesValue }.` );
  userChoice = prompt( "Type a letter to shoot (R)ock, (P)aper, or (S)cissors: ", '' );
  userChoice = userChoice.toLowerCase();
    console.log( `The user choice ${ userChoice }` );
  evaluateUserChoice( piecesValue, userChoice );
   console.log( shootPower );
  shootResult( shootPower );
   console.log( shootResult( shootPower ));
   console.log( `Round: ${ roundCounter }. Score: you ${ scoreUserComputer[ 0 ] } -- computer ${ scoreUserComputer[ 1 ] }` );
    
