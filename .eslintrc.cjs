module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 들여쓰기 깊이 제한
    "max-depth": ["error", 2],
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
    "import/extensions": ["off"],
    quotes: ["error", "double"],
  },
};
