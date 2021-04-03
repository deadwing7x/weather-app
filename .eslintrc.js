/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-dupe-keys */
const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    amd: true,
    node: true,
  },
  plugins: ['prettier', 'jest', 'jsx-a11y', 'import', 'react'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/no-multi-comp': [2, { ignoreStateless: false }],
    'react/display-name': 0,
    'react/jsx-pascal-case': 2,
    'react/prefer-read-only-props': 2,
    'react/sort-prop-types': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-max-depth': [1, { max: 4 }],
    'react/jsx-no-literals': 2,
    'react/no-typos': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/prefer-es6-class': 2,
    'react/boolean-prop-naming': 2,
    'react/function-component-definition': 2,
    'react/sort-comp': [
      2,
      {
        order: [
          'instance-variables',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          'render',
        ],
      },
    ],
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/prefer-optional-chain': 1,
    '@typescript-eslint/no-unnecessary-qualifier': 1,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-definitions': 2,
    '@typescript-eslint/no-base-to-string': 2,
    '@typescript-eslint/prefer-ts-expect-error': 2,
    '@typescript-eslint/prefer-readonly': 2,
    '@typescript-eslint/prefer-readonly-parameter-types': 2,
    '@typescript-eslint/explicit-module-boundary-types': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/naming-convention': [
      2,
      { selector: 'variable', format: ['camelCase', 'PascalCase'] },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'no-use-before-define': 2,
    'no-var': 2,
    eqeqeq: 2,
    'prefer-const': 2,
    'prefer-template': 2,
    'prefer-spread': 2,
    'spaced-comment': 1,
    'max-lines': [2, { max: 400, skipComments: true }],
    'max-lines-per-function': [2, { max: 75, skipComments: true }],
    'max-statements-per-line': 2,
    'multiline-comment-style': 2,
    'no-shadow': 2,
    'no-restricted-globals': [
      2,
      {
        name: 'fdescribe',
        message: 'Do not commit fdescribe. Use describe instead.',
      },
    ],
    'import/newline-after-import': [2, { count: 1 }],
    'import/no-duplicates': 2,
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/no-named-as-default': 0,
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'class', 'try', 'for', 'if', 'switch', 'while'],
      },
    ],
    'lines-between-class-members': [2, 'always'],
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
