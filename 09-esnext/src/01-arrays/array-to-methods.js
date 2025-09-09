
const heroes = ['Iron Man', 'Spider-Man', 'Thor', 'Hulk', 'Batman'];

// Creamos una referencia al arreglo original
// Esto significa que `heroesCopy` y `heroes` apuntan al mismo lugar en memoria
const heroesCopy = heroes;

// --- Ejemplo 1: Ordenar alfabéticamente con sort ---
// El método 'sort' ordena los elementos del arreglo alfabéticamente (por defecto).
// Sin embargo, modifica el arreglo original y cualquier referencia a él.
// heroes.sort();

// --- Ejemplo 2: Ordenar alfabéticamente con toSorted ---
// El método 'toSorted' es una alternativa moderna que devuelve un nuevo arreglo ordenado,
// sin modificar el arreglo original.
// const sortedHeroes = heroes.toSorted();

// --- Ejemplo 3: Invertir el orden con reverse ---
// El método 'reverse' invierte el orden de los elementos en el arreglo.
// Modifica el arreglo original y cualquier referencia a él.
// heroes.reverse();

// --- Ejemplo 4: Invertir el orden con toReversed ---
// El método 'toReversed' devuelve un nuevo arreglo con los elementos en orden inverso,
// sin modificar el arreglo original.
// const reversedHeroes = heroes.toReversed();

// --- Ejemplo 5: Eliminar e insertar elementos con splice ---
// El método 'splice' permite eliminar y/o insertar elementos en un arreglo.
// Modifica el arreglo original y devuelve los elementos eliminados.
// const deleteHero = heroes.splice(0, 2, 'Linterna');


// --- Ejemplo 6: Eliminar e insertar elementos con toSpliced ---
// El método 'toSpliced' devuelve un nuevo arreglo con las modificaciones aplicadas
// (eliminación e inserción), sin modificar el arreglo original.
const deleteHero = heroes.toSpliced(0, 2, 'Linterna');

console.table( heroes );
// console.table( heroesCopy );
// console.table( sortedHeroes );
// console.table( reversedHeroes );
console.table( deleteHero );


/*
* toSorted()
El método 'toSorted' es una alternativa al método 'sort'. 
A diferencia de 'sort', no modifica el arreglo original. En su lugar, devuelve un nuevo arreglo ordenado.

* toReversed()
El método 'toReversed' es una alternativa al método 'reverse'. 
Devuelve un nuevo arreglo con los elementos en orden inverso, sin modificar el arreglo original.

* toSpliced()
El método 'toSpliced' es una alternativa al método 'splice'. 
Devuelve un nuevo arreglo con las modificaciones aplicadas (eliminación e inserción), sin modificar el arreglo original.

*/