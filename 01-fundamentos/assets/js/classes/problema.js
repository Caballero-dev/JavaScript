
// El problema con esta forma de implementación (objetos literales)
// es que no hay una obligación de que todos los objetos tengan las mismas propiedades o métodos.
// Si se necesita agregar un método, este debe repetirse en cada objeto, lo que genera redundancia y dificulta el mantenimiento.

// Cuando se quiere hacer una referencia dentro del mismo objeto, se utiliza la palabra reservada "this".

// Ejemplo de objetos literales:
const juan = {
  nombre: 'Juan',
  edad: 12,
  imprimir() {
    console.log( `Nombre: ${this.nombre} - ${this.edad}` );
  }
}


const jose = {
  nombre: 'Jose',
  edad: 16,
  imprimir() {
    console.log( `Nombre: ${this.nombre} - ${this.edad}` );
  }
}

const pedro = {
  nombre: 'Pedro',
  edad: 19,
  imprimir() {
    console.log( `Nombre: ${this.nombre} - ${this.edad}` );
  }
}

// Problema: Si queremos agregar un nuevo método o cambiar la lógica de "imprimir",
// tendríamos que modificar cada objeto manualmente, lo que no es eficiente.
// juan.imprimir()

// En versiones anteriores a ES6, se implementó una alternativa para crear objetos
// que compartieran las mismas propiedades, métodos, herencias y permitieran crear nuevas instancias.

// JavaScript introdujo el uso de funciones constructoras para abordar este problema.

// El uso de UpperCamelCase (nombres con mayúscula inicial) es una convención
// que indica que la función sirve para crear instancias, aunque no es obligatorio hacerlo.
function Persona(nombre, edad) {
  console.log('Se ejecutó esta línea');

  // Para asignar propiedades al objeto que se está creando, se utiliza "this".
  this.nombre = nombre;
  this.edad = edad;

  // Método que se asigna a cada instancia creada con esta función.
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - ${this.edad}`);
  };
}

// Para transformar la función en un generador de instancias, se utiliza la palabra reservada "new".
const maria = new Persona('Maria', 19);
const daniel = new Persona('Daniel', 30);
// console.log( maria );

// Ahora, las instancias creadas con "new Persona" tienen las mismas propiedades y métodos.
maria.imprimir(); // Nombre: Maria - 19
daniel.imprimir(); // Nombre: Daniel - 30

/* 
Nota: Esta era la forma estándar para crear algo parecido a una clase en programación orientada a objetos (POO).
Sin embargo, tiene varios inconvenientes:

1. Si no se utiliza la palabra reservada "new", el código no funcionará correctamente.
   Esto puede causar errores si no se documenta adecuadamente.
   Ejemplo: Persona('Maria', 19); // Esto no creará una instancia correctamente.

2. Esta forma ya no es recomendable en la actualidad, a menos que se necesite compatibilidad
   con navegadores muy antiguos. En ES6 y versiones posteriores, se introdujo la palabra clave "class",
   que simplifica la creación de clases y resuelve muchos de estos problemas.

3. Si queremos agregar propiedades estáticas o privadas, esta forma se complica aún más.
   Por ejemplo, no hay una forma sencilla de agregar métodos que no se repliquen en cada instancia.
*/