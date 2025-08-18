// La ventaja de Switch:
// - Evalúa una expresión y ejecuta directamente el caso que cumpla con la condición.
// - Es más eficiente que múltiples condicionales `if-else` cuando se tienen valores específicos.
// - Cada caso se compara estrictamente (===), lo que significa que también evalúa el tipo de dato.

// Estructura del switch:
// - `switch` evalúa la expresión dentro de los paréntesis.
// - Cada `case` representa un valor posible de la expresión.
// - Si se cumple un `case`, se ejecuta el bloque de código asociado.
// - El `break` detiene la ejecución del switch para evitar que continúe evaluando otros casos.
// - Si ningún `case` coincide, se ejecuta el bloque `default` (opcional).

const dia = 2; // 0: Domingo

switch( dia ) {
  case 0:
    console.log( 'Domingo' );
    break;
  case 1:
    console.log( 'Lunes' );
    break
  case 2:
    console.log( 'Martes' );
    break;
  default:
    console.log( 'No es domingo, lunes, martes' );
}