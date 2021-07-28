
module.exports = {
	settings: {
		'vetur.useWorkspaceDependencies': true,
		'vetur.experimental.templateInterpolationService': true,
	},
	projects: [
		{
			root: './packaging/renderer',
			snippetFolder: './.vscode/vetur/snippets',
			globalComponents: [ './src/components/**/*.vue' ],
		},
		{ root: './packaging/main' },
		{ root: './packaging/preload' },
	],
}