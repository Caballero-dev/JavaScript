/*
Herencia/extend

La herencia en JavaScript se logra utilizando la palabra clave `extends`.
Permite que una clase (subclase) herede las propiedades y métodos de otra clase (clase padre).
Esto ayuda a reducir la cantidad de código duplicado y facilita la reutilización y el mantenimiento del código.
*/

class Persona {
  // **Propiedades estáticas**
  // Propiedad estática que pertenece a la clase y no a las instancias.
  static _conteo = 0;

  // Método estático para obtener el valor de la propiedad estática `_conteo`.
  static get getConteo() {
    return Persona._conteo + ' instancia';
  }

  // Método estático adicional.
  // Nota: Los métodos estáticos no pueden acceder a las propiedades de las instancias.
  static mensaje() {
    // console.log(this.nombre); // undefined, porque `this` hace referencia a la clase, no a una instancia.
    console.log('Soy un método estático');
  }

  // **Propiedades de la clase**
  // Estas propiedades estarán disponibles en cada instancia de la clase.
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  // **Constructor**
  // El constructor se ejecuta automáticamente al crear una nueva instancia de la clase.
  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    // Incrementa el conteo de instancias cada vez que se crea una nueva.
    Persona._conteo++;
  }

  // **Setters y Getters**
  // Permiten asignar y obtener valores de las propiedades de manera controlada.

  // Setter para la propiedad "comida".
  set setComida(comida) {
    this.comida = comida.toUpperCase(); // Convierte el valor a mayúsculas antes de asignarlo.
  }

  // Getter para la propiedad "comida".
  get getComida() {
    return this.comida;
  }

  // **Métodos**
  // Método para imprimir información básica de la persona.
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  // Método para imprimir la frase de la persona.
  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

// **Clase Heroe**
// La clase `Heroe` extiende de la clase `Persona`, lo que significa que hereda todas las propiedades y métodos de `Persona`.
class Heroe extends Persona {

  // Propiedad adicional específica de la subclase.
  clan = 'Sin clan';

  // **Constructor**
  // El constructor de la subclase debe llamar al constructor de la clase padre utilizando `super`.
  // Esto asegura que las propiedades de la clase padre se inicialicen correctamente.
  constructor(nombre, codigo, frase) {
    // `super` hace referencia al constructor de la clase padre.
    // Se debe llamar a `super` antes de usar `this` en el constructor de la subclase.
    super(nombre, codigo, frase);
    // Propiedad específica de la subclase.
    this.clan = 'Los Vengadores';
  }

  // **Sobrescritura de métodos**
  // La subclase puede sobrescribir métodos de la clase padre para personalizar su comportamiento.
  quienSoy() {
    // Imprime información específica de la subclase.
    console.log(`Soy ${this.nombre}, ${this.clan}`);

    // Llama al método `quienSoy` de la clase padre utilizando `super`.
    // Esto permite mantener la funcionalidad original del método de la clase padre.
    super.quienSoy();
  }

}

// **Creación de una instancia de la subclase Heroe**
// Al crear una instancia de `Heroe`, se inicializan las propiedades de la clase padre y las de la subclase.
const peter = new Heroe('Peter', 'Spider', 'Soy tu amigable vecino');
const Iroman = new Heroe('Tony', 'Iroman', 'Yo soy Iroman');

console.log( peter );

// Llama al método sobrescrito `quienSoy` de la subclase.
peter.quienSoy();

console.log( Persona.getConteo );
