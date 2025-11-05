// eslint.config.mjs
import js from "@eslint/js";

export default [
  js.configs.recommended,

  // For all JS files (ES Modules)
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Browser environment (script.js, UI code, etc.)
  {
    files: ["script.js", "public/**/*.js", "src/**/*.js"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
      },
    },
  },

  // Jest test environment (sum.test.js, script.test.js)
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
      },
    },
  },
];
