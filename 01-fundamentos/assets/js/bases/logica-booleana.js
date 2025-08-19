// Función que imprime un mensaje y retorna true
const regresaTrue = () => {
  console.log( 'Regresa true' );
  return true;
}

// Función que imprime un mensaje y retorna false
const regresaFalse = () => {
  console.log( 'Regresa false' );
  return false;
}

// Logica booleana es una manera de trabajar con valores booleanos

/* -- NOT (!): transforma el valor booleano en su opuesto --*/
console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

// Uso de la negación con una función que retorna false
console.log( !regresaFalse() ); // true

/* -- AND (&&): true si todos los valores son verdaderos -- */
console.warn('And') 
console.log( true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true

// Ejemplo con funciones: el operador && evalúa de izquierda a derecha
console.log( '==========' );
console.log( regresaFalse() && regresaTrue() ); // false: regresaFalse() retorna false, no evalúa regresaTrue()
console.log( regresaTrue() && regresaFalse() ); // false: regresaTrue() retorna true, pero regresaFalse() retorna false

// Solo ejecuta regresaFalse(), no evalúa regresaTrue() porque el primero es false
regresaFalse() && regresaTrue(); 

// Ejemplo con múltiples condiciones: si una es false, el resultado es false
console.log('4 condiciones', true && true && true && false ); // false

/* -- OR (||): true si al menos uno de los valores es verdadero. -- */
console.warn('OR') 
console.log( true || false ); // true
console.log( false || false ); // false

// Ejemplo con funciones: el operador || evalúa de izquierda a derecha
console.log( '==========' );
console.log( regresaTrue() || regresaFalse() ); // true: regresaTrue() retorna true, no evalúa regresaFalse()
console.log( regresaFalse() || regresaTrue() ); // true: regresaFalse() retorna false, pero regresaTrue() retorna true

// Ejemplo con múltiples condiciones usando OR
console.log('4 condiciones', true || true || true || false ); // true

/* -- Asignaciones -- */
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// AND devuelve el último valor verdadero si todos son verdaderos, o el primer falso encontrado
const a1 = true && 'Hola mundo' && 15;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;

// OR devuelve el primer valor verdadero encontrado, o el último valor si todos son falsos
const a3 = soyFalso || 'Ya no soy falseo';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });

// En las condicionales no se recomienda tener muchas condiciones a evaluar,
// ya que puede dificultar la lectura y el mantenimiento del código
if ( regresaFalse() && regresaTrue() && (true || fasle || true) ) {
  console.log( 'Hacer algo' );
} else {
  console.log( 'Hacer otra cosa' );
}