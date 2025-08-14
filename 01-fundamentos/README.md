# JavaScript

JavaScript fue creado por Brendan Eich para satisfacer la necesidad de un lenguaje de programación que se ejecutara del lado del cliente, permitiendo que las páginas web fueran más dinámicas, atractivas e interactivas para los usuarios.

## Tipos de datos primitivos

JavaScript es un lenguje debilmente tipado, es decir no se le indica que tipo de dato es una varible, JavaScript lo infiere automaticamente.

Un tipo de dato de una varible describe el contenido del valor que tiene la varibles. Ejeplo

```javascript
//  varible | tipo de dato cadena de texto
let canasta = 'Manzana':

//  varible | tipo de dato numerico
let edad = 16;

```

## ¿Que son los primitivos?
Es una información que no es ubjeto y son inmutables

- **Boolean**:  true / false
- **Null**: Sin valor en lo absoluto
- **Undefined**: Una variable declarada que aún no se le asigna valor
- **Number**: integers, floats, etc.
- **String**: Una cadena de caracteres, ej: Palabras, nombres, etc.
- **Symbol**: Es un valor único que no es igual a ningún otro valor.

> Codigo ejemplo [primitivos.js](assets/js/primitivos.js)

---

## Nombre de archivos
Para el nombre de los archivos se recomienda colocar un `-` ai tiene varias palabras. Ejemplo `palabras-reservadas.js`

## Nombre de varibles
Para el nombres de las variables se recomienda utilizar lowerCamelCase, esto se refire a iniciar la primera palabra en minuscula y si es una combinación de palabras la segunda palabra empieza con la primera letra capitalizada. Eejmplo

```javascript
let esMayor;
```

## Nombre de clases
Para el nombres de las clases se recomienda utilizar UpperCamelCase, esto se refire a iniciar la primera letra de cada palabra en mayuscula. Eejmplo

```javascript
class FiguraGeometrica {
  
  }
```

## Palabras reservadas
Son palabra que tienen un uso especifico, es decir solo se deben de usar para lo que fueron creadas
[Validador de palabras reservadas](https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0)

> Codigo ejemplo [palabras-reservadas.js](assets/js/palabras-reservadas.js)

---

## Arreglos
Son un objeto muy parecido a una lista de información, que contiene un grupo de elemento. Se recomienda que en el arrelo contenga los mismos tipos de datos.

> Codigo ejemplo [arreglos.js](assets/js/arreglos.js)

**Propiedades y metodos basicos que tiene los arreglos**
- **Propiedades** -> son como una varible que vienen adentro de los arreglos
- **Metodos** -> son funciones que vienen internamente en los arreglos

> Codigo ejemplo [arreglos2.js](assets/js/arreglos2.js)

## Obejtos literales
Un objeto literal es la forma más directa de crear un objeto escribiendo sus pares clave–valor entre llaves. No requiere clases ni new; sirve para agrupar datos y funciones relacionadas.

> Codigo ejemplo [arreglos2.js](assets/js/objeto-literal.js)