import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/rat-game-spa",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
