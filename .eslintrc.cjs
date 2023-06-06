module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'indent': ['error', 2],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'no-unused-vars': ['warn'],
		'no-console': ['warn'],
		'@typescript-eslint/no-non-null-assertion': 'off'
	}
};
