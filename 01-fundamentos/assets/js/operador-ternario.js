/*
Dias de semana abrimos a las 11
pero los fines de semana abrimos a las 9
*/

const dia = 1; // 0: domingo, 1: lunes, ..., 6: sábado
const horaActual =  11; 

let horaApertura;
let mensaje;

/* --- Forma normal --- */
// if ( dia === 0 || dia === 6 ) {
// El método .includes() en un arreglo se utiliza para verificar si un elemento específico
//  está presente en ese arreglo. Devuelve true si el elemento existe y false si no.
// if ( [0,6].includes(dia) ) {
//   console.log( 'Fin de semana' );
//   horaApertura = 9;
// } else {
//   console.log( 'Día semana' );
//   horaApertura = 11;
// }

// if ( horaActual >= horaApertura ) {
//   mensaje = 'Esta abierto';
// } else {
//   // mensaje =  'Esta cerrado , hoy abrimos a las' + horaApertura;
//   mensaje =  `Está cerrado, hoy abrimos a las  ${horaApertura}`;
// }

/* --- Operador ternario --- */
/*
condición ? valor_si_verdadero : valor_si_falso;
- Si la condición es verdadera, se ejecuta valor_si_verdadero.
- Si la condición es falsa, se ejecuta valor_si_falso.
*/

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura ) 
  ? 'Está abierto' 
  : `Esta cerrado, hoy abrimos a las  ${horaApertura}`;

console.log({ horaApertura, mensaje });
