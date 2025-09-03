import { heroes } from "../data/heroes"

/**
 * Componente que utiliza una promesa para buscar un héroe por su ID y mostrar su nombre en el DOM.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrará el nombre del héroe
 */
export const promiseComponent = ( element ) => { 

  /**
   * Renderiza el nombre del héroe en el elemento HTML.
   * 
   * @param {Object} hero - Objeto del héroe encontrado.
   */
  const renderHero = ( hero ) => {
    element.innerHTML =  hero.name;
  }

  /**
   * Renderiza un mensaje de error en el elemento HTML.
   * 
   * @param {String} error - Mensaje de error.
   */
  const renderError = ( error ) => {
    element.innerHTML =  `
      <h1> Error: </h1>
      <h3> ${ error } </h3>
    `;
  }

  const id1 = '5d86371fd55e2e2a30fe1ccb2';

  // Uso de la promesa para buscar un héroe.
  // then -> se ejecuta si la promesa se resuelve con éxito.
  // catch -> se ejecuta si la promesa es rechazada.
  // finally -> se ejecuta después de then o catch, sin importar el resultado.
  findHero( id1 )
  // .then( superHero => renderHero(superHero) ) // Si una función recibe el mismo argumento que necesita pasar, se puede simplificar.
    .then( renderHero )
    .catch( renderError );
}



/**
 * Busca un héroe por su ID y devuelve una promesa.
 * 
 * @param {String} id - ID del héroe a buscar.
 * @returns {Promise<Object>} - Promesa que se resuelve con el héroe encontrado o se rechaza con un error.
 */
const findHero = ( id ) => {

  /*
  Dentro de la promesa se define un callback que recibe dos parámetros:
  - `resolve`: Función que se llama cuando la operación es exitosa.
  - `reject`: Función que se llama cuando la operación falla.
  */
  return new Promise( (resolve, reject)=> {
    
    const hero = heroes.find( hero => hero.id === id );

    if ( hero ) {
      // Si se encuentra el héroe, se resuelve la promesa con el héroe.
      resolve( hero );
      return;
    }

    // Si no se encuentra el héroe, se rechaza la promesa con un mensaje de error.
    reject(`Hero with id ${ id } not found`);
  });
}


/*
* ¿Qué es una promesa?

Una promesa es un objeto que representa el eventual resultado de una operación asíncrona.
- `resolve`: Se llama cuando la operación se completa con éxito.
- `reject`: Se llama cuando la operación falla.

En este archivo:
- `findHero` devuelve una promesa que busca un héroe por su ID.
- `promiseComponent` consume la promesa y maneja el resultado con `then` y `catch`.

Ejemplo de flujo:
1. Se llama a `findHero` con un ID.
2. Si el héroe se encuentra, se ejecuta `resolve` y `then` maneja el resultado.
3. Si el héroe no se encuentra, se ejecuta `reject` y `catch` maneja el error.
*/
