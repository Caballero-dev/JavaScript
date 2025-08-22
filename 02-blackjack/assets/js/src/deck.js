const DeckModule = (() => {
  'use strict';

  const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'];

  /* ------ Crear baraja ------ */
  const createDeck = () => {
    const deck = [];

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
    return _.shuffle(deck);
  }

  /* ------ Pedir una carta ------ */
  const requestCard = ( deck ) => {
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


  return {
    createDeck,
    requestCard,
    cardValue
  }
})();