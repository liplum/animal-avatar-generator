import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-extra-semi': 'error',
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-var': 'error',
      'prefer-const': ['error', { 'destructuring': 'all' }],
      'quotes': ['error', 'single'],
      'no-duplicate-imports': 'error',
      'comma-spacing': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0 }],
      'object-curly-spacing': ['error', 'always'],
      'padded-blocks': ['error', 'never'],
      'no-multi-spaces': ['error'],
      'space-infix-ops': ['error'],
    },
  },
]
