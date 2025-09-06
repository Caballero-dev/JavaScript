# http-app

En esta sección se exploran conceptos relacionados con el manejo de peticiones HTTP en JavaScript. Se utiliza la API `fetch` para realizar solicitudes a servicios externos y procesar las respuestas. Este proyecto incluye ejemplos prácticos para entender cómo interactuar con APIs y mostrar datos dinámicamente en el DOM.

## Fetch API
La API `fetch` es una herramienta nativa de JavaScript que permite realizar peticiones HTTP de manera sencilla. Es una alternativa moderna a `XMLHttpRequest` y utiliza promesas para manejar las respuestas.

## Peticiones HTTP
Se realizan peticiones HTTP a una API externa para obtener datos en formato JSON. En este caso, se utiliza la API de Breaking Bad Quotes para obtener citas aleatorias de la serie.

### Flujo de trabajo:
1. Realizar una petición HTTP con `fetch`.
2. Convertir la respuesta en un objeto JSON.
3. Renderizar los datos obtenidos en el DOM.

> API - [Breaking Bad Quotes API](https://breakingbadquotes.xyz/)
