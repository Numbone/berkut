import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import jest from 'eslint-plugin-jest'
import testingLibrary from 'eslint-plugin-testing-library'
import vitest from 'eslint-plugin-vitest'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      prettier
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json', './tsconfig.app.json']
        }
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': 'warn',
      'react/button-has-type': 'error',
      'react/react-in-jsx-scope': ['off'],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'linebreak-style': ['error', 'unix'],
      'prettier/prettier': ['off'],
      'no-trailing-spaces': 'off',
      'no-multiple-empty-lines': ['off']
    }
  },
  {
    files: ['**/*.{spec,test}.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
    plugins: { jest, 'testing-library': testingLibrary, vitest },
    languageOptions: {
      globals: jest.environments.globals.globals
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'testing-library/await-async-queries': 'error',
      'testing-library/no-await-sync-queries': 'error',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'off',
      ...vitest.configs.recommended.rules,
      'vitest/max-nested-describe': ['error', { max: 3 }]
    }
  }
)
