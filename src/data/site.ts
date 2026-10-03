export const site = {
  name: "El Cielo Interno",
  author: "Carlos Eduardo Hurtado Díaz",
  tagline:
    "La presencia, la naturaleza, las relaciones y la vida cotidiana son en sí mismas el camino espiritual.",
  whatsapp: "573164931214",
  email: "", // PENDIENTE
  social: {
    instagram: "https://www.instagram.com/el.cielo.interno",
    youtube: "https://www.youtube.com/@el.cielo.interno",
    facebook: "https://www.facebook.com/Carlos%20Eduardo%20Hurtado%20Diaz", // PENDIENTE: verificar URL
    threads: "https://www.threads.com/@el.cielo.interno",
    linktree: "https://linktr.ee/elcielointerno",
  },
  book: "/descargas/el-cielo-interno.pdf",
  bookDrive:
    "https://drive.google.com/file/d/1Z1wKLS7_HK28u33E4fDuXHNNUohbWOWK/view?usp=sharing",
  featuredVideo: "", // PENDIENTE: ID de YouTube, ej. "dQw4w9WgXcQ"
};

export const wa = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/libro", label: "Libro" },
  { href: "/sesiones-individuales", label: "Sesiones individuales" },
  { href: "/sesiones-de-pareja", label: "Sesiones de pareja" },
  { href: "/eventos", label: "Eventos" },
  { href: "/sobre-carlos", label: "Sobre Carlos" },
  { href: "/contacto", label: "Contacto" },
];

// PENDIENTE: completar tarifas reales
export const tarifas = {
  individual: [] as { nombre: string; precio: string; detalle?: string }[],
  pareja: [] as { nombre: string; precio: string; detalle?: string }[],
};

export const indiceLibro = {
  "Primera parte": ["De rayo a rayo","Diferentes rayos del mismo sol","Nubes oscuras","El cielo interno","Apercepción","Espacio al interior y alrededor del cuerpo","La hipnosis colectiva","La luz de la consciencia","No sabemos lo que hacemos","Vivir sin culpa","Permitiendo la meditación","Soltar las amarras"],
  "Segunda parte": ["La aparente cristalización de la mente","¿Qué historia me estoy contando?","Soltar","Realidad virtual","El sueño","La película y la pantalla","El personaje","Satanizar y endiosar","Ya lo somos","¿Qué es lo único que no cambia?","El drama","Desprogramación compasiva"],
  "Tercera parte": ["Sanación","Trascender el destino","La influencia de la consciencia","Siente","Lo místico y el mago"],
};

// Antepone el "base" del sitio (necesario en GitHub Pages: /el-cielo-interno)
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const u = (path: string) => base + path;
