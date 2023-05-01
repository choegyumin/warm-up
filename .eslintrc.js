/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', '@emotion', '@tanstack/query'],
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
    // 'plugin:jsx-a11y/recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  settings: {
    'import/external-module-folders': ['.yarn'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': ['error'],

    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: false, ignoreRestArgs: false }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_.*$|^error$|^event$',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',

    'import/no-anonymous-default-export': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['type', ['builtin', 'external', 'internal'], ['parent', 'sibling', 'index'], 'object'],
        'newlines-between': 'ignore',
      },
    ],
  },
};
