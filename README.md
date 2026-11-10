# Mesa Madrid - reemplazo integral

Sustituye en la raiz del despliegue estos seis archivos:

- `index.html`
- `styles.css`
- `app.js`
- `service-worker.js`
- `manifest.webmanifest`
- `favicon.svg`

No es necesaria ninguna carpeta `assets`: las imagenes de las 100 tarjetas se generan como SVG autocontenido desde `app.js`, y el mapa base esta incluido directamente en `index.html`.

## Publicacion

1. Elimina o reemplaza los archivos anteriores con estos archivos exactos.
2. Conserva los nombres y la ubicacion en la raiz.
3. Publica todos los archivos en el mismo commit.
4. Espera al despliegue y abre la web en una pestana nueva.
5. Haz una recarga forzada (`Ctrl+F5`). Si habia un Service Worker antiguo, en DevTools usa Application > Service Workers > Unregister una sola vez y recarga.

La nueva version del Service Worker usa estrategia de red primero para HTML, CSS y JavaScript; las copias cacheadas solo se usan sin conexion.
