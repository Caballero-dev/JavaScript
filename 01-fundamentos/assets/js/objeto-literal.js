// Declaración de un objeto literal
// let personaje = {
const personaje= {
  // clave - valor
  nombre: 'Tony',
  codeName: 'Iroman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: 118.70
  },
  trajes: ['Mak I', 'Mark V', 'Mark 50'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'California'
  },
  'ultima-pelicula': 'Endgame'
}

console.log( personaje );

// Acceder a la propiedad de un objeto literal
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre']);
console.log('edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Coors', personaje.coords.lat);

console.log('No. de trajes', personaje.trajes.length)
console.log('último traje', personaje.trajes[ personaje.trajes.length - 1 ])

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('última pelicula', personaje['ultima-pelicula']);

// eliminar una propiedad del objeto
delete personaje.edad;
console.log( personaje );

// Crear una nueva propiedad en el objeto
personaje.casado = true;

// Trabajor un objeto como un arreglo
const entriesPares = Object.entries( personaje );
console.log( entriesPares );


// No mutar el objeto

// const -> no permite cambiar la aignación de la varible, 
// pero permite cambiar los valores de la propiedad del objeto.
// personaje = true;

// Bloquear las propiedades o modificaciones del objeto literal
Object.freeze( personaje );

personaje.dinero = 100000;
personaje.casado = false;

// bloquea las asignaciones a cada una de las propiedades directas, pero no a los subobjetos
personaje.direccion.ubicacion = 'Brasil';
console.log( personaje );

// Listado de todas las propiedades que tiene un objeto
const propiedades = Object.getOwnPropertyNames( personaje );
// Listado de todos los valores que tiene un objeto
const valores = Object.values( personaje );

console.log({ propiedades });
console.log({ valores });


/*
Propiedades y metodos que tiene un objeto
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
*/