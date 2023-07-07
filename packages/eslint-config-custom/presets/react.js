module.exports = {
  extends: ['plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  settings: {
    react: {
      version: '18.0.0',
    },
  },
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-tag-spacing': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',

    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useIsomorphicLayoutEffect|usePaintEffect|useIsomorphicPaintEffect|useRecoilCallback)',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
  },
};
