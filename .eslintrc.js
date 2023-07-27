// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:perfectionist/recommended-natural",
  ],
  ignorePatterns: [
    "**/react-app-env.d.ts",
    "**/reportWebVitals.ts",
    "setupTests.ts",
    "cypress/**",
    "coverage/**",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "perfectionist"],
  rules: {
    // Todo: these rules might be useful; we should investigate each
    "powerful-rule": "off", // (#123)

    // These rules are enabled by default, but we don't want
    "some-annoying-rule": "off", // (conflicts with XYZ preference)
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
