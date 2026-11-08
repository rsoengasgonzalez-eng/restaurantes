# Publicación rápida: GitHub + Cloudflare Pages

## 1) Subir a GitHub desde la web

1. Descomprime `mesa-madrid-cloudflare.zip`.
2. En GitHub, crea un repositorio, por ejemplo `mesa-madrid`.
3. En el repositorio: **Add file → Upload files**.
4. Arrastra todos los archivos y la carpeta `assets` desde dentro de `mesa-madrid`.
5. Verifica que `index.html`, `styles.css` y `app.js` estén en la raíz, no dentro de otra subcarpeta.
6. Escribe `Primera versión de Mesa Madrid` y pulsa **Commit changes**.

## 2) Conectar Cloudflare Pages

1. Abre el panel de Cloudflare.
2. Ve a **Workers & Pages → Create application → Pages → Connect to Git**.
3. Conecta GitHub con acceso al repositorio `mesa-madrid`.
4. Configura:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: vacío (o `exit 0` si es obligatorio)
   - Build output directory: `.`
5. Pulsa **Save and Deploy**.
6. Al terminar, abre la URL `https://…pages.dev` y prueba filtros, mapa, favoritos y una solicitud de reserva.

## 3) Mensaje para WhatsApp

> 🍽️ **¿Dónde comemos?**
>
> He preparado Mesa Madrid para buscar restaurantes por zona y precio, comprobar opciones para alergias y organizar la reserva.
>
> 👉 PEGA_AQUÍ_TU_URL.pages.dev
>
> Los locales y reservas de esta primera versión son de demostración, pero ya podemos probar la experiencia y decidir cómo convertirla en servicio real.

## 4) Actualizaciones

Cada cambio que confirmes en la rama `main` de GitHub volverá a desplegarse automáticamente y la URL seguirá siendo la misma.
