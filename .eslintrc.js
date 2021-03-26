module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': 0, // Failing: false positives. See: https://stackoverflow.com/questions/63767199/typescript-eslint-no-unused-vars-false-positive-in-type-declarations
    // After updating to eslint 4.0.0. See: https://github.com/typescript-eslint/typescript-eslint/issues/2561
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  env: {
    jest: true,
  },
}
