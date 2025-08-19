
const carros = ['Ford', 'Nissan', 'Honda', 'Toyota'];

// El ciclo `while` ejecuta el bloque de código mientras la condición sea verdadera.
// Si la condición es falsa desde el inicio, el bloque no se ejecuta ni una sola vez.
console.warn('While')
let i = 0;

// En este ejemplo, el ciclo while se ejecuta mientras el valor de i sea menor al tamaño del arreglo de carros 
// while( i < carros.length ) {
//   console.log( carros[i] );
//   // i = i + 1;
//   i++; // incremento de i para evitar un ciclo infinito
// }

// En este ejemplo, el ciclo while se ejecuta mientras el valor en carros[i] sea "truthy".
// Valores como undefined, null o false detendrán el ciclo.
while ( carros[i] ) {
  if ( i === 1 ) {
    console.log( 'otro' );
    // break; // Detiene por completo la ejecución del ciclo en el que se encuentra, sin importar si quedan más iteraciones por realizar.
    i++; // Incrementa el índice para avanzar al siguiente elemento
    continue; // Salta el resto del bloque de código en la iteración actual y pasa directamente a la siguiente iteración del ciclo.
  }

  console.log( carros[i] );
  i++; // Incrementa el índice para avanzar al siguiente elemento
}

// El ciclo `do-while` siempre ejecuta el bloque de código al menos una vez,
// incluso si la condición es falsa desde el principio.
console.warn('Do While')
let j = 0;

do {
  console.log( carros[j] );
  j++; // Incrementa el índice para avanzar al siguiente elemento
} while ( carros[j] );

/* ------ NOTAS ------ */
// continue: Salta el resto del bloque de código en la iteración actual y pasa a la siguiente.
// break: Detiene el ciclo por completo, independientemente de la condición.
// ! Precaución: Asegurarse que las condiciones de los ciclos eventualmente se vuelvan false para evitar ciclos infinitos.