
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

// .pop() elimina el ultimo elemento del arregl
// y regresa este mismo
let juegoBorrado = juegos.pop()
console.log({ juegoBorrado, juegos });


// Eliminar un elemento de acuerdo a su posición
let pos = 1;

console.log(juegos); // arreglo original

// .splice(posicion, cantidad) -> permite modificar el contenido del arreglo. Puede usarse para eliminar, agregar o reemplazar elementos.
// posicion: el índice donde quieres empezar a modificar.
// cantidad: cuántos elementos quieres eliminar desde esa posición.
// y regresa el elemento eliminado
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });


// .indexOf() -> Obtener la posición de un elemento del arreglo
// regresa el índice si el elemto existe, en caso no existir regresa -1
let robloxIndex = juegos.indexOf('Roblox');
console.log({ robloxIndex });

let marioIndex = juegos.indexOf('Mario');
console.log({ marioIndex });
