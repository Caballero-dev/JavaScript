import { heroes } from '../data/heroes';

/**
 * Componente que demuestra el uso de for-await-of para iterar sobre múltiples promesas
 * y procesarlas secuencialmente a medida que se resuelven.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrará la lista de héroes
 */
export const forAwaitComponent = async( element ) => {

  // const id = '5d86371f9f80b591f499df32';
  /**
   * EJEMPLO 1: Uso básico de await para un solo héroe
   * 
   * Busca un solo héroe por su ID y muestra su nombre en el elemento
   */
  /*
  const hero = await getHeroAsync( id );
  element.innerHTML = hero.name;
  */

  /**
   * EJEMPLO 2: Uso de await en condicionales para verificación
   * 
   * Comprueba si existe un héroe con el ID proporcionado
   */
  /*
  if ( await getHeroAsync(id) ) {
    element.innerHTML = 'Si existe ese héroe';
    return;
  }
  
  element.innerHTML = 'No existe ese héroe';
  */

  /**
   * EJEMPLO 3: Uso de for-await-of para procesar múltiples promesas secuencialmente
   * 
   * 1. Obtenemos todos los IDs de los héroes
   * 2. Creamos un array de promesas (una por cada héroe)
   * 3. Iteramos sobre las promesas con for-await-of, esperando a que cada una se resuelva
   */
  const heroIds = heroes.map( hero => hero.id );
  // Creamos un array de promesas, una por cada héroe
  const heroPromises = getHeroesAsync( heroIds );
  // Iteramos sobre las promesas con for-await-of
  // Espera que cada promesa se resuelva antes de continuar con la siguiente iteración
  for await ( const hero of heroPromises ) {
    element.innerHTML += `${ hero.name }  <br/>`;    
  }

}

/**
 * Crea un array de promesas, una por cada ID de héroe proporcionado.
 * 
 * @param {Array<String>} heroIds - Array con IDs de héroes
 * @returns {Array<Promise>} - Array de promesas, cada una resuelve a un objeto héroe
 */
const getHeroesAsync = ( heroIds ) => {
    
  const heroPromises = [];

  heroIds.forEach( id => {
      heroPromises.push( getHeroAsync(id)  );
  });

  return heroPromises;
}

/**
 * Simula una petición HTTP asíncrona que demora un segundo en responder.
 * Busca un héroe por su ID después de un retraso artificial.
 * 
 * @param {String} id - ID del héroe a buscar
 * @returns {Promise<Object>} - Promesa que resuelve al objeto héroe encontrado
 */
const getHeroAsync = async(id) => {

  await new Promise(( resolve ) => {
      setTimeout(() => resolve(), 2000)
  });  

  return heroes.find( hero => hero.id === id );
}

/*
* FOR-AWAIT-OF

* ¿Qué es for-await-of?
Es una estructura de control que permite iterar sobre objetos asíncronos:
- Espera a que cada promesa se resuelva antes de continuar
- Solo puede usarse dentro de funciones async
- Procesa las promesas en orden secuencial

* Casos de uso comunes
- Procesar múltiples peticiones a APIs de forma secuencial
- Controlar el flujo de ejecución de múltiples operaciones asíncronas
- Mostrar resultados a medida que están disponibles

*Diferencias con Promise.all
- Promise.all: Ejecuta todas las promesas en paralelo y espera a que todas terminen
- for-await-of: Procesa las promesas en secuencia, una después de otra

* Ventajas
- Código más legible para procesamiento secuencial
- Los resultados están disponibles tan pronto como cada promesa se resuelve
- Mejor para situaciones donde el orden de procesamiento es importante

*Desventajas
- Más lento que Promise.all para operaciones independientes
- Las promesas se ejecutan una tras otra, no en paralelo

*/