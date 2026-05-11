# 🛡️ Weather Guardian - Integración de APIs de Terceros

Este proyecto práctico constituye el núcleo técnico del informe sobre **Desarrollo de Aplicaciones Web Avanzadas**. La aplicación demuestra la implementación de un servidor robusto utilizando el framework **Express**, enfocado en la interoperabilidad de sistemas mediante el consumo de servicios externos.

## 🚀 Características Principales

- **Arquitectura Basada en Frameworks:** Implementación de un servidor asíncrono con **Node.js** y **Express.js**, cumpliendo con los estándares de usabilidad y escalabilidad.
- **Integración de APIs de Terceros:** Consumo dinámico de datos meteorológicos globales a través de la API de **OpenWeatherMap** (Punto 4 de la actividad).
- **Seguridad en Capa de Desarrollo:** Gestión de credenciales críticas (API Keys) mediante variables de entorno para prevenir la exposición de datos sensibles.
- **Consumo Eficiente de Datos:** Uso de la biblioteca **Axios** para la gestión de promesas y comunicación HTTP optimizada.
- **Control de Versiones:** Repositorio estructurado bajo estándares de limpieza de código y mantenimiento continuo.

## 🛠️ Stack Tecnológico

- **Framework de Servidor:** Node.js / Express.js
- **Gestión de APIs:** Axios (HTTP Client)
- **Seguridad:** Dotenv (Environment Variables)
- **Entorno de Ejecución:** V8 Engine

## 📁 Estructura del Proyecto (Refactorizada)

```text
backend/
├── .env                # Configuración de variables sensibles
├── .gitignore          # Definición de archivos excluidos de Git
├── index.js            # Lógica central del servidor y endpoints
├── package.json        # Gestión de manifiesto y dependencias
└── README.md           # Documentación técnica del proyecto