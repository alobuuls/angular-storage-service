<h1 align="center">💾 Angular Storage Service</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/LocalStorage-Service-4285F4?logo=googlechrome&logoColor=white" alt="Storage Service" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-storage-service" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-storage-service/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-storage-service?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-storage-service/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-storage-service" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [💾 Angular Storage Service](#-angular-storage-service)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-storage-service/

---

## 📖 Description

> [!NOTE]
> An Angular 16 application that demonstrates how to encapsulate browser storage operations using a dedicated Local Storage service.

The project shows how to abstract Local Storage interactions behind a reusable service layer, improving maintainability, reusability, and separation of concerns while working with persistent browser data.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v16.14.x – v18.x` *(recommended: v18 LTS)*
- 📦 **npm:** `v8+`
- 🅰️ **Angular CLI:** `v16.x`

## Recommended using nvm

```bash
nvm install 18
nvm use 18
```

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-storage-service.git

cd angular-storage-service
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a simple service-based architecture focused on browser persistence and code reusability.

### 💾 Local Storage Service

Responsible for:

* Saving data into Local Storage
* Retrieving stored values
* Removing stored values
* Abstracting browser APIs
* Providing reusable storage methods

### 📄 Storage Interface

Responsible for:

* Defining storage contracts
* Standardizing storage operations
* Improving type safety

### 🏠 App Component

Responsible for:

* Consuming the storage service
* Demonstrating persistence operations
* Displaying storage behavior examples

---

## ✨ Features

* 💾 Store data in Local Storage
* 📤 Retrieve stored values
* 🗑️ Remove stored values
* 🧾 JSON Serialization
* 🔄 JSON Deserialization
* 📦 Service-based Storage Management
* ♻️ Reusable Storage Logic
* ⚡ Strong Typing with TypeScript

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Angular 16 | Front-End Framework |
| TypeScript | Application Logic |
| Local Storage API | Browser Persistence |
| Angular Services | Business Logic Encapsulation |
| Interfaces | Type Safety |

---

## 📁 Project Structure

```text
angular-storage-service/

├── src/
│
├── app/
│   ├── storage/
│   │   ├── local-storage.service.ts
│   │   └── storage.ts
│   │
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
│
├── main.ts
├── styles.css
├── index.html
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Service-based Architecture
* Separation of Concerns
* Dependency Injection
* TypeScript Interfaces
* Encapsulation of Browser APIs
* Reusable Business Logic
* Strong Typing
* Clean Project Structure
* Code Reusability
* Maintainable Angular Design

---

## 🎯 Project Goal

Practice and strengthen Angular service architecture through the implementation of a reusable Local Storage abstraction layer.

Key concepts covered:

* Angular Services
* Dependency Injection
* Local Storage API
* TypeScript Interfaces
* Data Persistence
* Separation of Concerns
* Reusable Components and Services
* Front-End Architecture Fundamentals

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
