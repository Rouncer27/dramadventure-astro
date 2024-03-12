import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dramadventure.com",
  integrations: [react(), sitemap()],
  image: {
    domains: ["dramadventure.swbdatabases2.ca"],
  },
});
