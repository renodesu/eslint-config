/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    // TODO: Cannot add with shared configs - see https://typescript-eslint.io/docs/linting/type-linting/
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'unused-imports'],
  rules: {
    'linebreak-style': [2, 'unix'],
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'semi',
        },
      },
    ],
    // '@typescript-eslint/class-literal-property-style': [1, 'fields'],
    '@typescript-eslint/prefer-ts-expect-error': 1,
    '@typescript-eslint/consistent-type-imports': 'error',

    // Rules where typescript-eslint overrides core rules
    // Some rules require turning off core rule (eslint) and enabling ts-rule
    // See: https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",

    // Newlines
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react/no-unescaped-entities': 'off',

    // unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // sort-imports
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],

    // Import ordering
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
  },
}
