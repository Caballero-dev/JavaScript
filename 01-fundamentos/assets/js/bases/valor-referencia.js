
/*
Los tipos primitivos se copian por valor: b = a crea una copia independiente.
Cambiar a no afecta a b porque están en ubicaciones de memoria distintas.
En este ejemplo: a termina en 30 y b permanece en 10.
*/

let a = 10;
let b = a;

a = 30;

console.log({ a, b });

/*
En JavaScript, los objetos se pasan por referencia:
asignar `ana = juan` hace que ambas variables apunten al mismo objeto.
Por eso, cambiar `ana.nombre` también cambia `juan.nombre`.
*/
let juan = { nombre: 'Juan' };
// let ana = juan;

// para crear una copia de un objeto se recomienda de la siguiente forma, 
// solo copiar ya que si colocamos el nombre se agrega como otra propiedad del objeto
// let ana = { juan };

// Spread (...) crea una copia superficial del objeto.
// Evita compartir la misma referencia: puedes cambiar 'ana' sin afectar a 'juan'.
// Nota: las propiedades anidadas siguen compartiendo referencia.
let ana = { ...juan };
ana.nombre = 'Ana'

console.log({ juan, ana });

// El operador rest(...) se llama asi en argumentos de una función, esto lo 
// que hace es unir todos los argumentos en una sola varible y los transfora en un arreglo.
const cambbiaNombre = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambbiaNombre(peter);

console.log({ peter, tony });

/*------- Arreglos -------*/
const frutas = ['Manzada', 'Pera', 'Piña'];

// ❌ Al asignar directamente, no se copia el arreglo; se copia la referencia.
// Esto significa que 'frutas' y 'otrasFrutas' apuntan al MISMO arreglo en memoria.
// Cualquier cambio en uno (push, pop, reasignar un índice, etc.) afectará al otro.
const otrasFrutas = frutas;

// ✅ Usando el método .slice(), también se crea una copia superficial del arreglo.
// Al igual que con el operador spread, 'otrasFrutas' será un nuevo arreglo independiente.
console.time('slice')
const otrasFrutasSlice = frutas.slice();
console.timeEnd('slice')

// ✅ Usando el operador spread (...), se crea una copia superficial del arreglo.
// Esto significa que 'otrasFrutas' es un nuevo arreglo independiente.
// Cambios en 'otrasFrutas' no afectarán a 'frutas'.
console.time('spread')
const otrasFrutasSpread = [...frutas];
console.timeEnd('spread')

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
console.table({ frutas, otrasFrutasSpread });
console.table({ frutas, otrasFrutasSlice });