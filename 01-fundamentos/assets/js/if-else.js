let a = 15;

// El if evalúa una condición que debe devolver un valor booleano (true o false).
// Si la condición es verdadera, ejecuta el bloque de código dentro del if.
// Si es falsa, ejecuta el bloque dentro del else.
if ( a >= 10 ) { // Verifica si 'a' es mayor o igual a 10.
  console.log( 'A es mayor o igual a 10' );
} else {
  console.log( 'A es menor a 10' );
}

// Creamos un objeto de fecha con la fecha actual.
const hoy = new Date();
// Usamos el método getDay() para obtener el día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado).
let dia = hoy.getDay();
console.log({ dia });

// dia = 0; -> = Asigna valores.
// dia == '0'; -> == Compara valores, ignora el tipo.
// dia === '0' -> === Compara valores y tipos.


// Este bloque muestra cómo manejar múltiples condiciones con if-else anidados.
// Aunque funcional, puede ser difícil de leer si hay muchas condiciones.
// if ( dia === 0 ) {
//   console.log( 'Domingo' );
// } else {
//   if ( dia === 1 ) {
//     console.log( 'Lunes' );
//   } else {
//     console.log( 'No es lunes ni domingo' );
//   }
// }

// Esta es una forma más clara y legible de manejar múltiples condiciones.
// Evalúa cada condición en orden. Si una es verdadera, ejecuta su bloque y salta el resto.
if ( dia === 0 ) {
  console.log( 'Domingo' );
} else if ( dia === 1 ) {
  console.log( 'Lunes' );
} else if ( dia === 2 ) {
  console.log( 'Martes' );
} else {
  console.log( 'No es lunes, martes o domingo...' );
  
}

// console.log( 'Fin del programa' );

// Sin usar If Else, o Switch únicamente objetos, imprimir el día de la semana.
dia = 1;

const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
console.log( diaLetras[dia] || 'Día no valido' );

// ejemplo con función de flecha
const obtenerDiaSemana = ( diaNumero ) => {
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return diasSemana[diaNumero] || 'Día no valido';
}

console.log( obtenerDiaSemana(dia) );
