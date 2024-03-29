module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "no-trailing-spaces": "warn",
    "quotes": "warn",
    "semi": "warn",
    "no-extra-semi": "warn",
    "prefer-const": "warn",
    "max-params": ["warn", 5],
    "no-duplicate-imports": "warn",
    "array-bracket-spacing": "warn",
    "arrow-spacing": "warn",
    "indent": ["warn", 2],
    "key-spacing": "warn",
    "no-multi-spaces": "warn",
    "object-curly-spacing": ["warn", "always"],
  },
}
