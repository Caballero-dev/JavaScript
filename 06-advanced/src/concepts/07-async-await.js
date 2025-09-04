
/**
 * Componente que demuestra cómo combinar async/await con Promise.all para ejecutar 
 * múltiples promesas en paralelo y mejorar el rendimiento.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrarán los resultados de las promesas
 */
export const asyncAwait2Component = async ( element ) => { 
  
  console.time('Start');

  /**
   * EJEMPLO 1: Ejecución secuencial
   * 
   * Este enfoque espera a que cada promesa se complete antes de iniciar la siguiente
   * Tiempo total: aproximadamente 2 + 1.5 + 1 = 4.5 segundos
   */
  /*
  // Cada una de las promesas es independiente de la anterior,
  // entonces no tiene razón que se hagan en secuencia ralentizando el programa
  const value1 = await slowPromise();
  const value2 = await mediumPromise();
  const value3 = await fastPromise();
  */

  /**
   * EJEMPLO 2: Ejecución paralela con Promise.all y async/await
   * 
   * Promise.all inicia todas las promesas simultáneamente
   * await espera a que TODAS se completen
   * Tiempo total: aproximadamente 2 segundos (duración de la promesa más lenta)
   */
  const [value1, value2, value3] =  await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);

  console.timeEnd('Start');

  element.innerHTML = `
    value 1: ${ value1 } <br/>
    value 2: ${ value2 } <br/>
    value 3: ${ value3 } <br/>
  `;

}


/**
 * Crea una promesa que se resuelve después de 2 segundos
 * 
 * @returns {Promise<string>} Promesa que se resuelve con el texto "Slow Promise"
 */
const slowPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Slow Promise');
  }, 2000);
});

/**
 * Crea una promesa que se resuelve después de 1.5 segundos
 * 
 * @returns {Promise<string>} Promesa que se resuelve con el texto "Medium Promise"
 */
const mediumPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Medium Promise');
  }, 1500);
});

/**
 * Crea una promesa que se resuelve después de 1 segundo
 * 
 * @returns {Promise<string>} Promesa que se resuelve con el texto "Fast Promise"
 */
const fastPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Fast Promise');
  }, 1000);
});

/*
* ASYNC/AWAIT Y PROMISE.ALL

* Combinando async/await con Promise.all
- async/await ofrece una sintaxis limpia para código asíncrono
- Promise.all permite ejecutar múltiples promesas en paralelo
- La combinación aprovecha lo mejor de ambos enfoques

* Ejecución secuencial vs paralela
- Secuencial (await uno tras otro): Las promesas esperan su turno para ejecutarse
- Paralela (Promise.all + await): Todas las promesas se inician a la vez

* Ventajas de la ejecución paralela
- Mejor rendimiento: El tiempo total es igual al de la promesa más lenta
- Menor tiempo de espera para el usuario
- Uso más eficiente de recursos

* Cuándo usar cada enfoque
- Secuencial: Cuando cada promesa depende del resultado de la anterior
- Paralelo: Cuando las promesas son independientes entre sí

*/