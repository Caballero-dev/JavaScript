// función que retorna un objeto literal
/*
function crearPersona( nombre, apellido ) {
  // si el nombre de la propiedad es el mismo que el de la variable se puede simplificar
  return {
    // nombre: nombre,
    nombre,
    apellido
  }
}
*/

const crearPersona =  (nombre, apellido) => ({nombre, apellido});
 
const persona = crearPersona( 'Eduardo', 'Caballero' );
console.log( persona );

function imprimirArgumentos() {
  console.log( arguments );
}

// Una función de flecha no tiene el objeto de arguments
/*
El operador ... en los parámetros de una función se llama operador rest. 
Sirve para capturar todos los argumentos adicionales que no tienen un parámetro explícito 
asignado y los agrupa en un arreglo. Es útil para manejar funciones con un número variable 
de argumentos o para trabajar con desestructuración.
*/
// ( ...args, edad ) -> // ❌ No válido
// ( edad, ...args) -> // ✅ Válido
const imprimirArgumentos2 = ( edad, ...args ) => {
  // console.log({ edad, args });
  return args;
}

imprimirArgumentos(10, 20, true, 'Eduardo');

// const argumentos = imprimirArgumentos2(10, false, true, 'Eduardo');
// console.log({ argumentos });
// let casado = argumentos[0];
// let vivo = argumentos[1];
// console.log({ vivo, casado });

// forma mas rapida de crear varibables de los diferentes valores que regresa
const [ casado, vivo, nombre, saludo] = imprimirArgumentos2(10, false, true, 'Eduardo', 'Hola');
console.log({ casado, vivo, nombre, saludo });

// obtener solo el apellido del objeto literal de persona
const { apellido } = crearPersona( 'Juan', 'Perez' );
console.log({ apellido });

// obtener solo el apellido del objeto literal de persona y renombrar variable
const { apellido: nuevoApellido } = crearPersona( 'Juan', 'Hernandez' );
console.log({ nuevoApellido });

/*-------------- Desestructuración de argumentos --------------*/
const tony = {
  // clave - valor
  nombre: 'Tony',
  codeName: 'Iroman',
  vivo: false,
  edad: 40,
  trajes: ['Mak I', 'Mark V', 'Mark 50'],
}

// Ejemplo manual
// const imprimePropiedades = (personaje) => {
//   console.log( 'nombre', personaje.nombre );
//   console.log( 'codeName', personaje.codeName );
//   console.log( 'vivo', personaje.vivo );
//   console.log( 'edad', personaje.edad );
//   console.log( 'trajes', personaje.trajes );
// }

// Ejemplo con desestructuración 
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  // edad = edad || 0; // Si el valor de edad no esta que asigne 0
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
  
}

imprimePropiedades(tony)
