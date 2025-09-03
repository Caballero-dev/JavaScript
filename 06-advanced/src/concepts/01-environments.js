
/**
 * Componente que muestra las variables de entorno configuradas en el proyecto
 * 
 * @param {HTMLDivElement} element - Elemento HTML donde se renderizará la información de las variables de entorno
 */
export const environmentsComponent = ( element ) => { 
  
  console.log( import.meta.env )

  const html = `
    Dev: ${ import.meta.env.DEV } <br/>
    Prod: ${ import.meta.env.PROD } <br/>
    Key: ${ import.meta.env.VITE_API_KEY } <br/>
    Url: ${ import.meta.env.VITE_BASE_URL } <br/>
  `;
  
  element.innerHTML = html;
}

/*

¿Qué son las variables de entorno?

Las variables de entorno son valores configurables que se utilizan para definir el comportamiento de una aplicación
dependiendo del entorno en el que se ejecuta (desarrollo, producción, etc.).

En proyectos con Vite, las variables de entorno se acceden a través de `import.meta.env`.
Las variables personalizadas deben comenzar con el prefijo `VITE_` para ser accesibles.

*/