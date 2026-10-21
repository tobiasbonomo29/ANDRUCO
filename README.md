# Andruco FC

Demo móvil con React, Vite, TypeScript y Tailwind CSS. Acceso Twitch, vídeos y datos simulados. Sin backend ni claves.

## Desarrollo

```sh
npm install
npm run dev
```

Inicio abre el dashboard. La bienvenida está en `/#/welcome`. El índice lateral de escritorio da acceso a todas las pantallas. En móvil usa las pestañas y accesos de Inicio.

## Producción y Vercel

```sh
npm run build
npm run preview
```

Importa el repositorio en Vercel y selecciona Vite, comando `npm run build`, salida `dist`. HashRouter evita configurar rewrites.

Favoritos, votos, vídeos vistos, partidos, feed y perfil viven en React Context. Los datos se reinician al recargar; chat y valoraciones se mantienen durante su pantalla. Envíos de plantilla con cooldown simulado de 24 horas. Cartas y miniaturas hechas en CSS. Fuentes desde Google Fonts con respaldo local. Marco móvil en escritorio y pantalla completa con safe areas en móvil.
