
// Tipo de dato string 
let nombre = 'Peter';
console.log( nombre );

nombre = 'Ben';
console.log( nombre );

nombre = "May";
nombre = `May`;

// Saber el tipo de dato de una variable
console.log( typeof nombre );

nombre = 123;
console.log( typeof nombre );

// Tipo de dato Booleano
let esMarvel = true;
console.log( typeof esMarvel );

// Tipo de dato numerico
let edad = 12;
console.log( typeof edad );

edad = 33.12;
console.log( typeof edad );

let superPoder;
// undefined nos indica que la varible no se ha inicializado con un valor 
console.log( typeof superPoder ); 

let soyNull =  null;
console.log( typeof soyNull ); 

// Los symbol permitien crear identificadores unicos
let symbol1 = Symbol('a');
let symbol2 = Symbol('as');

console.log( typeof symbol1 ); 

console.log( symbol1 === symbol2 ); 
