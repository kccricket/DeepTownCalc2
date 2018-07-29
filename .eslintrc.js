module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-function-return-type': 'error',
    'typescript/explicit-member-accessibility': 'error',
    'typescript/member-naming': 'error',
    'typescript/no-angle-bracket-type-assertion': 'warning',
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'warning',
    'typescript/no-explicit-any': 'warning',
    'typescript/no-inferrable-types': 'warning',
    'typescript/no-parameter-properties': 'off',
    'typescript/no-use-before-define': 'error'
  }
}