// Welcome message, and warm-up for player
let greetings = "Hi, welcome to Rock. Paper. Scissors. Shoot";
  console.log( greetings );
let rounds = prompt( "How many rounds would you play?", '3' );
rounds = Number( rounds );
  console.log( `You're about to play ${ rounds }-round game.` );
// Initiate global variables 
let roundCounter = 0;
let shootCounter = 0;
let playerChoice;
let computerChoice;
let scorePlayerComputer = [ 0, 0 ];
  console.log( `You're playing against computer. The score is ${ scorePlayerComputer }.` );
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

function countRounds( initialCount ) { // TEST!!!!!!
  roundCounter = initialCount += 1;
  return roundCounter;
}

function countShoots( initialCount ) {
  shootCounter = initialCount += 1;
  return shootCounter;
}

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

function evaluateShootPowerOfPlayerChoice( piecesValue, playerChoice ) {
  if( playerChoice === 'r' ) {
    return shootPower = piecesValue[ 0 ]
  } else if ( playerChoice === 'p' ) {
    return shootPower = piecesValue[ 1 ]
  } else if ( playerChoice === 's' ) {
    return shootPower = piecesValue[ 2 ]
  } else {
    return shootPower = -1
  }
}

function shootResult ( shootPower ) {
  if( shootPower === 2 ) {
    return win( playerChoice )
  } else if( shootPower === 1 ) {
    return tie( playerChoice )
  } else if( shootPower === 0 ) {
    return lose()
  } else if( shootPower === -1 ) {
    return lousyChoice()
  }
}

function win( piece ) {
  shootCounter += 1;
  scorePlayerComputer[ 0 ] += 1;
  if( playerChoice === 'r' ) {
    return sample( rockWinMessages )
  } else if( playerChoice === 'p' ) {
    return sample( paperWinMessages )
  } else if( playerChoice === 's' ) {
    return sample( scissorsWinMessages )
  }
}

function lose( piece ) {
  shootCounter += 1;
  scorePlayerComputer[ 1 ] += 1;
  if( playerChoice === 'r' ) {
    return sample( rockLoseMessages )
  } else if( playerChoice === 'p' ) {
    return sample( paperLoseMessages )
  } else if( playerChoice === 's' ) {
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

function playRound( roundCounter, initialRoundScore ) {
    console.log( `And it's round ${ roundCounter }` );
    // Repeat till changeScore
    while( initialRoundScore === scorePlayerComputer ) {
      shoot ( scorePlayerComputer );
      return scorePlayerComputer;
      console.log( `Round: ${ roundCounter }. Score: you ${ scorePlayerComputer[ 0 ] } -- computer ${ scorePlayerComputer[ 1 ] }` );
    }
}

function shoot( score ) {
  // do shoot
  getComputerChoice();
  assignPiecesValue( computerChoice );
    console.log( `Values of rock, paper, scissors in this shoot are ${ piecesValue }.` );
  playerChoice = prompt( "Type a letter to shoot (R)ock, (P)aper, or (S)cissors: ", '' );
  playerChoice = playerChoice.toLowerCase();
    console.log( `The player choice ${ playerChoice }` );
  evaluateShootPowerOfPlayerChoice( piecesValue, playerChoice );
    console.log( shootPower );
  shootResult( shootPower );
    console.log( shootResult( shootPower ));
  return scorePlayerComputer;
}

// Play game till all rounds are played
  // roundCounter
  countRounds( roundCounter );
  // Play round
  playRound( roundCounter, scorePlayerComputer );  
    // returnMessage    
  // return scorePlayerComputer
// return resultMessage
      
