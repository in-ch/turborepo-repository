module.exports = {
  plugins: ['import', '@typescript-eslint', 'react', 'prettier'],
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:json/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'prefer-const': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.jsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    // note you must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
};
