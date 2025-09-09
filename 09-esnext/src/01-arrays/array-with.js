
const state = [
  {
    id: 1,
    name: 'Batman',
    city: {
      cp: 98910,
    }
  },
  {
    id: 2,
    name: 'Ironman',
  },
  {
    id: 3,
    name: 'Spiderman',
  },
  {
    id: 4,
    name: 'Superman',
  },
  {
    id: 5,
    name: 'Hulk',
  }
];

const index = 1;
const newName = 'Flash';

// Aunque el método map crea un nuevo arreglo, no rompe las referencias internas
// de los objetos dentro del arreglo original. Esto significa que si modificamos
// un objeto en el nuevo arreglo, también se verá reflejado en el arreglo original.
// const newState = state.map((hero, i) => {
//   if (i === index) {    
//     hero.name = newName; // Esto modifica el objeto original
//   }
//   // return hero;
//   // Para evitar modificar el objeto original, se usaba el operador spread
//   return { ...hero }; // Crea una copia superficial del objeto
// });

// js ofrece el método 'with', que nos permite crear un nuevo arreglo
// y realizar una modificación específica en el mismo. Este método:
// - Devuelve un nuevo arreglo.
// - Mantiene las referencias internas de los objetos, a menos que se rompan explícitamente.
const newState = state.with(index, {
  // id: 1000, // Si no incluimos el id, el id no se incluirá en el nuevo objeto.
  // ...state[index], // Usamos el operador spread para copiar todas las propiedades del objeto original.
  ...state.at(index), // El método 'at' nos permite acceder a un elemento en una posición específica.
  name: newName,
});

// Si queremos romper completamente las referencias internas (crear una copia profunda),
// podemos usar 'structuredClone' antes de aplicar el método `with`.
// Esto asegura que los objetos internos no compartan referencias con el arreglo original.
// const newState = structuredClone(state).with(index, {
//   id: 1000,
//   name: newName,
// });

state[0].name = 'Vision';

console.table( newState );

// Mostramos el último elemento del arreglo original utilizando dos métodos:
// 1. Accediendo directamente con state[state.length - 1].
// 2. Usando el método `at` con un índice negativo.
console.log( 'El último:',  state[state.length -1 ] );
console.log( 'El último:',  state.at(-1) );


/*
* Método at

El método 'at' es una forma moderna y más legible de acceder a elementos de un arreglo. 
Permite usar índices positivos y negativos para obtener elementos específicos.

- Índices positivos: Acceden a los elementos desde el inicio del arreglo.
  Ejemplo: array.at(0) devuelve el primer elemento.

- Índices negativos: Acceden a los elementos desde el final del arreglo.
  Ejemplo: array.at(-1) devuelve el último elemento.

*/