// Recomendación, la declaracion de las funciones se recomienda hacerlo al inicio y despues realizar el llamado de la función.

// Definir una función
// function saludar() {
//   console.log('Hola Mundo');
// }

// Definir una función con parametros/argumentos
function saludar( nombre ) {
  // la funciones internamente tiene un objeto llamado arguments 
  // el cual contiene todos los argumentos que son enviados a la función
  console.log( arguments );
  console.log('Hola ' + nombre);
}

// No permite declarar una varible con el mismo nombre de una función
// let saludar = 123;

// Función anonima: se considera anonima porque no tiene un nombre propio definino,
// pero al asignarla a una constante la función va a responder a ese nombre.
// Nota: se recomienda asignarla a una constante ya que esta no puede cambiar su valor o reutilizar el nombre.
// const saludar2 = function() {
//   console.log('Hola Mundo');
// }

const saludar2 = function( nombre ) {
  console.log('Hola ' + nombre);
}

// Funciones de flecha (lambda functions/arrow functions)
const saludarFlecha = () => {
  console.log( 'Hola flecha' ); 
}

const saludarFlecha2 = ( nombre ) => {
  console.log( 'Hola ' + nombre ); 
}

// Ejecutar una función
saludar( 'Eduardo', 20, false );
saludar2( 'Fernando' );
saludarFlecha();
saludarFlecha2( 'Juan' );

/* ------------------------- return ------------------------- */

// return -> se le indica a la función que valor retornar
function saludarRetorno(nombre) {
  console.log( 'Hola ' + nombre );
  // se le indica que regresar
  // return 10;
  return [20, 10, 1]

  // El código despues del return no se va a ejecutar
  console.log( 'Hola de nuevo' ); 
}

const retornoDeSaludar = saludarRetorno( 'lalo' );
// console.log({ retornoDeSaludar });
console.log( retornoDeSaludar[0], retornoDeSaludar[1] );

// Ejemplo de retorno
function sumar ( a, b ) {
  return a + b;
}

// const sumar2 = (a,b) => {
//   return a + b;
// }

// En la función de flecha cuando se tiene solo una liena de código con return, 
// se puede reducir el codigo de la siguiete manera 
const sumar2 = (a,b) => a + b;

console.log( sumar(1,2) );
console.log( sumar2(10,2) );

/* ------------------------------------------ */

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio() );
console.log( getAleatorio2() );
