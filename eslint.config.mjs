import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig({
  files: ["**/*.js"], // lint all JS files
  languageOptions: {
    globals: globals.browser, // browser globals like window, document
    sourceType: "script",
    ecmaVersion: 2021,
  },
  rules: {
    semi: ["error", "always"], // require semicolons
    // You can add more rules here if needed
  },
});
