
// Definición de arreglos

// Se declara un arreglo con 10 elementos vacios
// const arr = new Array(10);

// Se declara un arreglo vacío
// const arr = [];

// console.log( arr );

// Se declara un arreglo con tres elementos con el mismo tipo de datos
let videoJuegos = ['Mario 3', 'Pokémon', 'GTA'];
console.log( { videoJuegos } );

// Acceder a un elemento del arreglo por su posición
console.log( videoJuegos[0] ); // Mario 3
console.log( videoJuegos[2] );

// Declaración de arreglos con diferentes tipos de datos
let arregloCosas = [
  true,
  123,
  'Fernando',
  1 + 2,
  function(){},
  ()=>{},
  { a: 1 },
  ['X', 'Batman', 'Superman', ['Iroman', 'Spiderman']]
];

console.log( { arregloCosas } );
console.log(arregloCosas[2]) // 123

// Acceder a un elemnto dentro de un arreglo que esta dentro de otro arreglo

// arregloCosas[7] -> se obiene el arreglo de los superheros 
// arregloCosas[7][2] -> accede al elemento con indice 2(Superman)
console.log(arregloCosas[7][2]);

// Aceder al elmento con valor Spiderman dentro de un arreglo
console.log(arregloCosas[7][3][1])

// Se obtiene el arreglo de superheroes
let superheroes = arregloCosas[7];
// Accede al elemento con incide 1(Batman)
console.log(superheroes[1]); 