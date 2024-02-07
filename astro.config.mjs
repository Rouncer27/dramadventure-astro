import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://celebrated-salamander-59336d.netlify.app",
  integrations: [react()]
});