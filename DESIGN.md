# El Cielo Interno — sistema de diseño

Guía para mantener el sitio coherente. Los valores salen de `src/styles/global.css`; si cambias uno, cámbialo aquí también.

## Idea central
**La consciencia es el cielo; pensamientos y emociones son nubes que pasan.**
Todo el diseño parte de ahí: cielo azul, nubes, luz suave, mucho espacio para respirar. Calma, nunca saturación.

Personalidad: sereno, cálido, lúcido, cercano. Ni esotérico ni clínico.

## Color
| Token | Hex | Uso |
|---|---|---|
| `--cielo-profundo` | `#1f4e9c` | Títulos, botones primarios, enlaces. Es el azul de la portada del libro. |
| `--cielo-medio` | `#4f86c6` | Hover de botones y enlaces |
| `--cielo-claro` | `#cfe3f5` | Fondo de secciones alternas (`.alt`), bordes de tarjetas |
| `--nube` | `#f7f9fc` | Fondo general |
| `--sol` | `#f2c879` | Acento de luz: foco de teclado, filete de citas, comillas, subrayado del menú activo |
| `--noche` | `#1e2430` | Texto principal y pie de página |
| `--bruma` | `#5d6878` | Texto secundario |

Reglas:
- `--sol` nunca como color de texto sobre fondo claro (no tiene contraste).
- Secciones alternan `nube` y `cielo-claro`; nunca dos `.alt` seguidas.
- El verde de WhatsApp (`#25d366`) solo en el botón flotante de WhatsApp.
- Prohibido: rojos, negros pesados, degradados morados, colores saturados.

## Tipografía
| Rol | Fuente | Uso |
|---|---|---|
| Títulos | **Cormorant Garamond** 400/500 e itálica | `h1`–`h3`, citas, nombres en testimonios |
| Texto e interfaz | **Lato** 400/700 | Párrafos, menú, botones, etiquetas |

- Fuentes autoalojadas con `@fontsource` (sin Google Fonts en el sitio).
- `h1`: `clamp(2.6rem, 7vw, 4.8rem)`, peso 400. `h2`: `clamp(1.8rem, 4vw, 2.6rem)`. `h3`: 1.5rem.
- Texto: 1.0625rem, interlineado 1.7, ancho máximo de lectura 760px (`.narrow`).
- Etiquetas en mayúsculas de Carlos (ACOMPAÑAMIENTO INDIVIDUAL): `h2.label`, Lato 700, 1.05rem, `letter-spacing: .04em`.
- Citas: Cormorant itálica, centradas, con filete superior `--sol`.

## Espacio y layout
- Contenedor: `.wrap` (máx. 1080px) y `.narrow` (máx. 760px), siempre con 1rem de margen lateral.
- Secciones: `padding: clamp(3rem, 8vw, 6rem) 0`.
- Rejillas: `.grid2` y `.split` con `auto-fit, minmax(280px, 1fr)`; en móvil quedan en una columna.
- Radio: `--radius: 16px` en tarjetas e imágenes; botones `999px` (píldora).

## Componentes
- **Hero** (`Hero.astro`): foto de cielo de la portada del libro con velo azul (`rgba(31,78,156,.30→.45)`), título blanco centrado, subtítulo corto, máximo dos botones. Variante `compact` para páginas internas.
- **Botón primario** (`.btn`): fondo `--cielo-profundo`, texto blanco, píldora; hover sube 2px y pasa a `--cielo-medio`. `.btn.ghost` para usar sobre el cielo.
- **Botón de WhatsApp** (`WaButton.astro`): mismo estilo que `.btn`, con mensaje prellenado según la página.
- **WhatsApp flotante**: abajo a la derecha, verde de WhatsApp, en todas las páginas.
- **Tarjeta** (`.card`): fondo blanco, borde 1px `--cielo-claro`, radio 16px, sombra muy suave azulada. Solo para elementos que deben separarse (sesiones, testimonios, eventos).
- **Tarifas** (`Tarifas.astro`): `<details>` nativo, título en Cormorant.
- **Testimonios** (`Testimonios.astro`): tarjetas con comilla grande en `--sol`, texto en Cormorant, nombre en Lato 700 azul.
- **Aviso** (`.notice`): fondo crema, borde izquierdo `--sol`, para avisos legales o pendientes.
- **Cabecera**: fija arriba, fondo `nube` translúcido con desenfoque; menú hamburguesa por debajo de 1000px.
- **Pie**: fondo `--noche`, enlaces `--cielo-claro`.

## Imágenes
- Cielos con nubes, luz natural, naturaleza. Nada de stock genérico de "yoga en la playa".
- Retratos de Carlos con luz natural. La foto actual sale de una captura: reemplazar por la original en alta.
- Portada del libro: `src/assets/portada.jpg`. Cielo del hero: `src/assets/cielo.jpg`, recortado de la portada.
- Todas con `alt` descriptivo y servidas con `astro:assets` (WebP).

## Movimiento
Lento y sutil: transiciones de 0.3s en hover, sin animaciones de entrada que oculten contenido. Respetar `prefers-reduced-motion` (ya está en `global.css`).

## Iconos y logo
- Favicon: sol con rayos dorados sobre círculo azul (`public/favicon.svg`).
- No hay logo formal: se usa el wordmark "El Cielo Interno" en Cormorant. En Instagram el avatar es un círculo azul con el nombre en amarillo.
- Sin emojis como iconos en el sitio.

## Accesibilidad
- Contraste AA en todo texto. Foco visible con contorno `--sol`.
- Enlace "Saltar al contenido" al inicio.
- Un `h1` por página; jerarquía de títulos sin saltos.

## Antes de agregar algo nuevo
1. ¿Usa los tokens existentes? No agregar colores ni fuentes nuevas sin actualizar este documento.
2. ¿Funciona a 375px de ancho sin scroll horizontal?
3. ¿Termina en un llamado claro (WhatsApp, inscribirse, descargar)?
