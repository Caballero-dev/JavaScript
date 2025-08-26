// **Singleton**
// Un Singleton es un patrón de diseño que asegura que una clase tenga una única instancia
// y proporciona un punto global de acceso a esa instancia.
// Es útil para manejar recursos compartidos, como configuraciones globales o conexiones a bases de datos.

class Singleton {

  // **Propiedad estática privada**
  // `#instancia` es una propiedad estática privada que almacenará la única instancia de la clase.
  // Al ser privada (con el prefijo `#`), no puede ser accedida ni modificada desde fuera de la clase.
  static #instancia; // undefined

  // **Propiedad pública**
  // `nombre` es una propiedad pública que se asignará al crear la instancia.
  nombre = '';

  // **Constructor**
  // El constructor se ejecuta al crear una nueva instancia de la clase.
  // Si ya existe una instancia (almacenada en `#instancia`), el constructor devuelve esa instancia,
  // asegurando que siempre se use la misma.
  constructor(nombre = '') {
    
    if (!!Singleton.#instancia) {
      // Si ya existe, retorna la instancia existente y no crea una nueva.
      return Singleton.#instancia;
    }
    
    // Si no existe, asigna la nueva instancia a la propiedad estática `#instancia`.
    Singleton.#instancia = this;

    // Asigna el valor del parámetro `nombre` a la propiedad pública `nombre`.
    this.nombre = nombre;
  }

}

// **Ejemplo de uso del patrón Singleton**
// La idea del Singleton es que, si ya existe una instancia inicializada,
// cualquier intento de crear una nueva instancia devolverá la misma instancia existente.

// Se crea la primera instancia con el nombre "Iroman".
const instancia1 = new Singleton('Iroman');

// Se intenta crear una segunda instancia con el nombre "Peter".
// Sin embargo, como ya existe una instancia, se devuelve la misma instancia creada anteriormente.
const instancia2 = new Singleton('Peter');

// Se intenta crear una tercera instancia con el nombre "Steve".
// Nuevamente, se devuelve la misma instancia inicial.
const instancia3 = new Singleton('Steve');

// Todas las variables (`instancia1`, `instancia2`, `instancia3`) apuntan a la misma instancia.
// Por lo tanto, el nombre de la instancia será el que se asignó al crear la primera instancia ("Iroman").
console.log( `Nombre de la instancia1 es: ${instancia1.nombre}` );
console.log( `Nombre de la instancia2 es: ${instancia2.nombre}` );
console.log( `Nombre de la instancia3 es: ${instancia3.nombre}` );
