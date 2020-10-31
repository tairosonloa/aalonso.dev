import '@testing-library/jest-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

mockAllIsIntersecting(true)

// Mocks ENV for next/image. See:
// https://github.com/FDMediagroep/fd-design-system/blob/develop/jest.config.js
process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [],
      domains: ['images.example.com'],
      path: '/_next/image',
      loader: 'default',
  },
};