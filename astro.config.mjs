import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Publicado en GitHub Pages. Con dominio propio: site = dominio y quitar base.
export default defineConfig({
  site: "https://malihurtadodiaz01-coder.github.io",
  base: "/el-cielo-interno",
  integrations: [sitemap()],
});
