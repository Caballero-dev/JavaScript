import { heroes } from '../data/heroes';

/**
 * Componente que demuestra el uso de generadores asíncronos en JavaScript.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrará el nombre de cada héroe
 */
export const generatorsAsyncComponent = async( element ) => {

  // Inicializamos el generador asíncrono
  const heroGenerator = getHeroGenerator();
  let isFinished = false;

  /**
   * Bucle que consume el generador asíncrono hasta que se complete
   * - Cada iteración espera (await) a que se resuelva la promesa devuelta por next()
   * - Extraemos 'value' y 'done' del resultado para procesar cada héroe
   */
  do {
    const { value, done } = await heroGenerator.next();
    isFinished = done;
    console.log({ value, done });
    
    if ( isFinished ) break;

    element.innerHTML = value;

  } while( !isFinished )

}

/*
Generador asíncrono que produce nombres de héroes con un retraso entre cada uno.
La palabra clave 'async function*' combina generadores y funciones asíncronas.
*/
async function* getHeroGenerator() {
    
  for ( const hero of heroes ) {
    await sleep();
    yield hero.name;
  }

  // Cuando se han procesado todos los héroes, indicamos que no hay más
  return 'no hay mas';
}

// Función utilitaria que crea una promesa que se resuelve después de un segundo.
const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
