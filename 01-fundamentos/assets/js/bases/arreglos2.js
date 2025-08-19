
let juegos = ['Mario', 'Zelda', 'Metroid', 'Roblox']

// .length indica el largo de los elemtnos del arreglo
console.log( 'Largo:', juegos.length );

let primero = juegos[0];

// Obtiene el ultimo elemnto de un arreglo de forma dinamica
// juegos.length -> se obtiene el total de elemntos del arreglo
// - 1 -> se resta 1 para obtener el indice del ultimo elemtno
let ultimo = juegos[ juegos.length - 1 ]

console.log( { primero, ultimo } );

// .forEach() permite ejecutar una instrucción 
// por cada uno de los elementos que estan en el arreglo
juegos.forEach( (elemento, indice, arr) => {
  console.log( { elemento, indice, arr } );
});

// .push() Añadir uno o varios elementos al final del arreglo 
// y regresa la nueva longitud del arreglo.
let nuevaLongitud = juegos.push( 'F-zero' );
console.log({ nuevaLongitud, juegos });

// .unshift() Añadir un nuevo elemento al principio del arreglo
// y regresa la nueva longitud del arreglo.
nuevaLongitud = juegos.unshift('GTA')
console.log({ nuevaLongitud, juegos });

// .pop() elimina el ultimo elemento del arreglo
// y regresa este mismo
let juegoBorrado = juegos.pop()
console.log({ juegoBorrado, juegos });

// .shift() eliina el primer elemento del arreglo
// y regresa este mismo
let juegoBorrado2 = juegos.shift();
console.log({ juegoBorrado2, juegos });

// Eliminar un elemento de acuerdo a su posición
let pos = 1;

console.log(juegos); // arreglo original

// .splice(posicion, cantidad, item1, item2, itemN) -> permite modificar el contenido del arreglo. 
// Puede usarse para eliminar, agregar o reemplazar elementos.
// posicion: el índice donde quieres empezar a modificar.
// cantidad: cuántos elementos quieres eliminar desde esa posición.
// y regresa el elemento eliminado
let juegosBorrados = juegos.splice(pos, 2, 'Busca Minas');
console.log({ juegosBorrados, juegos });

let juegosBorrado2 = juegos.splice(pos, 0, 'Fifa', 'Test');
console.log({ juegosBorrado2, juegos });

// .slice() Retorna una copia de una parte del arreglo sin modificar el original. 
// Recibe dos índices: inicio (incluido) y fin (excluido). 
// Si no se indican inicio y fin, devuelve una copia completa del arreglo original.
const juegos2 = juegos.slice(1, 4);  // Copia desde el índice 1 hasta el 4
console.log({ juegos, juegos2 });

// .includes() verifica si un elemento esta dentro del arreglo y regresa verdadero o falso
let estaRoblox = juegos.includes('Roblox');
console.log({estaRoblox});

let estaZelda =  juegos.includes('Zelda');
console.log({ estaZelda });

// .indexOf() -> Obtener la posición de un elemento del arreglo
// regresa el índice si el elemto existe, en caso no existir regresa -1
let robloxIndex = juegos.indexOf('Roblox');
console.log({ robloxIndex });

let zeldaIndex = juegos.indexOf('Zelda');
console.log({ zeldaIndex });

console.log( '===============' );
const numeros =  [9, 1, 2, 3, 4, 5, 1, 6];
console.log( numeros );

// .indexOf() -> Obtener la posición de la primera aparición de un elemento del arreglo
// regresa el índice si el elemto existe, en caso no existir regresa -1
let numeroTresIndex = numeros.indexOf(3);
console.log({ numeroTresIndex });

let numeroUnoIndex = numeros.indexOf(1);
console.log({ numeroUnoIndex });

// .lastIndexOf() -> Obtener la posición de la ultima aparición de un elemento del arreglo
// regresa el índice si el elemto existe, en caso no existir regresa -1
let numeroUnoIndex2 = numeros.lastIndexOf(1);
console.log({ numeroUnoIndex2 });

console.log( '=============' );
// El método .map() crea un nuevo arreglo aplicando una función a cada 
// elemento del arreglo original. No modifica el arreglo original, sino que 
// devuelve uno nuevo con los resultados de la transformación.
const numeros2 = numeros.map((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
  return elemento + 2; // Suma 2 a cada elemento del arreglo
})

console.log({numeros, numeros2});

console.log( '=============' );
// El método .filter() crea un nuevo arreglo con todos los elementos del 
// arreglo original que cumplan con una condición especificada. No modifica el 
// arreglo original, sino que devuelve uno nuevo con los elementos que pasaron el filtro.
const numeros3 =  numeros.filter( (elemento, indice, arr) => {
  console.log({elemento, indice, arr});
  return elemento > 3; // Filtra los elementos mayores a 3
})

console.log({ numeros, numeros3 });

console.log( '=============' );
// El método .some() verifica si al menos un elemento del arreglo cumple con la condición especificada en el callback.
// Retorna true si encuentra al menos un elemento que cumpla la condición, de lo contrario retorna false.
let tieneNumeroMayorCinco = numeros.some((elemento, indice, arr) => {
  console.log({elemento, indice, arr});
  return elemento > 5;
})

console.log({ tieneNumeroMayorCinco });

console.log( '=============' );
// El método .every() verifica si todos los elementos del arreglo cumplen con la condición especificada en el callback.
// Retorna true si todos los elementos cumplen la condición, de lo contrario retorna false.
let numerosMayoresCuatro = numeros.every((elemento, indice, arr) => {
  console.log({ elemento, indice, arr});
  return elemento > 4;
})

console.log({ numerosMayoresCuatro });

console.log( '===============' );
const palabras = ['Hola', 'Mundo', 'Join'];

// El método .join() une todos los elementos de un arreglo en una sola cadena de texto,
// separándolos con el delimitador especificado como argumento. Si no se proporciona
// un delimitador, se utiliza una coma (",") por defecto.
let frase =  palabras.join(' ');
console.log({ frase });

