1.
explain Software configuration management is often associated with version control, CI/CD, and DevOps. Using your preferred LLM to assist you, create a static site (HTML/CSS/JS) hosted on GitHub Pages with a GitHub Actions workflow that automatically packages and publishes the site whenever you push to your GitHub repository (20 pts). The static site should contain a screenshot of the ugliest UI that you've ever seen as well as an explanation on what you would do to improve it (5 pts). Include an automated quality check by adding a JS linter step that runs before deployment and test it by breaking a JS rule such as omitting a required semicolon (20 pts). Share the link to your GitHub repository (make sure it is set to public) and all of your LLM prompts here (5 pts).

2.provide the detailed steps for the rest of the steps

3.I cant find .eslintrc.json but I have eslint.cnfiguration.mjs?

4. import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
]);

it has this code, revise it

5. https://gemini.google.com/share/40e7c1c0b4f8
