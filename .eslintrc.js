module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "semi": "off",
    "indent": ["error", 2],
    "array-bracket-spacing":["error","always"],
    "object-curly-spacing":["error","always"],
    "comma-dangle": ["error", {
      "objects": "never"
    }],
    "quotes": [
      "error",
      "single"
    ],
    "no-multiple-empty-lines": [
      "error",
      {"max": 1}
    ],
    "@typescript-eslint/semi": [
      "error", "never"
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ]
  },
};
