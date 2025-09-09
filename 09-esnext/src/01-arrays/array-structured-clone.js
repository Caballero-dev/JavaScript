
const superHeroes = [
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

// Cuando trabajamos con arreglos que contienen objetos, los objetos se pasan por referencia. 
// Esto significa que si modificamos un objeto en una copia del arreglo, también 
// se verá reflejado en el arreglo original.

// El operador spread (`...`) es útil para copiar arreglos, pero solo funciona correctamente
// si el arreglo contiene datos primitivos (números, strings, booleanos, etc.).

// Ejemplo de una copia superficial con spread
// const superHeroesCopy = [...superHeroes];

// Si el arreglo contiene objetos anidados, como en este caso, 
// el operador spread no crea una copia profunda. Los objetos internos seguirán 
// siendo referencias al mismo lugar en memoria.

// Ejemplo de una copia superficial con spread y map
// const superHeroesCopy = [...superHeroes.map(h => ({...h}))];

// Antes de 'structuredClone', una forma común de crear 
// una copia profunda era convertir el arreglo a JSON y luego volverlo a convertir a un objeto.
// const superHeroesCopy = JSON.parse(JSON.stringify(superHeroes));

// La solución actual es usar 'structuredClone', que crea una copia profunda del arreglo.
// Esto significa que todos los objetos internos también se copian, y no comparten referencias 
// con el arreglo original.
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name ='Flash';
superHeroesCopy[0].city.cp = 9000;

console.table( superHeroes );
console.table( superHeroesCopy );


/*
* Método 'structuredClone'

El método `structuredClone` es una herramienta moderna que permite crear una 
**copia profunda** de un objeto o arreglo. Esto significa que todos los objetos 
internos y propiedades anidadas también se copian, y no comparten referencias con el objeto o arreglo original.

Características principales:
1. Copia profunda: A diferencia del operador spread (...),'structuredClone' copia todos los niveles de un objeto o arreglo, incluyendo objetos anidados.
2. Independencia: Los cambios realizados en la copia no afectan al original, y viceversa.
3. Soporte para estructuras complejas: Puede copiar estructuras como Map, Set, etc.

*/