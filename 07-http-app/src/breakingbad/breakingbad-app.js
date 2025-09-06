
// para hacer una petición http

/**
 * Realiza una petición HTTP para obtener una cita aleatoria de la API de Breaking Bad.
 * 
 * @returns { Promise<Object> } quote information
 */
const fetchQuote = async () => {

  // Realiza una petición HTTP a la API
  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  
  // Convierte la respuesta en formato JSON
  const data = await res.json();

  console.log( data[0] );
  return data[0];
}

/**
 * Este componente es una pieza reutilizable que se encarga de mostrar citas aleatorias
 * de Breaking Bad en el DOM y permite al usuario obtener nuevas citas al hacer clic en un botón.
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async ( element ) => {

  document.querySelector('#app-title').innerHTML = 'Breakingbad App';
  element.innerHTML = 'Cargando...';
  
  const quoteLabel = document.createElement('blockquote');
  const authorLabel = document.createElement('h3');
  const nextQuoteBtn = document.createElement('button');
  nextQuoteBtn.innerText = 'Next Quote';

  /**
   * Función que renderiza una cita en el DOM.
   * 
   * @param {Object} data - Objeto que contiene la cita (`quote`) y el autor (`author`).
   */
  const renderQuote = ( data ) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;

    // Reemplaza el contenido del elemento principal con la cita, el autor y el botón
    element.replaceChildren( quoteLabel, authorLabel, nextQuoteBtn );    
  }

  nextQuoteBtn.addEventListener('click', async ()=> {
    element.innerHTML = 'Cargando...';

    // Obtiene una nueva cita utilizando `fetchQuote` y la renderiza
    const quote = await fetchQuote();
    renderQuote( quote );    
  });

  // Obtiene una cita inicial al cargar la aplicación
  // Este código no espera a que se resuelva la promesa, por lo que continúa ejecutando el resto del código
  fetchQuote()
    .then( renderQuote ); // Renderiza la cita cuando la promesa se resuelve
  
}


