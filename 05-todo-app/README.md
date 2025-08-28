# Todo App

Esta aplicación web es un ejercicio práctico para reforzar conceptos fundamentales de JavaScript y el desarrollo web moderno. Se enfoca en la manipulación del DOM, el manejo de estados globales y locales, y el uso de herramientas como **Vite** para optimizar el flujo de trabajo.

## **Temas clave**

### **1. Scopes y Variables Locales**
- **Scope:** Es el contexto donde las variables y funciones son accesibles. En JavaScript, existen tres tipos principales de scope:
  - **Global:** Variables accesibles desde cualquier parte del código.
  - **Local:** Variables definidas dentro de una función o bloque, accesibles solo en ese contexto.
  - **Bloque:** Variables declaradas con `let` o `const` dentro de un bloque `{}`.
- **Variables locales:** Son aquellas que solo existen dentro del scope donde se declaran, evitando conflictos con otras partes del código.

### **2. Store Global**
- **¿Qué es un Store?**
  - Es un espacio centralizado donde se almacena el estado de la aplicación.
  - En lugar de pasar datos entre componentes o funciones, el store actúa como una "base de datos temporal" que define cómo acceder y modificar la información.
- **State vs Store:**
  - **State:** Es la información actual de la aplicación.
  - **Store:** Es el conjunto de reglas que definen cómo se accede y modifica el state.

### **3. LocalStorage y SessionStorage**
- **LocalStorage:**
  - Permite almacenar pares clave-valor en el navegador de forma persistente.
  - Los datos permanecen incluso si se cierra y vuelve a abrir el navegador.
- **SessionStorage:**
  - Similar a LocalStorage, pero los datos solo se mantienen mientras la pestaña del navegador esté abierta.
  - Al cerrar la pestaña, los datos se eliminan automáticamente.

### **4. Modularización**
- El código está dividido en módulos para mejorar la organización y reutilización.
- Cada módulo tiene una responsabilidad específica, como manejar el estado global (`store`) o renderizar elementos en el DOM (`use-cases`).

## **Estructura del proyecto**
```
todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── main.js          (Archivo principal de entrada)
│   ├── style.css        (Estilos de la aplicación)
│   ├── store/
│   │   └── todo.store.js (Manejo del estado global de la aplicación)
│   ├── todos/
│   │   ├── app.html      (Estructura HTML del componente principal)
│   │   ├── app.js        (Lógica principal del componente)
│   │   ├── models/
│   │   │   └── todo.model.js (Modelo de datos para los TODOs)
│   │   └── use-cases/
│   │       ├── index.js            (Archivo de barril para los casos de uso)
│   │       ├── create-todo-html.js (Crea elementos HTML para los TODOs)
│   │       ├── render-pending.js   (Renderiza los TODOs pendientes)
│   │       └── render-todo.js      (Renderiza los TODOs en el DOM)
├── index.html           (Archivo HTML principal)
├── package.json         (Gestión de dependencias y scripts)
└── README.md            (Documentación
```