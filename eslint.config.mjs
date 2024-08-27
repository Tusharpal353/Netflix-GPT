import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

const isCI = process.env.CI === 'true';

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Example rule adjustments
      'no-console': isCI ? 'warn' : 'error',
      'no-debugger': isCI ? 'warn' : 'error',
      // Add or adjust more rules as needed
    },
  },
];
