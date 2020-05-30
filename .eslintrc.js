module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
  },
  env: {
    jest: true,
  },
}
