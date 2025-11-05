// eslint.config.mjs
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // <- THIS FIXES THE IMPORT/EXPORT ERROR
    },
    rules: {
      // Add project rules here if needed
    }
  }
];
