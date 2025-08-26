// **Sobrecarga de constructores**
// En JavaScript, las clases no soportan sobrecarga de constructores de forma nativa como en otros lenguajes (por ejemplo, Java o C#).
// Sin embargo, se puede simular la sobrecarga utilizando métodos estáticos o lógica condicional dentro del constructor.
// En este ejemplo, se utiliza un método estático para crear instancias de la clase a partir de un objeto.

class Persona {

  // **Método estático: porObjeto**
  // Este método estático permite crear una instancia de la clase `Persona` a partir de un objeto.
  // Utiliza la técnica de **desestructuración** para extraer las propiedades `nombre`, `apellido` y `pais` del objeto recibido como argumento.
  static porObjeto({ nombre, apellido, pais }) {
    // Retorna una nueva instancia de la clase `Persona` utilizando las propiedades del objeto.
    return new Persona( nombre, apellido, pais );
  }

  // **Constructor**
  // El constructor inicializa las propiedades `nombre`, `apellido` y `pais` de la instancia.
  // Recibe estos valores como argumentos al momento de crear una nueva instancia.
  constructor( nombre, apellido, pais ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log( `info: ${this.nombre}, ${this.apellido}, ${this.pais}` );
  }

}

// Se crean instancias de la clase `Persona` utilizando diferentes formas de inicialización.

const nombre1 = 'Melissa', 
      apellido1 = 'Flores',
      pais1 = 'Honduras'; 

const fernando = {
  nombre: 'Fernando',
  apellido: 'Herrera',
  pais: 'Costa Rica'
}

// Se crea una instancia pasando los valores directamente al constructor.
const persona1 = new Persona(nombre1, apellido1, pais1);

// Se crea una instancia utilizando el método estático `porObjeto`.
// Este método extrae las propiedades del objeto y las pasa al constructor.
const persona2 = Persona.porObjeto(fernando)

persona1.getInfo();
persona2.getInfo();

// Este enfoque simula la sobrecarga de constructores, ya que permite inicializar una instancia
// de diferentes maneras (directamente con el constructor o a partir de un objeto).