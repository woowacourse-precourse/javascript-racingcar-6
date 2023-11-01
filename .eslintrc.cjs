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
            'max-depth': ['error', 2],

            'max-params': ['error', 3],
            'max-lines-per-function': ['error', { max: 10 }],
        },
    },
};
