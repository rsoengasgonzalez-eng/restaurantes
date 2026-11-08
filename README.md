# Mesa Madrid

Aplicación web estática y responsive para descubrir restaurantes de Madrid y centros comerciales cercanos (hasta 60 km), filtrar por precio y opciones para alérgenos, explorar un mapa y guardar solicitudes de reserva.

## Qué incluye

- 15 restaurantes **de demostración** distribuidos por Madrid y alrededores.
- Filtros por búsqueda, precio, seis alérgenos, zona y distancia.
- Mapa vectorial local sin dependencias, API keys ni teselas externas.
- Favoritos y solicitudes de reserva guardados en `localStorage`.
- Descarga de una reserva al calendario (`.ics`) y botón para compartir por WhatsApp.
- Diseño responsive, navegación por teclado, estados vacíos y PWA/offline.
- Configuración `_headers` compatible con Cloudflare Pages.

## Probar en local

No es necesario compilar ni instalar paquetes.

- Windows: doble clic en `iniciar-app.bat`.
- macOS/Linux: ejecuta `./iniciar-app.sh` y abre `http://127.0.0.1:8080`.
- Alternativa: `python3 -m http.server 8080`.

> Se puede abrir `index.html` directamente, pero el service worker solo funciona desde HTTP/HTTPS.

## Publicar en Cloudflare Pages

### Desde GitHub

1. Crea un repositorio nuevo.
2. Sube **el contenido de esta carpeta** a la raíz del repositorio; `index.html` debe quedar arriba del todo.
3. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
4. Selecciona el repositorio y la rama `main`.
5. Framework preset: `None`.
6. Build command: déjalo vacío (si la interfaz exige uno, usa `exit 0`).
7. Build output directory: `.`.
8. Pulsa **Save and Deploy**.

Cloudflare publicará una URL HTTPS `*.pages.dev` que se puede compartir por WhatsApp.

### Subida directa

También puedes usar **Workers & Pages → Create → Pages → Upload assets** y arrastrar esta carpeta o el ZIP.

## Límites importantes del prototipo

- Los nombres, valoraciones, disponibilidad y datos de restaurantes son ficticios y sirven para mostrar el producto.
- “Opciones sin…” no garantiza una cocina libre de alérgenos. La app recuerda confirmar ingredientes y contaminación cruzada directamente con el local.
- La reserva es una **solicitud local de demostración**: no se envía a un restaurante real y no procesa pagos.
- Favoritos y reservas solo existen en el navegador/dispositivo que los creó.

## Evolución a producción

Para reservas reales y datos compartidos haría falta un backend. En Cloudflare, una arquitectura natural sería:

- Pages/Workers Static Assets para el frontend.
- Workers para API, validación y notificaciones.
- D1 para restaurantes, horarios y reservas.
- Turnstile para limitar abuso.
- Un proveedor de email/SMS o integración con el motor de reservas de cada restaurante.

Antes de publicar como servicio real también habría que verificar restaurantes y alérgenos, redactar privacidad/cookies y cumplir RGPD.
