# 🌤️ ClimaApp MERN - Full Stack Solution

### 👨‍💻 Estudiante: Raúl Barra
**Asignatura:** Programación Web Avanzada / Sistemas Informáticos
**Institución:** Proyecto Universitario (Santiago, Chile)

---

## 🚀 Descripción
ClimaApp es una solución **Full Stack** diseñada para proporcionar datos meteorológicos precisos en tiempo real. Utiliza una arquitectura desacoplada donde el Frontend (React) consume servicios de un Backend (Node.js/Express), el cual actúa como un proxy seguro para interactuar con la API de OpenWeatherMap.

## 🛠️ Stack Tecnológico
*   **Frontend:** React 18 + Vite (Desplegado en **Netlify**).
*   **Backend:** Node.js + Express (Desplegado en **Render**).
*   **Comunicación:** Axios (Cliente HTTP) con manejo de asincronía.
*   **Estilos:** CSS3 Moderno con arquitectura de variables y **Diseño Responsive**.

## 🏗️ Arquitectura y Buenas Prácticas
El proyecto implementa estándares de la industria para asegurar escalabilidad y seguridad:
*   **Proxy Backend:** Protege la API Key de OpenWeather evitándola exponer en el cliente.
*   **CORS Policy:** Configuración de lista blanca para permitir peticiones solo desde el dominio de producción.
*   **Environment Variables:** Gestión de configuraciones sensibles mediante archivos `.env`.
*   **Modularización:** Separación clara entre Componentes, Servicios y Lógica de Negocio.

## 🌐 Enlaces de Producción
*   **Frontend (URL en vivo):** [https://br-trabajo-u4.netlify.app](https://br-trabajo-u4.netlify.app)
*   **Backend (API Base):** [https://informe-web-avanzado.onrender.com/api/v1/weather](https://informe-web-avanzado.onrender.com/api/v1/weather)

## 📡 Endpoints de la API
| Método | Endpoint | Descripción | Parámetros |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/weather` | Obtiene el clima actual | `city` (string) |

## 🔧 Instalación y Configuración Local

### 1. Configuración del Backend
```bash
cd backend
npm install
# Crear .env con: API_KEY=tu_key_de_openweather
npm start