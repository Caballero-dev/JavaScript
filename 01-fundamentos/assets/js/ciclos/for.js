
const heroes = ['Iroman', 'Spiderman', 'Batman', 'Superman'];

const heroeDetalles = {
  nombre: 'Tony',
  edad: 40,
  vivo: false,
  trajes: ['Mak I', 'Mark V', 'Mark 50'],
}

console.warn('For Tradicional');
// Estructura: tiene tres partes dentro de los paréntesis:
// 1. Inicialización: let i = 0 (se inicializa la variable de control).
// 2. Condición: i < heroes.length (el ciclo se ejecuta mientras esta condición sea verdadera).
// 3. Incrementador: i++ (se incrementa la variable de control en cada iteración).

// Es el ciclo más común y flexible. Permite controlar manualmente la inicialización, la condición y el incremento.
for (let i = 0; i < heroes.length; i++ ) {
  console.log( heroes[i] );
}

console.warn('For in');
// Este ciclo recorre las propiedades de un objeto o los índices de un arreglo.
// En este caso, i representa el índice de cada elemento en el arreglo heroes.

// Recorre las propiedades de un objeto o los índices de un arreglo.
for ( let i in heroes ) {
  console.log( heroes[i] );
}

for (let propiedad in heroeDetalles ) {
  console.log( `${propiedad}: ${heroeDetalles[propiedad]}` );
  
}

console.warn('For of');
// Este ciclo recorre directamente los valores de un arreglo o cualquier objeto iterable (arreglos, string, sets, ...).
// En este caso, heroe representa cada elemento del arreglo heroes.

// Recorre directamente los valores de un arreglo o cualquier objeto iterable.
for (let heroe of heroes) {
  console.log( heroe );
}

/* ----- Notas ----- */
// Diferencia clave entre for-in y for-of:
// for-in devuelve los índices (o claves en objetos).
// for-of devuelve los valores directamente.