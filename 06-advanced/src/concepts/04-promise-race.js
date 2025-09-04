
/**
 * Componente que demuestra el uso de Promise.race para obtener el resultado de la primera promesa que se resuelva.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrará el resultado
 */
export const promiseRaceComponent = ( element ) => { 

  // Estado de carga
  element.innerHtml =  'Loading...';

  /**
   * Actualiza el contenido del elemento HTML con el valor recibido
   * 
   * @param {string} value - Texto que se mostrará en el elemento
   */
  const renderValue = ( value ) => {
    element.innerHTML = value;
  }

  /**
   * Promise.race ejecuta varias promesas simultáneamente y devuelve 
   * el resultado de la primera que se resuelva (o rechace)
   */
  Promise.race([
    mediumPromise(),
    slowPromise(),
    fastPromise(),
  ])
  .then( renderValue ); // Muestra el resultado de la promesa más rápida

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
* Promise.race

Promise.race es un método que toma un array de promesas y devuelve una nueva promesa
que se resuelve o rechaza tan pronto como una de las promesas del array se resuelva o rechace,
con el valor o razón de esa promesa.

Casos de uso comunes:
1. Implementar timeouts para peticiones
2. Tomar el resultado de la fuente de datos más rápida
3. Ejecutar tareas en paralelo cuando solo necesitamos un resultado

Diferencia con Promise.all:
- Promise.all espera a que TODAS las promesas se resuelvan
- Promise.race devuelve el resultado de la PRIMERA promesa en completarse

Si alguna promesa es rechazada antes que las demás se resuelvan,
Promise.race devolverá ese rechazo inmediatamente.
*/

