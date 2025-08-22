# Blackjack

Blackjack es un juego de cartas donde el objetivo es alcanzar una puntuación lo más cercana posible a 21 sin excederla. Si superas 21, pierdes automáticamente.

## DOM - Document Object Model
El DOM (Document Object Model) es una representación estructurada de un documento HTML o XML en forma de un árbol de nodos. Permite acceder y manipular dinámicamente los elementos del documento mediante programación, facilitando tareas como modificar contenido, estilos, atributos y responder a eventos.

El objeto principal para acceder al DOM es **document**, que proporciona métodos para seleccionar, manipular y modificar elementos.

**1. Métodos principales para seleccionar elementos del DOM**
- `querySelector`: Selecciona el **primer elemento** que coincida con un selector como clases (`.clase`), IDs (`#id`), etiquetas (`tag`), combinaciones (`div.clase`), etc.

- `querySelectorAll`: Selecciona **todos los elementos** que coincidan con un selector y devuelve una NodeList (similar a un arreglo).

- `getElementById`: Selecciona un elemento por su **ID**.

- `getElementsByClassName`: Selecciona todos los elementos que tengan una clase específica y devuelve una **HTMLCollection** (similar a un arreglo, pero no es iterable directamente con forEach).

**2. Métodos para manipular contenido**
- `innerText`: Modifica o devuelve el texto visible dentro de un elemento.

- `innerHTML`: Modifica o devuelve el contenido HTML dentro de un elemento.

- `textContent`: Similar a `innerText`, pero incluye todo el texto, incluso el que está oculto por CSS.

**3. Métodos para manipular atributos**
- `setAttribute`: Establece un atributo en un elemento.

- `getAttribute`: Obtiene el valor de un atributo de un elemento.

- `removeAttribute`: Elimina un atributo de un elemento.

**4. Métodos para manipular clases**
- `classList.add`: Agrega una clase al elemento.

- `classList.remove`: Elimina una clase del elemento.

**5. Métodos para crear y agregar elementos al DOM**
- `createElement`: Crea un nuevo elemento HTML dinámicamente. Indicandole la etiqueta a crear.

- `append`: Agrega un elemento al final de otro elemento como hijo.

**6. Métodos para manejar eventos**
- `addEventListener` Permite agregar un **manejador de eventos** a un elemento del DOM. Esto significa que puedes escuchar eventos como clics, movimientos del mouse, teclas presionadas, entre otros, y ejecutar una función cuando el evento ocurra.

  **Sintaxis:**
  ```javascript
  elemento.addEventListener('evento', función);
  ```
  - `evento`: El nombre del evento que deseas escuchar (por ejemplo, `'click'`, `'mouseover'`, `'keydown'`, etc.).
  - `función`: La función que se ejecutará cuando ocurra el evento.

> Mas información sobre el DOM [aqui](https://developer.mozilla.org/es/docs/Glossary/DOM)

## Patrón módulo y optimizaciones

El código inicial del juego tiene ciertas vulnerabilidades que pueden ser explotadas desde la consola del navegador. Para evitar esto y mejorar la organización del código, se utiliza el **Patrón Módulo** junto con otras optimizaciones. [(Código inicial)](/02-blackjack/assets/js/juego.inicial.js)

### Patrón Módulo

El **Patrón Módulo** es uno de los patrones más comunes en JavaScript y se utiliza para encapsular el código dentro de un contenedor privado. Esto significa que las variables y funciones definidas dentro del módulo no son accesibles desde el exterior, a menos que se expongan explícitamente.

#### **¿Qué hace el Patrón Módulo?**
- **Encapsulación:** Protege las variables y funciones internas, evitando que sean manipuladas desde el exterior.
- **Evita la contaminación del espacio global:** Reduce el riesgo de conflictos entre nombres de variables o funciones.
- **Organización:** Facilita la modularidad y el mantenimiento del código.

#### **¿Cómo se declara?**
El Patrón Módulo se implementa utilizando una **IIFE** (Immediately Invoked Function Expression), que es una función que se ejecuta inmediatamente después de ser definida.

**Ejemplo básico:**
```javascript
const miModulo = (() => {
  // Variables privadas
  let contador = 0;

  // Función privada
  const incrementar = () => contador++;

  // Función pública (expuesta)
  const obtenerContador = () => contador;

  // Retorna un objeto con las funciones o variables que deseas exponer
  return {
    obtenerContador
  };
})();
```

### `'use strict'`
La declaración 'use strict' activa el modo estricto de JavaScript. Este modo ayuda a escribir código más seguro y limpio al evitar errores comunes.

La declaración `'use strict'` activa el modo estricto de JavaScript. Este modo:
- Evita errores comunes, como el uso de variables no declaradas.
- Restringe el uso de ciertas palabras reservadas.
- Hace que el código sea más seguro y predecible.

#### **¿Qué hace 'use strict'?**
1. Evita errores comunes:
  - No permite el uso de variables no declaradas.
  - Restringe el uso de palabras reservadas.
2. Mejora el rendimiento:
  - Algunos navegadores optimizan el código que utiliza 'use strict'.
3. Evita malas prácticas:
  - Prohíbe el uso de ciertas características obsoletas o problemáticas de JavaScript.

**Ejemplo básico:**
```javascript
(() => {
  'use strict'; // Activa el modo estricto

  // Esto ocasionará un error porque la variable no está declarada
  miVariable = 10; 
  console.log(miVariable);

})();
```

> Mas información sobre `use strict` [aqui](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode)

### Code Minify
**Code Minify** es el proceso de eliminar caracteres innecesarios del código fuente (como espacios, saltos de línea y comentarios) sin afectar su funcionalidad. Esto se hace para reducir el tamaño del archivo y mejorar el rendimiento de las aplicaciones web.

**Ejemplo de código antes y después de minificar:**

Antes de minificar: [Ver código](assets/js/juego.js)

Despues de minificar: [Ver código](assets/js/juego-min.js)

**Herramienta para minificar código:**
- [JavaScript Minifier](https://www.toptal.com/developers/javascript-minifier)
