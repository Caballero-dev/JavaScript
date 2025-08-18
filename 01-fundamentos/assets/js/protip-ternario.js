
// Función que determina el mayor de dos números usando el operador ternario
const elMayor = (a, b) => ( a > b ) ? a : b;

// Función que determina el costo basado en la membresía
const tieneMembresia = ( miembro ) => miembro ?  '2 Dólares' :  '10 Dólares';

console.log( elMayor(7, 89) );
console.log( tieneMembresia(false) );

// Uso del operador ternario dentro de un arreglo
const amigo = false;
const amigoArr = [
  'Peter',
  'Tony',
  'Dr, Strange',
  amigo ? 'Thor' : 'Loki',
  elMayor(10, 17)
]

console.log( amigoArr );

// Ejemplo de múltiples condiciones con el operador ternario
const nota = 84;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({ nota, grado });
