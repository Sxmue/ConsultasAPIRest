// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  // Otras configuraciones de Astro aquí...

  // Configuración de import
  import: {
    includePaths: ["src/components"],
  },
  routes: [
    { match: "routes/*.astro", customElement: true },
    // Otras rutas
  ],
});
