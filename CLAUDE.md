# El Cielo Interno — instrucciones del proyecto

Sitio web de **Carlos Eduardo Hurtado Díaz**, psicólogo y terapeuta transpersonal (@el.cielo.interno).
Lema: *"La presencia, la naturaleza, las relaciones y la vida cotidiana son en sí mismas el camino espiritual."*

- Vista previa pública: https://malihurtadodiaz01-coder.github.io/el-cielo-interno/
- Repositorio: https://github.com/malihurtadodiaz01-coder/el-cielo-interno
- Diseño y marca: ver [DESIGN.md](DESIGN.md). Documentos del proyecto: `docs/` (PRD, branding, sitemap, contenido, técnica, Linktree, roadmap).

## Objetivo del sitio
En orden de prioridad:
1. Que más personas pidan **sesiones individuales y de pareja** (clic a WhatsApp).
2. Llenar los **talleres** (por ejemplo, el Taller virtual El Cielo Interno: 10 sesiones de 2 horas, martes 6:30–8:30 pm).
3. Construir **comunidad** (boletín, grupo, encuentros).
4. Dar a conocer el **libro gratuito** como puerta de entrada.

Cada página termina en un llamado claro: WhatsApp, inscribirse o descargar el libro.

## Reglas de contenido (las más importantes)
- **Los textos de Carlos van tal cual.** Trayectoria, cita, libro y sesiones están transcritos palabra por palabra de su Google Sites. No reescribir, resumir ni "mejorar" su voz sin que él lo pida. Las posibles erratas se señalan, no se corrigen.
- **No inventar** tarifas, fechas, testimonios, credenciales, datos de contacto ni cifras. Si falta un dato, marcarlo `PENDIENTE` y avisar.
- **Testimonios:** solo con autorización de cada persona. Hoy están autorizados los de Catalina Velasteguí, Martha Burgos y Sylvia M. Gómez (`src/data/site.ts`). Se copian textuales.
- Mantener el aviso: las sesiones no sustituyen atención médica o psiquiátrica ni son servicio de urgencias.
- Tono: español de Colombia, tuteo, sereno, cálido, poético sin ser críptico. Invitar, nunca prometer resultados ("sanarás en X días" está prohibido).
- Datos personales: consentimiento explícito (Ley 1581 de 2012). Sin cookies de seguimiento.

## Datos que hay que confirmar con Carlos
- Libro: palabras tapadas en la captura → "nace del agradecimiento **[y de una experiencia]** profunda…" (`src/components/LibroTexto.astro`).
- Pareja: "además **[de reconocer y profundizar]** en lo que sí funciona" (`src/pages/sesiones-de-pareja.astro`).
- Posibles erratas: "ejercicio prácticos", "Sasana", "De buscar culpables…", "De una lucha de poder…".
- Tarifas, video destacado de YouTube, URL real de Facebook, dominio propio.

## Stack y estructura
- **Astro 5**, sitio estático, sin JS en cliente salvo el menú móvil.
- `src/data/site.ts`: nombre, lema, WhatsApp (573164931214), correo (carlose@elcielointerno.com), redes, video, tarifas, testimonios, índice del libro y la función `u()`.
- `src/content/eventos/*.md`: un archivo por evento (ver `_ejemplo.md.txt`).
- `src/components/`: Hero, WaButton, Tarifas, Testimonios, Trayectoria, LibroTexto.
- `src/styles/global.css`: tokens de color, tipografía y utilidades (ver DESIGN.md).
- `public/descargas/el-cielo-interno.pdf`: el libro.

## Reglas técnicas
- El sitio vive bajo `/el-cielo-interno` en GitHub Pages: **todo enlace interno pasa por `u("/ruta")`**, nunca `href="/ruta"` directo.
- Mobile-first: la mayoría llega desde Instagram.
- Accesibilidad AA: un solo `h1` por página, `alt` descriptivo, foco visible, `prefers-reduced-motion`.
- Imágenes con `astro:assets` (`<Image>` / `getImage`).
- Mensajes de WhatsApp prellenados con `wa("…")` según la página.

## Comandos
```bash
npm install
npm run dev
npm run build
npm run deploy
```
`npm run deploy` construye y sube `dist/` a la rama `gh-pages`. A veces falla la primera vez en Windows; repetir el comando.

## Flujo de trabajo
1. Cambiar, ejecutar `npm run build` y revisar que no haya errores.
2. Commit en español, describiendo el cambio.
3. `git push` y `npm run deploy` para actualizar el link público.
4. Comprobar en el link público que el cambio se ve.

No publicar, enviar mensajes ni contactar a nadie en nombre de Carlos sin que se pida.
