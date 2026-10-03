# 01 · PRD — Sitio web El Cielo Interno

**Versión:** 0.1 · **Fecha:** 2026-10-03 · **Estado:** Borrador

## 1. Resumen
Sitio web propio (Astro) que reemplaza el borrador de Google Sites y centraliza lo que hoy vive disperso en el Linktree: presentación del terapeuta, descarga gratuita del libro, sesiones individuales y de pareja, eventos y contacto por WhatsApp.

**Lema:** *"La presencia, la naturaleza, las relaciones y la vida cotidiana son en sí mismas el camino espiritual."*

## 2. Problema
- La presencia digital está repartida (Instagram, Linktree, YouTube, Facebook, Threads, Drive) y no hay un lugar con identidad propia.
- El Google Sites tiene plantillas sin editar, es difícil de posicionar en buscadores y limita el diseño.
- La descarga del libro depende de un enlace de Drive sin contexto ni captura de interesados.

## 3. Objetivos
1. Convertir visitas en **conversaciones por WhatsApp** (sesiones individuales y de pareja).
2. Aumentar descargas del libro y, si se decide, construir una lista de correo.
3. Posicionar "El Cielo Interno" y a Carlos como referente en psicología transpersonal y presencia.
4. Tener un sitio rápido, calmado y fácil de actualizar sin saber programar.

### Métricas de éxito (a 90 días del lanzamiento)
| Métrica | Meta inicial |
|---|---|
| Clics a WhatsApp | [PENDIENTE: definir línea base] |
| Descargas del libro | [PENDIENTE] |
| Lighthouse (móvil) | ≥ 95 en Rendimiento, SEO, Accesibilidad |
| Tráfico desde Instagram/Linktree | medible por UTM |

## 4. Público
- **Personas en búsqueda interior** (25–55 años, Colombia y Latinoamérica hispanohablante) que llegan por Instagram o recomendación.
- **Parejas** que quieren trabajar la relación de forma consciente.
- **Lectores del libro** que quieren conocer al autor y acompañamiento personal.

## 5. Alcance (MVP)
Incluye: Inicio, Sobre Carlos, Libro, Sesiones individuales, Sesiones de pareja, Eventos, Contacto, páginas legales, SEO básico, analítica respetuosa de la privacidad.

Fase 2: blog/reflexiones (poemas y fragmentos del libro), YouTube embebido, formulario de lista de correo, calendario de reservas, cursos.

Fuera de alcance: pagos en línea, área de miembros, tienda.

## 6. Requisitos funcionales
| ID | Requisito | Prioridad |
|---|---|---|
| RF-01 | Navegación clara con 6 secciones y botón fijo de WhatsApp | Alta |
| RF-02 | Descarga del libro (enlace a PDF alojado o Drive) con página de contexto | Alta |
| RF-03 | Páginas de sesión con tarifas desplegables y CTA a WhatsApp con mensaje prellenado | Alta |
| RF-04 | Enlaces a Instagram, YouTube, Facebook, Threads en cabecera/pie | Alta |
| RF-05 | Página de eventos editable (lista de próximos y pasados) | Media |
| RF-06 | Fragmentos/citas del libro rotativos en el inicio | Media |
| RF-07 | Formulario de correo (fase 2) | Media |
| RF-08 | Blog en Markdown/MDX (fase 2) | Baja |

## 7. Requisitos no funcionales
- **Rendimiento:** HTML estático, imágenes optimizadas, cero JS innecesario.
- **Accesibilidad:** WCAG 2.2 AA, contraste, foco visible, `prefers-reduced-motion`.
- **SEO:** metadatos, Open Graph, `sitemap.xml`, datos estructurados (`Person`, `Book`, `ProfessionalService`).
- **Privacidad:** analítica sin cookies (Plausible o similar), aviso de tratamiento de datos (Ley 1581 de 2012, Colombia).
- **Idioma:** español (es-CO). Estructura lista para añadir inglés después.
- **Responsive:** diseño *mobile-first* (la mayoría llega desde Instagram).

## 8. Consideraciones éticas del contenido
Sitio de acompañamiento psicológico y espiritual: no prometer curas ni resultados clínicos; aclarar que las sesiones no sustituyen atención médica o psiquiátrica; incluir mención a la formación profesional verificable [PENDIENTE: confirmar tarjeta profesional/registro].

## 9. Riesgos
| Riesgo | Mitigación |
|---|---|
| Faltan tarifas, fotos y testimonios | Lista en el roadmap; usar secciones ocultables |
| Enlace de Drive puede caerse o limitar descargas | Alojar el PDF en el propio sitio |
| Datos personales en formularios | Evitar formularios en MVP; usar WhatsApp |

## 10. Preguntas abiertas
1. ¿Dominio? (`elcielointerno.com` / `.co`) [PENDIENTE]
2. ¿Cuál es el correo de contacto? [PENDIENTE]
3. ¿Hay tarifas públicas o solo "por WhatsApp"? [PENDIENTE]
4. ¿Sesiones presenciales (ciudad) y/o virtuales? [PENDIENTE]
5. ¿Anamaria Aristizabal tendrá página o mención como colaboradora? [PENDIENTE]
6. ¿Se mantiene la licencia abierta del libro con descarga libre? (sí, según el libro)
