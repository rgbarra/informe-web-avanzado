# 🌤️ ClimaApp - Modern Full Stack Solution

### 👨‍💻 Developer: Raúl Barra
**Asignatura:** Programación Web Avanzada / Sistemas Informáticos
**Institución:** Proyecto Universitario (Santiago, Chile)

---

## 🚀 Descripción
ClimaApp es una plataforma **Full Stack** empresarial diseñada para proporcionar datos meteorológicos precisos en tiempo real. La aplicación implementa una arquitectura completamente desacoplada donde el Frontend construido en React consume servicios de un Backend en Node.js/Express. El servidor backend opera como un proxy seguro y modular que procesa la información de la API externa de OpenWeatherMap, protegiendo las credenciales sensibles y sanitizando las estructuras de datos antes de enviarlas al cliente.

---

## 🏗️ Arquitectura del Sistema (Controller-Service Pattern)

Para asegurar una alta mantenibilidad, escalabilidad y una separación estricta de responsabilidades (*Separation of Concerns*), el backend implementa un patrón de capas desacopladas representado en el siguiente diagrama interactivo:

```mermaid
graph TD
    classDef client fill:#E1F5FE,stroke:#0288D1,stroke-width:2px;
    classDef api fill:#FFF3E0,stroke:#F57C00,stroke-width:2px;
    classDef layer fill:#E8F5E9,stroke:#388E3C,stroke-width:2px;
    classDef config fill:#F3E5F5,stroke:#7B1FA2,stroke-width:2px;

    A[Frontend / Client React]:::client
    B[backend/index.js]:::layer
    C[backend/routes/weatherRoutes.js]:::layer
    D[backend/controllers/weather.controller.js]:::layer
    E[backend/services/weather.service.js]:::layer
    F[backend/config/environment.js]:::config
    G[.env File]:::config
    H[External OpenWeather API]:::api

    A -->|1. GET /api/v1/weather?city=Santiago| B
    B -->|2. Forwards request| C
    C -->|3. Calls getWeatherReport| D
    D -->|4. Validates inputs & delegates| E
    E -->|5. Reads credentials| F
    G -->|Injects vars| F
    E -->|6. Secure HTTPS Fetch| H
    
    H -.->|7. Returns raw JSON data| E
    E -.->|8. Maps & cleans data structure| D
    D -.->|9. Responds HTTP 200 OK JSON| A