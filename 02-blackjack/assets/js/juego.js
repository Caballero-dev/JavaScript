
/* ------ Sintaxis del patron modulo ------ */

// A continuación, se utiliza una función anónima autoejecutada (IIFE, Immediately Invoked Function Expression).
// Estas funciones se definen y se ejecutan inmediatamente, creando un nuevo ámbito (scope).
// Al no tener un identificador (nombre), no es posible llamarlas directamente después de su ejecución.
// Esto ayuda a encapsular el código y evitar la contaminación del espacio global de nombres.

// (function() {
// })()

const myModule = (() => {
  // Activamos el modo estricto de JavaScript con 'use strict'.
  // Esto obliga a escribir código más limpio y seguro, evitando errores comunes.
  'use strict';

  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'];

  let playersPoints = [];

  // Referencias de HTML
  const btnNew = document.querySelector('#btnNew'),
        btnRequest = document.querySelector('#btnRequest'),
        btnStop = document.querySelector('#btnStop');

  const txtPoints =  document.querySelectorAll('small'), 
        divPlayersCards = document.querySelectorAll('.divCards');

  /* ------ Crear baraja ------ */
  const createDeck = () => {
    deck = [];

    for( let i = 2; i <= 10; i++ ) {
      for ( let type of types) {
        deck.push( i + type );
      }
    }

    for( let type of types ) {
      for ( let special  of specials) {
        deck.push( special + type );
      }
    }

    // Mezclar baraja
    deck = _.shuffle(deck);
  }

  /* ------ Inicializa el juego ------ */
  const startGame = ( numPlayers =  2 ) => {
    createDeck();

    playersPoints = [];
    for ( let i = 0; i < numPlayers; i++ ) {
      playersPoints.push(0);
    }


    txtPoints.forEach( elem => elem.innerText = 0 );
    divPlayersCards.forEach( elem => elem.innerHTML = '' );

    btnRequest.disabled = false;
    btnStop.disabled = false;

  }

  /* ------ Pedir una carta ------ */
  const requestCard = () => {
    if ( deck.length === 0 ) {
      throw 'No hay cartas en la baraja';
    }
    return deck.pop();
  }

  /* ------ Obtener valor de la carta ------ */
  const cardValue = ( card ) => {
    const value = card.substring(0, card.length - 1);
    return ( isNaN(value) )
            ? ( ( value === 'A' ) ? 11 : 10 )
            : Number(value);
  }

  /* ------ Acomular puntos a cada jugador ------ */
  // Turno 0 = Primer jugador y último será la computador 
  const accumulatePoints = ( card, playerTurn ) => {
    playersPoints[playerTurn] = playersPoints[playerTurn] + cardValue( card );
    txtPoints[playerTurn].innerText = playersPoints[playerTurn];
    return playersPoints[playerTurn];
  }

  const createCard = ( cardName, playerTurn ) => {
      const imgCard = document.createElement('img');
      imgCard.src = `assets/cartas/${ cardName }.png`;
      imgCard.classList.add('cards');
      divPlayersCards[playerTurn].append( imgCard );
  }

  const determineWinner = () => {
    const [ playerPoints, computerPotins ] = playersPoints;
    setTimeout(()=> {
  
      if ( playerPoints > computerPotins && playerPoints <= 21 ) {
        alert('Jugador gana :)');
      } else if ( playerPoints <= 21 && computerPotins > 21 ) {
        alert('Jugador gana :) :)');
      } else if ( computerPotins > playerPoints && computerPotins <= 21 ) {
        alert('Computadora gano :(');
      } else if ( computerPotins <= 21 && playerPoints > 21 ) {
        alert('Computadora gano :( :(');
      } else {
        // console.log( 'test', { computerPotins, playerPoints });
        alert('Nadie ha ganado >_<');
      }
    }, 500 )
  }

  /* ------ Realizar turno de la computadora ------ */
  const computerTurn = ( minPoints ) => {
    
    let computerPotins = 0;

    do {

      const card = requestCard();
      const playerTurn = playersPoints.length - 1;
      computerPotins = accumulatePoints(card, playerTurn);
      createCard(card, playerTurn );

    } while ( (computerPotins < minPoints) && (minPoints <= 21) );

    determineWinner();

  }

  /* ------ Evento: Pedir Carta ------ */
  btnRequest.addEventListener('click', () => {

    const card = requestCard();
    const playerTurn = 0;
    const playerPoints = accumulatePoints(card, playerTurn)
    createCard(card, playerTurn);


    if ( playerPoints > 21 ) {
      // console.warn( 'Perdistes :(' );
      btnRequest.disabled = true;
      btnStop.disabled = true;
      computerTurn( playerPoints );
    } else if ( playerPoints === 21 ) {
      // console.warn( '21, genial!' );
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

  return {
    newGame: startGame
  }

})();
