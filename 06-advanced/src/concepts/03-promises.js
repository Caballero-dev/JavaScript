import { heroes } from "../data/heroes"

/**
 * Componente que utiliza una promesa para buscar un héroe por su ID y mostrar su nombre en el DOM.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrarán los nombres de los héroes o un mensaje de error.
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
   * Renderiza los nombres de dos héroes en el elemento HTML.
   * 
   * @param {Object} hero1 - Primer héroe encontrado.
   * @param {Object} hero2 - Segundo héroe encontrado.
   */
  const renderTwoHeroes = ( hero1, hero2 ) => {
    element.innerHTML = `${ hero1.name } / ${ hero2.name}`;
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

  const id1 = '5d86371fd55e2e2a30fe1ccb';
  const id2 = '5d86371f97c29d020f1e1f6d';


  /**
   * EJEMPLO 1: Uso básico de promesas
   * 
   * - then: Se ejecuta cuando la promesa se resuelve con éxito
   * - catch: Se ejecuta cuando la promesa es rechazada
   * - finally: Se ejecuta después de then o catch, sin importar el resultado
   */
  /*
  findHero( id1 )
    // .then( superHero => renderHero(superHero) ) // Si una función recibe el mismo argumento que necesita pasar, se puede simplificar.
    .then( renderHero )
    .catch( renderError );
  */
  
  /**
   * EJEMPLO 2: Promise Hell - Promesas anidadas (Mala práctica)
   * 
   * Este enfoque crea código difícil de mantener y entender.
   * Útil solo cuando la segunda promesa depende del resultado de la primera.
   */
  /*
  findHero( id1 )
    .then( h1 => {

      findHero( id2 )
        .then( h2 => {
          renderTwoHeroes(h1, h2);
        })
        .catch( renderError ); // Maneja el error si no se encuentra el segundo héroe.

    })
    .catch( renderError ); // Maneja el error si no se encuentra el primer héroe.
  */

  /**
   * EJEMPLO 3: Promesas en cadena (mejor que el Promise Hell)
   * 
   * Más legible que el Promise Hell, encadena promesas secuencialmente
   * usando una variable para almacenar el resultado intermedio.
   */
  /*
  let hero1;

  findHero( id1 )
    .then( h1 => {
      hero1 =  h1;
      return findHero( id2 ); // Retorna una nueva promesa para encadenarla
    }).then( h2 => {
      renderTwoHeroes( hero1, h2 );
    })
    .catch( renderError );
  */
  
  /**
   * EJEMPLO 4: Promise.all - Ejecución de promesas en paralelo (Mejor práctica)
   * 
   * Ejecuta múltiples promesas simultáneamente y espera a que todas se resuelvan.
   * Ideal cuando las promesas no dependen entre sí.
   * Más eficiente, legible y fácil de mantener.
   */
  Promise.all([
    findHero( id1 ),
    findHero( id2 )
  ])
  .then( ([hero1, hero2] ) => renderTwoHeroes(hero1, hero2))
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

Flujo típico:
1. Se crea una promesa (new Promise)
2. Se ejecuta código asíncrono dentro de ella
3. Se llama a resolve o reject según el resultado
4. Se maneja el resultado con then/catch

EJEMPLO 1: Uso básico de promesas
En este archivo:
- `findHero` devuelve una promesa que busca un héroe por su ID.
- `promiseComponent` consume la promesa y maneja el resultado con `then` y `catch`.


* ¿Qué es el Promise Hell?

El Promise Hell ocurre cuando se tienen múltiples promesas anidadas, lo que hace que  el código sea difícil de leer, mantener y depurar.

EJEMPLO 2: Promise Hell - Promesas anidadas (Mala práctica)
En este archivo:
- findHero se llama dentro de otro findHero, creando una estructura anidada.
- Si se necesitan más héroes, el código se volvería aún más complejo.

* ¿Qué es Promise.all?
Es un método que permite ejecutar múltiples promesas en paralelo. Recibe un arreglo de promesas y devuelve una nueva promesa que:
- Se resuelve cuando todas las promesas del arreglo se resuelven.
- Se rechaza si alguna de las promesas del arreglo falla.

EJEMPLO 4: Promise.all - Ejecución de promesas en paralelo
En este archivo:
- `Promise.all` se utiliza para buscar dos héroes en paralelo.
- Si ambas promesas se resuelven, se renderizan los nombres de los héroes.
- Si alguna promesa falla, se maneja el error con `catch`.

*/