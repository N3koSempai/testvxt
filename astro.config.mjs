import { defineConfig } from "astro/config";

// En GitHub Actions, SITE y BASE se definen en el workflow
// (.github/workflows/deploy.yml). En local quedan sin definir y no afecta.
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE,
});
