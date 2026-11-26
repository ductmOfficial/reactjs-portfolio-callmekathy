// @ts-check
import eslintReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist/", "coverage/", "playwright-report/", "test-results/"]),

  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.js"],
        },
      },
    },
  },

  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [eslintReact.configs["strict-type-checked"]],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ["*.config.{js,ts}"],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Node scripts that also pass callbacks to the browser through Playwright.
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },

  {
    files: ["**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },

  prettier,
);
