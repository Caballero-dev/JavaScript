import { heroes } from "../data/heroes";

/**
 * Componente que utiliza un callback para buscar un héroe por su ID y mostrar su nombre en el DOM
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrará el nombre del héroe
 */
export const callbacksComponent = ( element ) => { 
  
  const id1 = '5d86371f233c9f2425f16916';
  const id2 = '5d86371fd55e2e2a30fe1cc3';

  /*
  // Llama a la función findHero y pasa un callback para manejar el resultado
  findHero( id1, (error, hero) => {
    
    // element.innerHTML = hero?.name || 'No hay heroe'; // Forma basica de manejar un error. 
    
    // Si hay un error, se muestra en el elemento HTML.
    if ( error ) {
      element.innerHTML =  error;
      return; // Detiene la ejecución si hay un error.
    }
    
    // Si no hay error, se muestra el nombre del héroe en el elemento HTML.
    element.innerHTML = hero.name;
  });
  */
 
  // Callback Hell: Llamadas anidadas de callbacks.
  findHero( id1, (error, hero1) => {

    if ( error ) {
      element.innerHTML =  error; // Muestra el error si no se encuentra el primer héroe.
      return;
    }
    
    findHero( id2, (error, hero2) => {
      if ( error ) {
        element.innerHTML =  error; // Muestra el error si no se encuentra el segundo héroe.
        return;
      }

      // Si ambos héroes se encuentran, muestra sus nombres en el DOM.
      element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
    });
    
  });


}

/**
 * Busca un héroe por su ID y ejecuta un callback con el resultado
 * 
 * @param {String} id - ID del héroe a buscar
 * @param { (error: String | Null, hero: Object) => void } callback - Función que se ejecuta cuando se encuentra el héroe
 */
const findHero = ( id, callback ) => {

  // Busca el héroe en el arreglo de héroes utilizando el método find
  const hero = heroes.find( (hero) => hero.id === id );

  // Si no se encuentra el héroe, se ejecuta el callback con un mensaje de error.
  if ( !hero ) {
    callback(`Hero with id ${ id } not found.`);
    return; // Detiene la ejecución para evitar llamar al callback nuevamente.
  }

  // Si se encuentra el héroe, se ejecuta el callback con `null` como error y el héroe como resultado
  callback(null, hero );
}

/*
* ¿Qué es un callback?

Un callback es una función que se pasa como argumento a otra función.
Se invoca dentro de la función que la recibe, permitiendo manejar resultados
o ejecutar lógica adicional cuando se completa una tarea (como buscar un héroe).

En este caso:
- `findHero` recibe un callback y lo ejecuta con el héroe encontrado.
- Si el héroe no se encuentra, el callback se ejecuta con `undefined`.

En este caso:
- findHero recibe un callback y lo ejecuta con dos argumentos:
  1. `error`: Si no se encuentra el héroe, se pasa un mensaje de error.
  2. `hero`: Si se encuentra el héroe, se pasa el objeto del héroe.
- callbacksComponent maneja el resultado del callback:
  - Si hay un error, lo muestra en el DOM.
  - Si no hay error, muestra el nombre del héroe en el DOM.


* ¿Qué es el Callback Hell?

El Callback Hell ocurre cuando se tienen múltiples callbacks anidados, lo que hace que el código sea difícil de leer, mantener y depurar.

En este archivo:
- `findHero` se llama dentro de otro `findHero`, creando una estructura anidada.
- Si se necesitan más héroes, el código se volvería aún más complejo.

*/