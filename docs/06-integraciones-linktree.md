# 06 · Integraciones y mapa del Linktree

Fuente: `https://linktr.ee/elcielointerno` (perfil creado en enero de 2026; bio igual al lema del sitio).

## Enlaces actuales → destino en el sitio nuevo
| # | Enlace del Linktree | URL | Dónde se integra en el sitio |
|---|---|---|---|
| 1 | libro el cielo interno.pdf (Drive) | https://drive.google.com/file/d/1Z1wKLS7_HK28u33E4fDuXHNNUohbWOWK/view?usp=sharing | `/libro` (botón de descarga; ideal alojar copia propia) |
| 2 | WhatsApp | https://wa.me/573164931214 | Botón flotante, `/contacto`, páginas de sesiones (con mensaje prellenado) |
| 3 | Instagram | https://www.instagram.com/el.cielo.interno | Cabecera/pie, inicio |
| 4 | YouTube | https://www.youtube.com/@el.cielo.interno | Video destacado (embed con `lite-youtube`), pie |
| 5 | Facebook | https://www.facebook.com/Carlos Eduardo Hurtado Diaz | Pie (**verificar URL**, contiene espacios) |
| 6 | Threads | https://www.threads.com/@el.cielo.interno | Pie |

Nota: el perfil de Instagram menciona además **cursos** y **sesiones individuales y de pareja** en el Linktree; en la captura del Linktree solo aparecen los 6 enlaces anteriores. [PENDIENTE: confirmar si hay un enlace de cursos].

## Cambios recomendados en el Linktree una vez publicado el sitio
1. Añadir como primer enlace: **Sitio web** → `https://[dominio]?utm_source=linktree&utm_medium=bio`.
2. Dejar libro y WhatsApp (acceso rápido), con UTM:
   - `…/libro?utm_source=instagram&utm_medium=bio&utm_campaign=libro`
3. Actualizar Instagram → campo "sitio web" apuntando al dominio (o seguir en Linktree si se quiere mantener centralizado).

## WhatsApp
- Formato: `https://wa.me/573164931214?text=<mensaje codificado>`.
- Mensajes por página en `03-sitemap-arquitectura-informacion.md`.
- Evento de analítica: `click_whatsapp` con la página de origen.

## YouTube
- Incrustar el video destacado con facade ligera (no cargar iframe hasta el clic).
- [PENDIENTE: elegir video para la portada].

## Analítica (sin cookies)
Eventos: `click_whatsapp`, `download_book`, `click_social`, `open_tarifas`.

## Estrategia UTM
`utm_source` (instagram, linktree, youtube) · `utm_medium` (bio, post, story, reel) · `utm_campaign` (libro, sesiones, evento-XXXX).

## Contenido de redes que alimentará el sitio
- Instagram: carruseles y reels (citas del libro) → sección Reflexiones (fase 2).
- Colaboraciones con Anamaria Aristizabal (`@anamariaristizabal.coach`) → posible sección "Colaboraciones" [PENDIENTE: autorización].
