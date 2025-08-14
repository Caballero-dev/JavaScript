# JavaScript

JavaScript fue creado por Brendan Eich para satisfacer la necesidad de un lenguaje de programación que se ejecutara del lado del cliente, permitiendo que las páginas web fueran más dinámicas, atractivas e interactivas para los usuarios.

## Tipos de datos primitivos

JavaScript es un lenguaje débilmente tipado; es decir, no se le indica qué tipo de dato es una variable, JavaScript lo infiere automáticamente.

El tipo de dato de una variable describe el contenido del valor que tiene la variable. Ejemplo

```javascript
//  variable | tipo de dato cadena de texto
let canasta = 'Manzana';

//  variable | tipo de dato numérico
let edad = 16;
```

## ¿Qué son los primitivos?
Es información que no es objeto y es inmutable.

- **Boolean**: true / false
- **Null**: Sin valor en lo absoluto
- **Undefined**: Una variable declarada a la que aún no se le asigna valor
- **Number**: enteros, flotantes, etc.
- **String**: Una cadena de caracteres, ej.: palabras, nombres, etc.
- **Symbol**: Es un valor único que no es igual a ningún otro valor.

> Código ejemplo [primitivos.js](assets/js/primitivos.js)

---

## Nombre de archivos
Para el nombre de los archivos se recomienda colocar un `-` si tiene varias palabras. Ejemplo `palabras-reservadas.js`

## Nombre de variables
Para los nombres de las variables se recomienda utilizar lowerCamelCase; esto se refiere a iniciar la primera palabra en minúscula y, si es una combinación de palabras, la segunda palabra empieza con la primera letra capitalizada. Ejemplo

```javascript
let esMayor;
```

## Nombre de clases
Para los nombres de las clases se recomienda utilizar UpperCamelCase; esto se refiere a iniciar la primera letra de cada palabra en mayúscula. Ejemplo

```javascript
class FiguraGeometrica {
  
}
```

## Palabras reservadas
Son palabras que tienen un uso específico, es decir, solo se deben usar para lo que fueron creadas.
[Validador de palabras reservadas](https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0)

> Código ejemplo [palabras-reservadas.js](assets/js/palabras-reservadas.js)

---

## Arreglos
Son un objeto muy parecido a una lista de información, que contiene un grupo de elementos. Se recomienda que el arreglo contenga los mismos tipos de datos.

> Código ejemplo [arreglos.js](assets/js/arreglos.js)

**Propiedades y métodos básicos que tienen los arreglos**
- **Propiedades** -> son como variables que vienen dentro de los arreglos
- **Métodos** -> son funciones que vienen internamente en los arreglos

> Código ejemplo [arreglos2.js](assets/js/arreglos2.js)

## Objetos literales
Un objeto literal es la forma más directa de crear un objeto escribiendo sus pares clave–valor entre llaves. No requiere clases ni new; sirve para agrupar datos y funciones relacionadas.

> Código ejemplo [objeto-literal.js](assets/js/objeto-literal.js)
