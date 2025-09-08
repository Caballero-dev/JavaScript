# CRUD-App

En esta sección se desarrolla una aplicación CRUD (Create, Read, Update, Delete) utilizando JavaScript puro (Vanilla JS). Este proyecto pone en práctica conceptos avanzados de desarrollo web, como el manejo de estados, mapeadores, modelos, y la interacción con un backend simulado. Además, se refuerzan buenas prácticas como la modularización y la documentación de funciones.

---

## **Operaciones CRUD**
Se implementan las operaciones básicas de una aplicación CRUD:
- **Create**: Crear nuevos usuarios.
- **Read**: Leer y mostrar usuarios existentes.
- **Update**: Actualizar información de usuarios.
- **Delete**: Eliminar usuarios.

Estas operaciones se realizan sin el uso de frameworks o librerías externas, utilizando únicamente JavaScript nativo.

---

## **Backend Simulado**
Se utiliza un backend de pruebas basado en un archivo JSON (`db.json`) para simular las operaciones de una API RESTful. Esto permite realizar peticiones HTTP para interactuar con los datos de los usuarios.

> Código relacionado: [server/db.json](server/db.json)

---

## **Nuevos Conceptos**

### **1. Mappers**
Los mapeadores transforman datos entre diferentes formatos. En este proyecto, se utilizan para convertir datos entre el formato del backend y el formato interno de la aplicación.

- **Ejemplo**: Transformar un usuario del backend (`localhost-user`) al modelo interno de la aplicación (`user`).
- **Archivos relacionados**:
  - [localhost-user.mapper.js](src/mappers/localhost-user.mapper.js)
  - [user-to-localhost.mapper.js](src/mappers/user-to-localhost.mapper.js)

---

### **2. Modelos**
Los modelos definen cómo se estructuran los datos dentro de la aplicación. Esto permite trabajar con una representación consistente de los datos en todo el proyecto.

- **Ejemplo**: El modelo `user` define las propiedades y métodos de un usuario.
- **Archivo relacionado**: [user.js](src/models/user.js)

---

### **3. Presentación**
La capa de presentación incluye funciones y componentes que se encargan de mostrar los datos al usuario. Esto incluye:
- **Tablas**: Renderizar usuarios en una tabla.
- **Botones**: Crear botones para las acciones CRUD.
- **Modales**: Mostrar formularios para crear o editar usuarios.

- **Archivos relacionados**:
  - [render-table.js](src/presentation/render-table/render-table.js)
  - [render-buttons.js](src/presentation/render-buttons/render-buttons.js)
  - [render-modal.js](src/presentation/render-modal/render-modal.js)
  - [render-add-button.js](src/presentation/render-add-button/render-add-button.js)

---

### **4. Store**
El store es un lugar centralizado donde se almacena el estado de la aplicación. En este proyecto, se utiliza para manejar la lista de usuarios y compartirla entre diferentes partes de la aplicación.

- **Archivo relacionado**: [users-store.js](src/store/users-store.js)

---

### **5. Use Cases**
Los casos de uso encapsulan la lógica específica de cada operación. Esto incluye funciones reutilizables para interactuar con el backend o realizar transformaciones de datos.

- **Ejemplo**:
  - `load-users-by-page.js`: Carga usuarios paginados desde el backend.
  - `save-user.js`: Guarda un nuevo usuario o actualiza uno existente.
  - `delete-user-by-id.js`: Elimina un usuario por su ID.

- **Archivos relacionados**:
  - [load-users-by-page.js](src/use-cases/load-users-by-page.js)
  - [save-user.js](src/use-cases/save-user.js)
  - [delete-user-by-id.js](src/use-cases/delete-user-by-id.js)

---

## **Estructura del Proyecto**
```
08-crud-app/
├── public/
│   └── vite.svg
├── server/
│   ├── db.json               (Backend simulado con datos de usuarios)
│   └── db-copy.json          (Copia de seguridad del backend)
├── src/
│   ├── main.js               (Archivo principal de entrada)
│   ├── style.css             (Estilos de la aplicación)
│   ├── users-app.js          (Lógica principal de la aplicación CRUD)
│   ├── mappers/              (Transformación de datos entre backend y frontend)
│   │   ├── localhost-user.mapper.js
│   │   └── user-to-localhost.mapper.js
│   ├── models/               (Definición de modelos de datos)
│   │   └── user.js
│   ├── presentation/         (Capa de presentación: tablas, botones, modales)
│   │   ├── render-add-button/
│   │   ├── render-buttons/
│   │   ├── render-modal/
│   │   └── render-table/
│   ├── store/                (Estado centralizado de la aplicación)
│   │   └── users-store.js
│   └── use-cases/            (Casos de uso específicos)
│       ├── delete-user-by-id.js
│       ├── get-users-by-id.js
│       ├── load-users-by-page.js
│       └── save-user.js
├── index.html                (Archivo HTML principal)
├── package.json              (Gestión de dependencias y scripts)
├── .env.template             (Variable de entorno)
└── README.md                 (Documentación del proyecto)
```
