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
saludarFlecha2( 'Mateo' );