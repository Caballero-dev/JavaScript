/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPotins = 0;

// Referencias de HTML
const btnNew = document.querySelector('#btnNew');
const btnRequest = document.querySelector('#btnRequest');
const btnStop = document.querySelector('#btnStop');

const txtPoints =  document.querySelectorAll('small');
const divPlayerCards = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');

/* ------ Crear baraja ------ */
const createDeck = () => {

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

createDeck();

/* ------ Pedir una carta ------ */
const requestCard = () => {

  if ( deck.length === 0 ) {
    // throw: se utiliza para lanzar una excepción o un error de manera intencional. 
    // Esto detiene la ejecución del programa en ese punto.
    throw 'No hay cartas'
  }

  return deck.pop();
}


/* ------ Obtener valor de la carta ------ */
const cardValue = ( card ) => {

  // substring(start, end): este método extrae una parte de un string.
  // start: La posición inicial (incluida).
  // end: La posición final (no incluida).
  const value = card.substring(0, card.length - 1);

  return ( isNaN(value) ) 
          ? ( ( value === 'A' ) ? 11 : 10 ) 
          : Number(value);  
  
  /*   
  let points = 0;

  // isNaN(value): Verifica si un valor no es un número.
  // Devuelve true si el valor no puede convertirse a un número, y false si sí puede.
  if ( isNaN(value) ) {
    points = ( value === 'A' ) ? 11 : 10;
  } else {
    // Number: Convierte un string o valor a un número.
    // Si no puede convertirlo, devuelve NaN (Not-a-Number).
    points = Number(value);
  }
  console.log( points ); 
  */
}

/* ------ Realizar turno de la computadora ------ */
const computerTurn = ( minPoints ) => {
  do {
    const card = requestCard();
    computerPotins = computerPotins + cardValue( card );
    txtPoints[1].innerText = computerPotins;

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${ card }.png`;
    imgCard.classList.add('cards');

    divComputerCards.append( imgCard );

    if ( minPoints > 21 ) {
      break;
    }
    
  } while ( (computerPotins < minPoints) && (minPoints <= 21) );

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

/* ------------------ Eventos ------------------ */
// Se agrega un evento a cada botón utilizando el método addEventListener.
// Este método escucha un evento específico (en este caso, 'click') y ejecuta una función (callback) cuando ocurre dicho evento.

/* ------ Evento: Pedir Carta ------ */
btnRequest.addEventListener('click', () => {

  const card = requestCard();
  playerPoints = playerPoints + cardValue( card );
  txtPoints[0].innerText = playerPoints;

  const imgCard = document.createElement('img');
  imgCard.src = `assets/cartas/${ card }.png`;
  imgCard.classList.add('cards');

  divPlayerCards.append( imgCard );

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

  computerTurn( playerPoints );
});

/* ------ Evento: Nuevo Juego ------ */
btnNew.addEventListener('click', () => {
  deck = [];
  createDeck();
  playerPoints = 0;
  computerPotins = 0;

  txtPoints[0].innerText = playerPoints;
  txtPoints[1].innerText = computerPotins;

  divPlayerCards.innerHTML = '';
  divComputerCards.innerHTML = '';

  btnRequest.disabled = false;
  btnStop.disabled = false;

});