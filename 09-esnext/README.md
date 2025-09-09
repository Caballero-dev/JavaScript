# ESNext

En esta sección se exploran las nuevas características de JavaScript introducidas en las versiones más recientes del lenguaje.

## **1. Métodos Modernos para Arreglos**
Se introducen nuevos métodos para trabajar con arreglos de manera más eficiente y sin modificar el arreglo original. Estos métodos son ideales para evitar efectos secundarios y mantener la inmutabilidad.

### **toSorted**
- Devuelve un nuevo arreglo ordenado sin modificar el arreglo original.
- Es una alternativa moderna al método `sort`.

> Código relacionado: [array-to-methods.js](src/01-arrays/array-to-methods.js)

### **toReversed**
- Devuelve un nuevo arreglo con los elementos en orden inverso, sin modificar el arreglo original.
- Es una alternativa moderna al método `reverse`.

> Código relacionado: [array-to-methods.js](src/01-arrays/array-to-methods.js)

### **toSpliced**
- Devuelve un nuevo arreglo con las modificaciones aplicadas (eliminación e inserción), sin modificar el arreglo original.
- Es una alternativa moderna al método `splice`.

> Código relacionado: [array-to-methods.js](src/01-arrays/array-to-methods.js)


## **2. Copias Profundas con `structuredClone`**
El método `structuredClone` permite crear copias profundas de objetos y arreglos, incluyendo estructuras anidadas. Esto asegura que los cambios realizados en la copia no afecten al objeto o arreglo original.

### Características:
- Ideal para evitar problemas de referencias compartidas.
- Compatible con estructuras complejas como `Map`, `Set`.

> Código relacionado: [array-structured-clone.js](src/01-arrays/array-structured-clone.js)


## **3. Modificación de Arreglos con `with`**
El método `with` permite crear un nuevo arreglo basado en uno existente, reemplazando un elemento en una posición específica. Es una forma moderna y más legible de actualizar arreglos sin modificar el original.

> Código relacionado: [array-with.js](src/01-arrays/array-with.js)

## **4. Acceso a Elementos con `at`**
El método `at` proporciona una forma más legible y flexible de acceder a elementos de un arreglo o string. Permite usar índices positivos y negativos.

### Características:
- Índices positivos: Acceden a elementos desde el inicio.
- Índices negativos: Acceden a elementos desde el final.

> Código relacionado: [array-with.js](src/01-arrays/array-with.js)

---

Para saber la compatibilidad de las funcioanlidades nuevas se puede consultar [Can I Use](https://caniuse.com/).