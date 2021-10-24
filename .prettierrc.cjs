// @ts-check

/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: ['prettier-plugin-organize-imports'],
	arrowParens: 'always',
	bracketSpacing: true,
	printWidth: 120,
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: '*.md',
			options: {
				tabWidth: 2,
				useTabs: false
			}
		}
	]
};
