(() => {
  'use strict';

  let deck = [];
  let playersPoints = [];

  // Referencias de HTML btn
  const btnNew = document.querySelector('#btnNew'),
        btnRequest = document.querySelector('#btnRequest'),
        btnStop = document.querySelector('#btnStop');

  /* ------ Inicializa el juego ------ */
  const startGame = ( numPlayers =  2 ) => {
    deck = DeckModule.createDeck();

    playersPoints = [];
    for ( let i = 0; i < numPlayers; i++ ) {
      playersPoints.push(0);
    }

    UIModule.clearCards();
    UIModule.resetPoints();

    btnRequest.disabled = false;
    btnStop.disabled = false;
  }

  /* ------ Acomular puntos a cada jugador ------ */
  // Turno 0 = Primer jugador y último será la computador 
  const accumulatePoints = ( card, playerTurn ) => {
    playersPoints[playerTurn] = playersPoints[playerTurn] + DeckModule.cardValue( card );
    UIModule.updatePoints(playersPoints[playerTurn], playerTurn);
    return playersPoints[playerTurn];
  }

  const determineWinner = () => {
    const [ playerPoints, computerPoints ] = playersPoints;
  
    if ( playerPoints > computerPoints && playerPoints <= 21 ) {
      UIModule.showResult('Jugador gana :)');
    } else if ( playerPoints <= 21 && computerPoints > 21 ) {
      UIModule.showResult('Jugador gana :) :)');
    } else if ( computerPoints > playerPoints && computerPoints <= 21 ) {
      UIModule.showResult('Computadora gano :(');
    } else if ( computerPoints <= 21 && playerPoints > 21 ) {
      UIModule.showResult('Computadora gano :( :(');
    } else {
      UIModule.showResult('Nadie ha ganado >_<');
    }
  }

  /* ------ Realizar turno de la computadora ------ */
  const computerTurn = ( minPoints ) => {
    
    let computerPoints = 0;

    do {

      const card = DeckModule.requestCard(deck);
      const playerTurn = playersPoints.length - 1;
      computerPoints = accumulatePoints(card, playerTurn);
      UIModule.createCard(card, playerTurn );

    } while ( (computerPoints < minPoints) && (minPoints <= 21) );

    determineWinner();

  }

  /* ------ Evento: Pedir Carta ------ */
  btnRequest.addEventListener('click', () => {

    const card = DeckModule.requestCard(deck);
    const playerTurn = 0;
    const playerPoints = accumulatePoints(card, playerTurn)
    UIModule.createCard(card, playerTurn);

    if ( playerPoints > 21 ) {
      btnRequest.disabled = true;
      btnStop.disabled = true;
      computerTurn( playerPoints );
    } else if ( playerPoints === 21 ) {
      btnRequest.disabled = true;
      btnStop.disabled = true;
      computerTurn( playerPoints );
    }
    
  });
  
  /* ------ Evento: Turno conputadora ------ */
  btnStop.addEventListener('click', () => {
    btnRequest.disabled = true;
    btnStop.disabled = true;
    computerTurn( playersPoints[0] );
  });

  /* ------ Evento: Nuevo Juego ------ */
  btnNew.addEventListener('click', () => {
    startGame();    
  });

})();
