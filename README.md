# 🛡️ Network & Weather Guardian - Informe Web Avanzado

Este proyecto forma parte del informe técnico sobre **Desarrollo de Aplicaciones Web Avanzadas**. Consiste en una plataforma de monitoreo dinámico que integra servicios de bases de datos NoSQL y consumo de APIs de terceros bajo una arquitectura profesional **MERN**.

## 🚀 Características Principales

- **Arquitectura MVC:** Separación clara de responsabilidades en el servidor.
- **Seguridad Avanzada:** Implementación de encabezados de seguridad con `Helmet`, gestión de `CORS` y protección de credenciales mediante variables de entorno.
- **Persistencia de Datos:** Conexión robusta a **MongoDB Atlas** mediante el ODM **Mongoose**.
- **Integración de APIs:** Consumo en tiempo real de la API de **OpenWeatherMap** para datos climáticos globales.
- **Control de Versiones:** Estructura de **Monorepo** gestionada con Git y documentada bajo estándares de *Conventional Commits*.

## 🛠️ Stack Tecnológico

- **Backend:** Node.js, Express.js
- **Base de Datos:** MongoDB (NoSQL)
- **Seguridad:** Helmet, Dotenv, CORS
- **Cliente HTTP:** Axios
- **Frontend:** React.js (Estructura inicial configurada)

## 📁 Estructura del Proyecto

```text
informe-web-avanzado/
├── backend/            # Lógica del servidor (Node/Express)
│   ├── config/         # Configuración de base de datos
│   ├── controllers/    # Lógica de negocio
│   ├── models/         # Esquemas de datos (Mongoose)
│   ├── routes/         # Definición de endpoints
│   └── index.js        # Punto de entrada del servidor
├── frontend/           # Interfaz de usuario (React)
└── README.md           # Documentación del proyecto