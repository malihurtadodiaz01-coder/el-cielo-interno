# 05 · Especificación técnica — Astro

## Stack
| Capa | Elección | Motivo |
|---|---|---|
| Framework | **Astro 5** (salida estática) | HTML mínimo, rápido, ideal para contenido |
| Estilos | CSS con variables (tokens del branding) o Tailwind v4 | Consistencia con el branding book |
| Contenido | **Content Collections** (Markdown/MDX + Zod) | Eventos, reflexiones y FAQ editables en archivos |
| Imágenes | `astro:assets` (`<Image/>`, WebP/AVIF) | Optimización automática |
| Fuentes | Autoalojadas con `@fontsource` | Sin dependencias externas |
| SEO | `@astrojs/sitemap`, metadatos propios, JSON-LD | Posicionamiento local |
| Analítica | Plausible / Umami | Sin cookies |
| Hosting | Netlify, Vercel o Cloudflare Pages | Gratis, CDN, HTTPS |
| Formularios (fase 2) | Formspree / Buttondown | Sin backend |
| CMS opcional | Decap CMS o Keystatic | Que Carlos edite sin código |

## Estructura de carpetas
```
el-cielo-interno/
├─ astro.config.mjs
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ descargas/el-cielo-interno.pdf
├─ src/
│  ├─ assets/ (fotos, cielos, portada)
│  ├─ components/
│  │  ├─ Header.astro  Footer.astro  Hero.astro
│  │  ├─ WhatsAppButton.astro  Quote.astro  Card.astro
│  │  ├─ Accordion.astro  BookCover.astro  SocialLinks.astro
│  ├─ content/
│  │  ├─ config.ts
│  │  ├─ eventos/*.md
│  │  └─ reflexiones/*.md   (fase 2)
│  ├─ data/
│  │  ├─ site.ts      (nombre, lema, URLs de redes)
│  │  └─ tarifas.ts   (precios)
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro  sobre-carlos.astro  libro.astro
│  │  ├─ sesiones-individuales.astro  sesiones-de-pareja.astro
│  │  ├─ eventos.astro  contacto.astro
│  │  ├─ privacidad.astro  aviso-legal.astro  404.astro
│  └─ styles/tokens.css  global.css
└─ package.json
```

## Tokens CSS (de 02-branding-book)
```css
:root{
  --cielo-profundo:#1F4E9C; --cielo-medio:#4F86C6; --cielo-claro:#CFE3F5;
  --nube:#F7F9FC; --sol:#F2C879; --noche:#1E2430; --bruma:#6B7685;
  --font-title:"Cormorant Garamond",serif; --font-body:"Lato",system-ui,sans-serif;
  --radius:16px;
}
```

## Datos centralizados (`src/data/site.ts`)
```ts
export const site = {
  name: "El Cielo Interno",
  tagline: "La presencia, la naturaleza, las relaciones y la vida cotidiana son en sí mismas el camino espiritual.",
  url: "https://[PENDIENTE-dominio]",
  whatsapp: "573164931214",
  social: {
    instagram: "https://www.instagram.com/el.cielo.interno",
    youtube: "https://www.youtube.com/@el.cielo.interno",
    facebook: "https://www.facebook.com/Carlos Eduardo Hurtado Diaz",
    threads: "https://www.threads.com/@el.cielo.interno",
    linktree: "https://linktr.ee/elcielointerno",
  },
  book: "/descargas/el-cielo-interno.pdf",
};
export const wa = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
```
> El enlace de Facebook del Linktree contiene espacios; verificar la URL real del perfil.

## Content collection de eventos (`src/content/config.ts`)
```ts
import { defineCollection, z } from "astro:content";
export const collections = {
  eventos: defineCollection({
    type: "content",
    schema: z.object({
      titulo: z.string(), fecha: z.date(),
      modalidad: z.enum(["presencial","virtual"]), lugar: z.string().optional(),
      enlace: z.string().url().optional(),
    }),
  }),
};
```

## JSON-LD sugerido
`Person` (Carlos Eduardo Hurtado Díaz, `sameAs` redes), `Book` (ISBN 978-958-49-7710-6), `ProfessionalService` (sesiones). 

## Requisitos de calidad
- Lighthouse ≥ 95 en las 4 categorías (móvil).
- Imágenes con `width/height`, `loading="lazy"` salvo el héroe.
- Una sola `h1` por página, jerarquía correcta, enlaces con texto descriptivo.
- Foco visible, navegación por teclado, `lang="es-CO"`.
- Sin dependencias JS en cliente salvo el menú móvil y el acordeón (`<details>` nativo).

## Comandos
```bash
npm create astro@latest el-cielo-interno -- --template minimal
cd el-cielo-interno
npx astro add sitemap
npm i @fontsource/lato @fontsource/cormorant-garamond
npm run dev
npm run build
```

## Despliegue
1. Repositorio Git → conectar a Netlify/Cloudflare Pages.
2. Dominio propio + HTTPS + redirección `www`.
3. Variables de entorno: `PUBLIC_ANALYTICS_DOMAIN`.
4. Redirección `/linktree` → `https://linktr.ee/elcielointerno` (opcional).
