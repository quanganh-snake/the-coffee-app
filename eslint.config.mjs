// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";

// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
    react: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    rules: {},
  },
)
