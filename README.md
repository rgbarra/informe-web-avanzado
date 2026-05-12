# 🛡️ Weather Guardian - Proyecto Full Stack MERN

Este proyecto es la implementación práctica del informe para la asignatura de **Desarrollo de Aplicaciones Web Avanzadas**. La aplicación es una solución Full Stack que integra un servidor robusto en Node.js con una interfaz reactiva en React, enfocada en la interoperabilidad de sistemas y consumo de APIs de terceros.

## 🚀 Características Principales

- **Arquitectura desacoplada (CORS):** Comunicación fluida entre un Frontend en React (Vite) y un Backend en Express.js.
- **Consumo de APIs de Terceros:** Integración dinámica con **OpenWeatherMap** para datos meteorológicos en tiempo real.
- **Experiencia de Usuario (UX) Avanzada:** 
  - Autodetector de ubicación mediante **Geolocation API** del navegador.
  - Sistema de autocompletado de ciudades (Datalist).
  - Diseño responsivo pulido con **Flexbox CSS**.
- **Seguridad:** Gestión de credenciales críticas mediante variables de entorno (`.env`) y protección de rutas.

## 🛠️ Stack Tecnológico

### **Frontend**
- **React 18 + Vite:** Biblioteca para interfaces de usuario y entorno de desarrollo ultra rápido.
- **Axios:** Gestión de peticiones HTTP.
- **CSS3 (Flexbox):** Maquetación moderna y adaptable.

### **Backend**
- **Node.js & Express.js:** Entorno de ejecución y framework para la API REST.
- **Dotenv:** Seguridad en la configuración de entorno.

---

## 📁 Estructura del Repositorio

```text
informe-web-avanzado/
├── backend/                # API REST (Node/Express)
│   ├── .env                # API Keys (No incluido en Git)
│   ├── index.js            # Servidor y Endpoints
│   └── package.json
├── frontend/               # Cliente (React/Vite)
│   ├── src/
│   │   ├── components/     # WeatherSearch y WeatherCard
│   │   └── services/       # Lógica de consumo de API
│   └── package.json
└── README.md