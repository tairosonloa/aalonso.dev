module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  defaultSeverity: 'warning',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'return', 'else', 'error'],
      },
    ],
  },
}