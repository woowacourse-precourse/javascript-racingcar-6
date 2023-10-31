module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
				jest: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		rules: {
			// 들여쓰기 깊이 제한
			'max-depth': ['error', 2],
			// 함수의 매개변수 개수 제한
			'max-params': ['error', 3],
			// 함수의 길이 제한
			'max-lines-per-function': ['error', { max: 10 }],
		},
	},
};
