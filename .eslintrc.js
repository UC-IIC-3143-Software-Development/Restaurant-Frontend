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
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "react-hooks", "@typescript-eslint", "perfectionist"],
	ignorePatterns: [
		".eslintrc.js",
		"**/react-app-env.d.ts",
		"**/reportWebVitals.ts",
		"setupTests.ts",
	],
	rules: {
		// These rules are enabled by default, but we don't want
		"some-annoying-rule": "off", // (conflicts with XYZ preference)

		// Todo: these rules might be useful; we should investigate each
		"powerful-rule": "off", // (#123)
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
