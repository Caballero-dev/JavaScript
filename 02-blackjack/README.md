# Blackjack

Blackjack es un juego de cartas donde el objetivo es alcanzar una puntuación lo más cercana posible a 21 sin excederla. Si superas 21, pierdes automáticamente.

## DOM - Document Object Model
El DOM (Document Object Model) es una representación estructurada de un documento HTML o XML en forma de un árbol de nodos. Permite acceder y manipular dinámicamente los elementos del documento mediante programación, facilitando tareas como modificar contenido, estilos, atributos y responder a eventos.

El objeto principal para acceder al DOM es **document**, que proporciona métodos para seleccionar, manipular y modificar elementos.

**1. Métodos principales para seleccionar elementos del DOM**

`querySelector`
Selecciona el **primer elemento** que coincida con un selector como clases (`.clase`), IDs (`#id`), etiquetas (`tag`), combinaciones (`div.clase`), etc.

`querySelectorAll`
Selecciona **todos los elementos** que coincidan con un selector y devuelve una NodeList (similar a un arreglo).

`getElementById`
Selecciona un elemento por su **ID**.

`getElementsByClassName`
Selecciona todos los elementos que tengan una clase específica y devuelve una **HTMLCollection** (similar a un arreglo, pero no es iterable directamente con forEach).

**2. Métodos para manipular contenido**

`innerText`
Modifica o devuelve el texto visible dentro de un elemento.

`innerHTML`
Modifica o devuelve el contenido HTML dentro de un elemento.

`textContent`
Similar a `innerText`, pero incluye todo el texto, incluso el que está oculto por CSS.

**3. Métodos para manipular atributos**

`setAttribute`
Establece un atributo en un elemento.

`getAttribute`
Obtiene el valor de un atributo de un elemento.

`removeAttribute`
Elimina un atributo de un elemento.

**4. Métodos para manipular clases**

`classList.add` 
Agrega una clase al elemento.

`classList.remove`
Elimina una clase del elemento.

**5. Métodos para crear y agregar elementos al DOM**

`createElement`
Crea un nuevo elemento HTML dinámicamente. Indicandole la etiqueta a crear.

`append` 
Agrega un elemento al final de otro elemento como hijo.

**6. Métodos para manejar eventos**

`addEventListener` Permite agregar un **manejador de eventos** a un elemento del DOM. Esto significa que puedes escuchar eventos como clics, movimientos del mouse, teclas presionadas, entre otros, y ejecutar una función cuando el evento ocurra.

**Sintaxis:**
```javascript
elemento.addEventListener('evento', función);
```
- `evento`: El nombre del evento que deseas escuchar (por ejemplo, `'click'`, `'mouseover'`, `'keydown'`, etc.).
- `función`: La función que se ejecutará cuando ocurra el evento.

---

> Mas información [DOM](https://developer.mozilla.org/es/docs/Glossary/DOM)