// Referencias de HTML
const txtPoints =  document.querySelectorAll('small'), 
      divPlayersCards = document.querySelectorAll('.divCards');

const updatePoints = ( points, playerTurn ) => {
  txtPoints[playerTurn].innerText = points;
}

const createCard = ( cardName, playerTurn ) => {
  const imgCard = document.createElement('img');
  imgCard.src = `assets/cartas/${ cardName }.png`;
  imgCard.classList.add('cards');
  divPlayersCards[playerTurn].append( imgCard );
}

const resetPoints = () => {
  txtPoints.forEach( elem => elem.innerText = 0 );
}

const clearCards = () => {
  divPlayersCards.forEach( elem => elem.innerHTML = '' );
}

const showResult = ( message ) => {
  setTimeout(() => {
    alert(message);
  }, 500);
};


export {
  updatePoints,
  createCard,
  resetPoints,
  clearCards,
  showResult
}
