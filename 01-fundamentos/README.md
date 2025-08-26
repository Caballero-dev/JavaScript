# Fundamentos
Los fundamentos de JavaScript abarcan los conceptos básicos necesarios para comprender y trabajar con este lenguaje de programación.

- [Datos primitivos](#datos-primitivos)
  - [Tipos de datos primitivos](#tipos-de-datos-primitivos)
  - [¿Qué son los primitivos?](#qué-son-los-primitivos)
- [Convenciones de nombres](#convenciones-de-nombres)
  - [Nombre de archivos](#nombre-de-archivos)
  - [Nombre de variables](#nombre-de-variables)
  - [Nombre de clases](#nombre-de-clases)
- [Palabras reservadas](#palabras-reservadas)
- [Arreglos](#arreglos)
- [Objetos literales](#objetos-literales)
- [Funciones](#funciones)
- [Valor, referencia y romper la referencia](#valor-referencia-y-romper-la-referencia)
- [Estructura de control](#estructura-de-control)
  - [Lógica booleana](#lógica-booleana)
  - [Condicionales](#condicionales)
  - [Ciclos](#ciclos)

> Mas información [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Datos primitivos

### Tipos de datos primitivos

JavaScript es un lenguaje débilmente tipado; es decir, no se le indica qué tipo de dato es una variable, JavaScript lo infiere automáticamente.

El tipo de dato de una variable describe el contenido del valor que tiene la variable. Ejemplo

```javascript
// variable | tipo de dato cadena de texto
let canasta = 'Manzana';

// variable | tipo de dato numérico
let edad = 16;
```

#### ¿Qué son los primitivos?
Son valores que no son objetos y son inmutables (no se pueden modificar directamente).

- **Boolean**: true / false
- **Null**: Sin valor en lo absoluto
- **Undefined**: Una variable declarada a la que aún no se le asigna valor
- **Number**: enteros, flotantes, etc.
- **String**: Una cadena de caracteres, ej.: palabras, nombres, etc.
- **Symbol**: Es un valor único que no es igual a ningún otro valor.

> Código ejemplo [primitivos.js](assets/js/bases/primitivos.js)

## Convenciones de nombres

### Nombre de archivos
Para el nombre de los archivos se recomienda colocar un `-` si tiene varias palabras. Ejemplo `palabras-reservadas.js`

### Nombre de variables
Para los nombres de las variables se recomienda utilizar lowerCamelCase; esto se refiere a iniciar la primera palabra en minúscula y, si es una combinación de palabras, la segunda palabra empieza con la primera letra capitalizada. Ejemplo

```javascript
let esMayor;
```

### Nombre de clases
Para los nombres de las clases se recomienda utilizar UpperCamelCase; esto se refiere a iniciar la primera letra de cada palabra en mayúscula. Ejemplo

```javascript
class FiguraGeometrica {
  
}
```

## Palabras reservadas
Son palabras que tienen un uso específico, es decir, solo se deben usar para lo que fueron creadas.
[Validador de palabras reservadas](https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0)

> Código ejemplo [palabras-reservadas.js](assets/js/bases/palabras-reservadas.js)

---

## Arreglos
Son un objeto muy parecido a una lista de información, que contiene un grupo de elementos. Se recomienda que el arreglo contenga los mismos tipos de datos.

> Código ejemplo [arreglos.js](assets/js/bases/arreglos.js)

**Propiedades y métodos básicos que tienen los arreglos**
- **Propiedades** -> son como variables que vienen dentro de los arreglos
- **Métodos** -> son funciones que vienen internamente en los arreglos

> Código ejemplo [arreglos2.js](assets/js/bases/arreglos2.js)

## Objetos literales
Un objeto literal es la forma más directa de crear un objeto escribiendo sus pares clave–valor entre llaves. No requiere clases ni new; sirve para agrupar datos y funciones relacionadas.

> Código ejemplo [objeto-literal.js](assets/js/bases/objeto-literal.js)

## Funciones
Una función en JavaScript es un bloque reutilizable de código que agrupa instrucciones para realizar una tarea.
Puede recibir parámetros (entradas) y opcionalmente devolver un valor. Facilita la organización, reutilización y mantenimiento del código.

> Código ejemplo [funciones.js](assets/js/bases/funciones.js)

> Protip retorno [protip-retorno.js](assets/js/bases/protip-retorno.js)

## Valor, referencia y romper la referencia

En JavaScript, los tipos primitivos se copian por valor, mientras que los objetos y arreglos se manejan por referencia. Esto significa que los cambios en un objeto o arreglo pueden afectar a todas las variables que lo referencian. Sin embargo, es posible romper esta referencia creando copias superficiales o profundas. Este archivo incluye ejemplos prácticos que ilustran cómo funcionan estos conceptos y cómo evitar problemas al trabajar con referencias.

> Código ejemplo [valor-referencia.js](assets/js/bases/valor-referencia.js)

## Estructura de control
Las estructuras de control permiten modificar el flujo de ejecución del programa.

### Lógica booleana
La lógica booleana en programación es un sistema de álgebra que trabaja con dos valores: verdadero (`true`) y falso (`false`). Es fundamental para tomar decisiones dentro del código, ya que permite controlar el flujo de ejecución mediante condiciones.

Se utiliza para evaluar expresiones lógicas mediante operadores como:
- **AND** (`&&`): Devuelve `true` si ambas condiciones son verdaderas.
- **OR** (`||`): Devuelve `true` si al menos una condición es verdadera.
- **NOT** (`!`): Invierte el valor lógico, es decir, convierte `true` en `false` y viceversa.

> Código ejemplo: [logica-booleana.js](assets/js/bases/logica-booleana.js)

### Condicionales
Las condicionales permiten ejecutar bloques de código según condiciones específicas. Las más comunes son:

#### If-Else 
La estructura `if-else` evalúa una condición y ejecuta un bloque de código si esta es verdadera. Si no lo es, ejecuta el bloque del else.

> Código ejemplo [if-else.js](assets/js/bases/if-else.js)

#### Operador ternario
El operador ternario es una forma compacta de escribir una condición. Este operador es útil para simplificar expresiones condicionales en una sola línea.

> Código ejemplo [operador-ternario.js](assets/js/bases/operador-ternario.js)

> Código ejemplo [protip-ternario.js  ](assets/js/bases/protip-ternario.js)

#### Switch
La estructura `switch` evalúa una expresión y ejecuta el bloque de código asociado al caso que coincida. Es útil cuando se tienen múltiples valores específicos que evaluar.

> Código ejemplo [switch.js](assets/js/bases/switch.js)

### Ciclos
Los ciclos permiten ejecutar un bloque de código varias veces, dependiendo de una condición. Son fundamentales para recorrer arreglos, realizar tareas repetitivas y manejar estructuras de datos.

#### while y do while
Los ciclos `while` y `do-while` son estructuras que repiten un bloque de código mientras una condición sea verdadera.

- **`while`:** Evalúa la condición antes de ejecutar el bloque de código. Si la condición es falsa desde el inicio, el bloque no se ejecuta.
- **`do-while`:** Ejecuta el bloque de código al menos una vez, incluso si la condición es falsa desde el principio.

> Código ejemplo: [while-do-while.js](assets/js/ciclos/while-do-while.js)


#### for
El ciclo `for` es una estructura que permite iterar sobre arreglos, objetos y otros elementos iterables. Existen diferentes tipos de `for` en JavaScript:

- **For tradicional:** Permite controlar manualmente la inicialización, la condición y el incremento.
- **For-in:** Recorre las propiedades de un objeto o los índices de un arreglo.
- **For-of:** Recorre directamente los valores de un arreglo o cualquier objeto iterable.

> Código ejemplo: [for.js](assets/js/ciclos/for.js)

## Clases
En esta sección se exploran los conceptos fundamentales de las clases en JavaScript, una característica clave para la programación orientada a objetos (POO). Las clases permiten encapsular datos y comportamientos, facilitando la reutilización, la organización y el mantenimiento del código.

### Problematica de prototipos
En versiones anteriores a ES6, los objetos en JavaScript se creaban utilizando **objetos literales** o **funciones constructoras**. Sin embargo, estas formas presentaban problemas como:
- **Redundancia:** Cada objeto debía definir sus propios métodos, lo que generaba duplicación de código.
- **Falta de consistencia:** No había una estructura clara para garantizar que todos los objetos compartieran las mismas propiedades y métodos.

> Código ejemplo: [problema.js](assets/js/classes/problema.js)

### Clases
Con ES6, se introdujo la palabra clave `class`, que simplifica la creación de objetos y resuelve los problemas de las funciones constructoras. Las clases permiten:
- Definir propiedades y métodos comunes para todas las instancias.
- Utilizar un constructor para inicializar las propiedades de los objetos.
- Implementar **setters** y **getters** para controlar el acceso a las propiedades.


#### Sets y Gets
Los **setters** (`set`) y **getters** (`get`) son métodos especiales que permiten asignar y obtener valores de las propiedades de una clase de manera controlada. Esto es útil para:
- Validar o transformar los datos antes de asignarlos.
- Proteger las propiedades internas de la clase.

#### Métodos estáticos
Los **métodos estáticos** (`static`) pertenecen a la clase y no a las instancias. Esto significa que:
- Se acceden directamente desde la clase, no desde los objetos creados.
- Son útiles para definir funciones utilitarias o relacionadas con la clase en general.

#### Gets estáticos
Los **getters estáticos** (`static get`) permiten acceder a propiedades estáticas de la clase de manera controlada. Son útiles para obtener información relacionada con la clase, como contadores o configuraciones globales.

> **Código relacionado:** [class.js](assets/js/classes/class.js)

### Extends - Clases con SubClases
La **herencia** permite que una clase (subclase) extienda otra clase (clase padre) utilizando la palabra clave `extends`. Esto permite:
- Reutilizar las propiedades y métodos de la clase padre.
- Sobrescribir métodos para personalizar el comportamiento en la subclase.
- Utilizar `super` para llamar al constructor o métodos de la clase padre.

> **Código relacionado:** [sub-clases.js](assets/js/classes/sub-clases.js)

### Propiedades privadas
Las **propiedades privadas** se introdujeron para proteger los datos internos de una clase. Estas propiedades:
- Se definen utilizando el prefijo `#`.
- Solo son accesibles desde dentro de la clase.
- Ayudan a encapsular la lógica interna y proteger la integridad de los datos.

Mas información sobre propiedades privadas [aqui](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_elements)

> **Código relacionado:** [propiedades-privadas.js](assets/js/classes/propiedades-privadas.js)

