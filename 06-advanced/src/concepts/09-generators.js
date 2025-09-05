
/**
 * Componente que demuestra el uso de funciones generadoras
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se mostrarán los resultados
 */
export const generatorFunctionsComponent = ( element ) => { 
  
  /**
   * EJEMPLO 1: Uso básico de un generador
   * 
   * Este código muestra cómo crear y consumir un generador básico
   * que produce una secuencia de valores con yield.
   */
  /*
  // Crear una instancia del generador (no ejecuta el cuerpo de la función todavía)
  const myGenerator = myFirstGeneratorFunction();

  // Primera llamada a next() - ejecuta hasta el primer 'yield'
  console.log( myGenerator.next() );

  console.log( myGenerator.next() );
  console.log( myGenerator.next() );
  console.log( myGenerator.next() );
  console.log( myGenerator.next() );
  console.log( myGenerator.next() );
  console.log( myGenerator.next() );
  */

  /**
   * EJEMPLO 2: Generador infinito de IDs
   * 
   * Crea un generador que produce una secuencia infinita de números
   * incrementales, útil para generar IDs únicos.
   */
  const genId = idGenerator();

  console.log( genId.next() );
  console.log( genId.next() );
  console.log( genId.next() );
  
  /**
   * EJEMPLO 3: Contador en un botón
   * 
   * Crea un botón que incrementa su contador cada vez que se hace clic,
   * utilizando el generador para mantener el estado del contador.
   */
  const btn = document.createElement('button');
  btn.innerText = 'Click me';
  element.append( btn );
  
  /**
   * Función que actualiza el texto del botón con el siguiente valor del generador.
   * Se ejecuta cada vez que se hace clic en el botón.
   */
  const renderBtn = () => {
    const { value } = genId.next();
    btn.innerText = `Click ${ value }`;
  }

  btn.addEventListener('click', renderBtn);

}


// Función generadora que produce una secuencia de números
function* idGenerator() {
  let currentId = 0;

  while(true) {
    yield ++currentId
  }
  
}

// Función generadora que produce una secuencia de valores.
function* myFirstGeneratorFunction() {

  // Cada 'yield' devuelve un valor y pausa la ejecución
  yield 'primer valor';
  yield 'segundo valor';
  yield 'tercer valor';
  yield 'cuartos valor';

  // Un 'return' marca el fin del generador (done: true)
  return 'NO hay valor'; // Cuando se especifica el return, significa que ya no hay valores después

  yield 'ya no hace nada';

}

/*
* FUNCIONES GENERADORAS

* ¿Qué son las funciones generadoras?
Son funciones especiales que pueden pausar su ejecución y reanudarla más tarde,
manteniendo su contexto (variables y estado) entre llamadas.

* El objeto retornado por next():
- value: El valor producido por la expresión yield
- done: Booleano que indica si el generador ha terminado (true) o no (false)

*/