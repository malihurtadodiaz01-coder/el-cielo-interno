import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/eventos" }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    modalidad: z.enum(["presencial", "virtual"]),
    lugar: z.string().optional(),
    enlace: z.string().url().optional(),
  }),
});

export const collections = { eventos };
