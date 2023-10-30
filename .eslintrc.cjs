module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
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
    sourceType: "module",
  },
  ignorePattenrs: ["__tests__/*.js"],
  rules: {
    semi: [2, "always"],
    "max-depth": ["error", 2],
    "import/prefer-default-export": "off",
    "import/extensions": ["off"],
    "class-methods-use-this": "off",
  },
};
