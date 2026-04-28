# 🎥 Platzi Cinema Mode

Extensión para navegador que activa un modo cine en el reproductor de cursos de Platzi.

## ✨ ¿Qué hace?

- Inserta un botón flotante en las páginas de cursos de Platzi.
- Permite alternar entre **Modo Cine** y **Modo Normal**.
- Ajusta la interfaz para una experiencia de video más inmersiva.

## 🚀 Instalación

1. Clona o descarga este repositorio.
2. Abre tu navegador y ve a la página de extensiones (por ejemplo, `chrome://extensions/`).
3. Activa el modo desarrollador.
4. Selecciona "Cargar descomprimida" y elige la carpeta del proyecto.

## 📄 Archivos principales

- `manifest.json` - Configuración de la extensión.
- `content.js` - Lógica que inyecta el botón y alterna el modo cine.
- `styles.css` - Estilos adicionales aplicados por la extensión.
- `icons/` - Iconos utilizados en la extensión.

## 🧩 Cómo funciona

- El `content.js` ejecuta una función que inyecta un botón en las páginas que coinciden con `*://platzi.com/cursos/*`.
- Al hacer clic, se activa o desactiva la clase `extension-cinema-mode` en el `body`.
- El botón cambia su texto entre `🎬 MODO CINE` y `📺 MODO NORMAL`.

## 🛠️ Permisos

- Usa el permiso `storage` en el manifiesto para poder guardar configuraciones o datos si se implementan en el futuro.

## 💡 Notas

- Está pensado para usarse en el sitio de Platzi y solo en rutas de cursos.
- La extensión no requiere empaquetado adicional para probarla en modo desarrollador.

## 📌 Créditos

Desarrollado como una mejora de experiencia para el reproductor de Platzi.
