module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 5000 }],
        interactive: ['error', { maxNumericValue: 5000 }],
        'resource-summary:document:size': ['error', { maxNumericValue: 14000 }],
        'resource-summary:font:count': ['error', { maxNumericValue: 3 }],
        'resource-summary:third-party:count': ['error', { maxNumericValue: 3 }],
        'dom-size': ['error', { maxNumericValue: 3000 }],
        'uses-responsive-images': ['error', { maxLength: 0 }],
        'unused-javascript': ['warn', { maxNumericValue: 0 }],
        'unused-css-rules': ['warn', { maxNumericValue: 0 }],
        viewport: 'error',
        'color-contrast': 'off',
        'font-display': 'off',
        'unsized-images': 'off',
        'uses-rel-preconnect': 'off',
        'non-composited-animations': 'off',
      },
    },
    collect: {
      staticDistDir: './out',
    },
    // upload: {
    //   target: "filesystem"
    // }
  },
}
