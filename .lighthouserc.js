module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'first-contentful-paint': ['error', { maxNumericValue: 2200 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2800 }],
        interactive: ['error', { maxNumericValue: 4200 }],
        'dom-size': ['error', { maxNumericValue: 3000 }],
        'uses-responsive-images': ['error', { maxLength: 0 }],
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
        viewport: 'error',
        'resource-summary:document:size': ['error', { maxNumericValue: 14000 }],
        'resource-summary:font:count': ['error', { maxNumericValue: 2 }],
        'resource-summary:third-party:count': ['error', { maxNumericValue: 2 }],
        'non-composited-animations': 'off',
        'font-display': 'off',
        'unsized-images': 'off',
        'unused-css-rules': ['warn', { maxNumericValue: 0 }],
        'unused-javascript': ['warn', { maxNumericValue: 0 }],
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
