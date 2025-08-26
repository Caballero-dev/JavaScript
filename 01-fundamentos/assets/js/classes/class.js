
// Para el nombre de las clases se recomienda el uso de UpperCamelCase (Primera letra en mayúscula).
// Esto es una convención que indica que se trata de una clase.

// El objetivo de las clases es poder tener propiedades y métodos que sean comunes
// en todas las instancias de un objeto, facilitando la reutilización y el mantenimiento del código.

// Las clases en JavaScript, por defecto, ya tienen activada la propiedad 'use strict'.

class Persona {
  // Las propiedades y métodos estaticos se acostumbra que esten abajo de la definición de la clase
 
  // **Propiedades estáticas**
  // Las propiedades estáticas pertenecen a la clase y no a las instancias.
  // Esto significa que puedes acceder a ellas directamente desde la clase, sin necesidad de crear una instancia.
  static _conteo = 0; // Propiedad estática que lleva un conteo de las instancias creadas.

  // **Método estático para acceder a la propiedad estática**
  // Los métodos estáticos también pertenecen a la clase y no a las instancias.
  // Este método retorna el valor de la propiedad estática `_conteo`.
  static get getConteo() {
    return Persona._conteo + ' instancia';
  }

  // **Método estático adicional**
  // Este método estático imprime un mensaje en la consola.
  // Nota: Los métodos estáticos no pueden acceder a las propiedades de las instancias (como `this.nombre`),
  // ya que no están asociados a ninguna instancia.
  static mensaje() {
    console.log(this.nombre); // undefined, porque `this` hace referencia a la clase, no a una instancia.
    console.log('Soy un método estático');
  }

  // **Propiedades de la clase**
  // Las propiedades de la clase se pueden inicializar directamente.
  // Estas propiedades estarán disponibles en cada instancia de la clase.

  // Declarar las propiedades aquí es opcional, pero si se quiere usar una propiedad adicional
  // que no esté en el constructor, esta debe inicializarse aquí.
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';


  // **Constructor**
  // El constructor es un método especial que se ejecuta automáticamente
  // en el momento en que se crea una nueva instancia de la clase.
  // Cuando se termina de ejecutar el constructor, regresa una nueva instancia de la clase.
  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    // Para asignar valores a las propiedades de la instancia, se utiliza la palabra reservada "this".
    // "this" hace referencia a la instancia actual de la clase.
    
    // Si no se especifican valores al crear la instancia, se asignan los valores por defecto.
    this.nombre = nombre;
    this.codigo =  codigo;
    this.frase = frase;

    // Incrementa el conteo de instancias cada vez que se crea una nueva.
    Persona._conteo++;

    // Nota: Si se desea validar que ciertos parámetros sean obligatorios,
    // se puede lanzar un error si no se proporcionan. Ya que js no decta por defecto los parametros requeridos
    // Ejemplo:
    // if (!nombre) throw Error('El nombre es obligatorio'); 
  }

  // **Setters y Getters**
  // Los setters y getters son métodos especiales que permiten asignar y obtener valores de las propiedades
  // de una clase de manera controlada.
  // Nota: Por conveción El setter y getter no puede tener el mismo nombre que la propiedad.
  
  // **Setter**
  // El setter permite asignar un valor a una propiedad.
  // solo recibe un argumento
  set setComida(comida) {
    this.comida = comida.toUpperCase(); // Convierte el valor a mayúsculas antes de asignarlo.
  }

  // **Getter**
  // El getter permite recuperar el valor de una propiedad.
  get getComida() {
    return this.comida;
  }

  // **Métodos**
  // Los métodos son funciones asociadas a una clase que definen el comportamiento de sus instancias.
  // Pueden acceder y manipular las propiedades de la instancia usando "this".

  // Método para imprimir información básica de la persona.
  quienSoy() {
    console.log( `Soy ${this.nombre} y mi identidad es ${this.codigo}` ); 
  }

  // Método para imprimir la frase de la persona.
  miFrase() {
    // this.quienSoy();
    console.log( `${this.codigo} dice: ${this.frase}` );
  }

}

// **Ventajas de usar clases**
// 1. Sintaxis más limpia y legible en comparación con las funciones constructoras.
// 2. Permite definir métodos directamente dentro de la clase, evitando redundancia.
// 3. Facilita la herencia y el uso de propiedades/métodos estáticos o privados.

// **Creación de instancias de la clase Persona**
// Cada instancia es un objeto único con sus propias propiedades y métodos.
const steve = new Persona();
const tony = new Persona('Tony', 'Iroman', 'Yo soy Iroman');
const peter = new Persona('Peter', 'Spider', 'Soy tu amigable vecino');

// **Uso de las instancias**
console.log( tony );
console.log( peter );
console.log( steve );

tony.quienSoy();
peter.quienSoy();

peter.miFrase();

// **Uso de los setters y getters**
// Asignar un valor a la propiedad "comida" usando el setter.
peter.setComida = 'Pastel';

// Recuperar el valor de la propiedad "comida" usando el getter.
console.log(peter.getComida); // Muestra "PASTEL" (en mayúsculas).

// **Nota sobre propiedades privadas**
// En este ejemplo, las propiedades no están protegidas, por lo que se pueden agregar nuevas propiedades
// directamente desde fuera de la clase, lo cual puede ser problemático si no se controla.
// Ejemplo:
// peter.nemesis = 'Duende verde'; // Esto agrega una nueva propiedad al objeto "peter".

console.log( peter );


// **Uso de propiedades y métodos estáticos**
// Acceso a la propiedad estática directamente desde la clase.
console.log('Conteo estático:', Persona.getConteo);

// Acceso al método estático directamente desde la clase.
Persona.mensaje();

// No se puede acceder a propiedades o métodos estáticos desde una instancia.
console.log(tony._conteo); // undefined

