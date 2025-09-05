# Advanced
Se exploran conceptos avanzados de JavaScript que son fundamentales para el desarrollo de aplicaciones modernas.


## Variables de entorno
Las variables de entorno permiten configurar valores globales que afectan el comportamiento de la aplicación. Son útiles para almacenar configuraciones sensibles como claves de API, URLs de bases de datos y más.

> Código relacionado: [01-environments.js](src/concepts/01-environments.js)

## Callbacks
Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que una operación se completa. Este enfoque puede llevar al "callback hell" si no se maneja correctamente.

> Código relacionado: [02-callbacks.js](src/concepts/02-callbacks.js)

## Promises
Las promesas son una forma moderna de manejar operaciones asíncronas, proporcionando una alternativa más limpia a los callbacks. Incluyen métodos como `.then`, `.catch` y `.finally` para manejar resultados y errores.

> Código relacionado: [03-promises.js](src/concepts/03-promises.js)

### Promises Race
Permite ejecutar múltiples promesas en paralelo y devuelve el resultado de la primera que se resuelve o rechaza.

> Código relacionado: [04-promise-race.js](src/concepts/04-promise-race.js)


## Async
Las funciones `async` simplifican el manejo de promesas al permitir escribir código asíncrono que parece síncrono. Se combinan con `await` para esperar la resolución de promesas.

> Código relacionado: [05-async.js](src/concepts/05-async.js)

### Async/Await
Es una sintaxis más limpia y legible para manejar promesas. Facilita la escritura de código asíncrono y el manejo de errores con bloques `try-catch`.

> Código relacionado: [06-async-await.js](src/concepts/06-async-await.js)

> Código relacionado: [07-async-await.js](src/concepts/07-async-await.js)

### For-Await
El bucle `for-await-of` permite iterar sobre objetos asíncronos, procesando promesas de manera secuencial. Es útil para manejar flujos de datos asíncronos.

> Código relacionado: [08-for-await.js](src/concepts/08-for-await.js)

## Generators
Las funciones generadoras (`function*`) permiten pausar y reanudar la ejecución, devolviendo valores intermedios con `yield`. Son útiles para manejar secuencias y flujos de datos.

> Código relacionado: [09-generators.js](src/concepts/09-generators.js)

### Generators-async
Los generadores asíncronos (`async function*`) combinan las características de los generadores y las promesas, permitiendo manejar flujos de datos asíncronos con `yield` y `await`.

> Código relacionado: [10-generators-async.js](src/concepts/10-generators-async.js)
