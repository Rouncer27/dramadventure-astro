import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://dramadventure.com",
  integrations: [react()],
  image: {
    domains: ["dramadventure.swbdatabases2.ca"],
  },
});
