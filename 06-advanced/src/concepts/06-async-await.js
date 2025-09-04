import { heroes } from "../data/heroes";

/**
 * Componente que demuestra el uso de async/await para simplificar el manejo de promesas.
 * Este componente utiliza la sintaxis async/await para buscar dos héroes de manera secuencial.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrarán los nombres de los héroes o un mensaje de error.
 */
export const asyncAwaitComponent = async ( element ) => { 
  
  const id1 = '5d86371f9f80b591f499df32';
  const id2 = '5d86371f1efebc31def272e2';


  /**
   * Para manejar los errores con async/await, usamos bloques try-catch
   * - try: Contiene el código que podría generar un error
   * - catch: Captura y maneja cualquier error que ocurra en el bloque try
   */
  try {

    /**
     * await espera a que se resuelva la promesa antes de continuar con la ejecución
     * Este código es secuencial: primero se busca hero1, luego hero2
     */
    const hero1 = await findHero( id1 );
    const hero2 = await findHero( id2 );

    // Esta línea solo se ejecuta después de que ambas promesas se han resuelto
    element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
  
  } catch (error) {

    // Si cualquiera de las promesas es rechazada, se ejecuta este bloque
    element.innerHTML = error;

  }

}

/**
 * Busca un héroe por su ID y devuelve el objeto héroe.
 * La palabra clave 'async' hace que esta función devuelva una promesa.
 * 
 * @param {String} id - ID del héroe a buscar
 * @returns {Promise<Object>} Promesa que resuelve con el objeto héroe completo
 */
const findHero = async ( id ) => {

  const hero = heroes.find( hero => hero.id === id );

  if ( !hero ) {
    throw `Hero with id ${ id } not found`;
  }

  return hero;
}


/*
* ASYNC/AWAIT

* ¿Qué es async/await?
Es una sintaxis que permite trabajar con promesas de una forma que parece síncrona:
- async: Indica que una función devuelve una promesa
- await: Pausa la ejecución hasta que una promesa se resuelva y extrae su valor

* Reglas
- await SOLO puede usarse dentro de una función async
- await hace que el código espere hasta que la promesa se resuelve
- Las líneas siguientes al await no se ejecutan hasta que la promesa se complete

* Comportamiento de await
- Sin await: La función devuelve la promesa sin esperar su resolución
- Con await: La función espera a que se resuelva la promesa y devuelve el valor extraído

* Manejo de errores
- Con promesas: Se usa .catch() al final de la cadena
- Con async/await: Se usa un bloque try-catch que captura cualquier error
   
*/