import { heroes } from "../data/heroes";

/**
 * Componente que demuestra el uso de funcion async para manejar promesas.
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrará el resultado
 */
export const asyncComponent = ( element ) => { 
  
  const id = '5d86371fd55e2e2a30fe1ccb';
  console.log( 'Inicio de componente' );
  

  /**
   * EJEMPLO 1: Consumo de una función async
   * 
   * Las funciones async devuelven promesas que se pueden manejar con then/catch
   * La ejecución de este código es asíncrona (no bloquea el hilo principal)
   */
  findHero( id )
    .then( name => element.innerHTML = name )
    .catch( error => element.innerHTML = error );

  /**
   * Este log se ejecutará ANTES de que se complete la promesa
   * porque las promesas son asíncronas y se procesan después del código síncrono
   */
  console.log( 'Fin del componente' );
  
}

/**
 * Busca un héroe por su ID y devuelve su nombre.
 * La palabra clave 'async' convierte esta función en una función que devuelve una promesa.
 * 
 * @param {String} id - ID del héroe a buscar
 * @returns {Promise<String>} Promesa que resuelve con el nombre del héroe
 */
const findHero = async ( id ) => {

  const hero = heroes.find( hero => hero.id === id);
  
  if ( !hero ) {
    /*
    En funciones async, lanzar un error con 'throw' es equivalente a
    rechazar una promesa con 'reject'. Esto hará que se ejecute el 'catch'
    al consumir la promesa.
     */
    throw `Hero with id ${ id } not found`;
  }
  
  /*
  En funciones async, el 'return' es equivalente a resolver una promesa con 'resolve'
  Cualquier valor que se retorne será "envuelto" automáticamente en una promesa resuelta
  */
  return hero.name;

}


/*
* ASYNC

* ¿Qué es 'async'?
Es una palabra clave que se coloca antes de una función para indicar que:
- La función siempre devolverá una promesa
- El valor retornado se "envuelve" automáticamente en una promesa resuelta
- Si se lanza un error con throw, se crea una promesa rechazada

* Comportamiento de las funciones async
- Son asíncronas: no bloquean la ejecución del código que sigue
- Se ejecutan de forma paralela al flujo principal del programa
- El código después de la llamada a la función async se ejecuta inmediatamente
- Los callbacks (.then/.catch) se ejecutan cuando la promesa se resuelve

* Flujo de ejecución asíncrona
- Las funciones async se colocan en una "cola de tareas" separada
- JavaScript primero ejecuta todo el código síncrono
- Luego procesa las tareas asíncronas cuando el hilo principal está libre
- Esto explica por qué 'Fin del componente' se muestra antes que el resultado

*/