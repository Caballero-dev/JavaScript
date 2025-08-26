
// **Propiedades privadas**
// Las propiedades privadas permiten que ciertos atributos o métodos de una clase
// no sean accesibles ni modificables desde fuera de la clase.
// Esto ayuda a proteger la integridad de los datos y a encapsular la lógica interna de la clase.

/*
Las propiedades privadas se definen utilizando el prefijo `#` antes del nombre de la propiedad o método.
Esto asegura que solo puedan ser accedidas desde dentro de la clase donde se declaran.
Intentar acceder o modificar estas propiedades desde fuera de la clase generará un error.
*/

class Rectangulo {
  // **Propiedad privada**
  // Esto significa que no se puede acceder ni modificar directamente desde fuera de la clase.
  #area =  0;
  
  // **Constructor**
  // El constructor se ejecuta automáticamente al crear una nueva instancia de la clase.
  // Recibe los valores de `base` y `altura` como parámetros y los asigna a las propiedades públicas.
  constructor(base = 0, altura = 0) {
    this.base = base
    this.altura = altura;

    // Calcula el área llamando al método privado `#calcularArea`.
    // Esto asegura que el área se calcule automáticamente al crear una instancia.
    this.#calcularArea()
    // this.#area = base *  altura;
  }

  // **Método privado**
  // Solo puede ser llamado desde dentro de la clase.
  #calcularArea() {
    return this.#area = this.base *  this.altura;
  }

}

const rectangulo =  new Rectangulo(10, 15);

// No se puede acceder directamente a la propiedad privada `#area`.
// rectangulo.#area = 100;

// No se puede llamar al método privado `#calcularArea` desde fuera de la clase.
// console.log(rectangulo.calcularArea());

console.log( rectangulo.altura );

console.log( rectangulo );