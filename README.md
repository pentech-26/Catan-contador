# Contador de Catan · v1.0

Webapp para llevar los puntos de victoria en Catan y sus expansiones (Navegantes, Ciudades y Caballeros, variantes, mapas y tableros propios).

- **Idiomas:** español, catalán, inglés, francés, alemán e italiano. Detecta el idioma del móvil (cualquier otro → inglés) y el botón del globo permite cambiarlo. Los textos están en el objeto `T` de `index.html`, y los nombres de escenarios en `SCN`.
- **Archivo de partidas:** «Terminar partida» guarda la partida en el dispositivo y muestra el podio con revancha. El archivo se abre con el botón de arriba a la derecha.

## Antes de publicar: clave y enlace de compra
Abre `index.html` y busca estas dos líneas (cerca del final):

```js
const LICENSE_KEY="CATAN-PENTECH-2026";        // ← cambia aquí la clave
const BUY_URL="https://buymeacoffee.com/pentech"; // ← pon aquí el enlace de compra
```

- La clave no distingue mayúsculas ni espacios.
- Sin clave se pueden jugar 3 partidas de prueba (cada «Nueva partida» o «Revancha» cuenta una).
- Si cambias algo y ya la tenías instalada, sube también `sw.js` cambiando `catan-contador-v24` por `v25` para que los móviles cojan la versión nueva.

## Publicar en GitHub Pages
1. Sube todos estos archivos a la raíz del repositorio.
2. En el repositorio: Settings → Pages → Branch `main`, carpeta `/ (root)` → Save.
3. Abre la dirección que te dé GitHub. En el móvil puedes «Añadir a pantalla de inicio» para usarla como app, también sin conexión.

Contador de puntos no oficial, creado de forma independiente por PenTech. No está afiliado, patrocinado ni aprobado por CATAN GmbH ni por Devir. CATAN es una marca registrada de CATAN GmbH. El juego está editado en España por Devir.
