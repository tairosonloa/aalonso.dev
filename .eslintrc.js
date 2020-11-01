module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': 0, // Failing: false positives. See: https://stackoverflow.com/questions/63767199/typescript-eslint-no-unused-vars-false-positive-in-type-declarations
  },
  env: {
    jest: true,
  },
}
