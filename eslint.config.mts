import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: __dirname, // ✅ Explicit root
        project: ['./tsconfig.json'], // or multiple if needed
      },
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      semi: ['error', 'never'],
      'no-console': 'warn',
      'prefer-const': 'error',
      'react/react-jsx-scope': 'off',
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': ['error', {
        skipBlankLines: true,
        ignoreComments: false,
      }],
      'spaced-comment': ['error', 'always', {
        markers: ['/'],
      }],
      '@typescript-eslint/triple-slash-reference': ['error', {
        lib: 'always',
        path: 'always',
        types: 'always',
      }],
    },
    ignores: ['generated/**/*']
  },
  tseslint.configs.recommended,
])
