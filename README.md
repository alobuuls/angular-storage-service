# 💾 Angular Storage Service

Aplicación desarrollada en **Angular 16** que implementa un sistema reutilizable para manejar persistencia de datos usando **localStorage**.

El proyecto demuestra cómo abstraer el almacenamiento del navegador mediante servicios reutilizables y guardar información proveniente de formularios reactivos.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto asegúrate de tener instalado:

- 📦 **Node.js:** `v18+` *(preferiblemente v18.10.0)*
- 📦 **npm:** `v9+`
- 🅰️ **Angular CLI:** `v16.x`

---

## 🔍 Verificar versiones

Ejecuta:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación

### 1️⃣ Clonar repositorio

```bash
git clone <URL_DEL_REPO>

cd angular-storage-service
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar proyecto

```bash
ng serve
```

Abrir:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura proyecto

### 📦 Storage Layer

```bash
storage/
├── storage.ts
└── local-storage.service.ts
```

Implementa:

- Servicio abstracto para Storage API
- Persistencia reutilizable
- Serialización automática JSON
- Lectura tipada

---

### 📦 Forms

Formulario reactivo para almacenar:

```txt
Nombre
Queja
```

Los datos se guardan automáticamente en:

```txt
localStorage
```

---

## ⚙️ Funcionalidades implementadas

✔ Formularios reactivos  
✔ Persistencia LocalStorage  
✔ Servicios reutilizables  
✔ Serialización JSON  
✔ Lectura tipada  
✔ Abstracción Storage API  
✔ Guardado de datos en navegador  

---

## 🛠 Tecnologías usadas

- 🅰️ Angular 16
- ⚡ TypeScript
- 🧾 Reactive Forms
- 💾 Browser LocalStorage API

---

## 📁 Estructura proyecto

```bash
src/app/

storage/
├── storage.ts
└── local-storage.service.ts

app.component.ts
app.component.html
app.module.ts
```

---

## 🔥 Buenas prácticas implementadas

- Inyección de dependencias
- Servicios reutilizables
- Programación orientada a abstracción
- Persistencia desacoplada
- Tipado con TypeScript
- Formularios reactivos

---

## 📄 Licencia

Proyecto creado con fines educativos y portafolio.
