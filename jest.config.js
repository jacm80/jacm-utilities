module.exports = {
    verbose: true,
    transformIgnorePatterns: ['/node_modules/*.js'],
    coveragePathIgnorePatterns: [
        '@jest',
        '/node_modules/',
        'jest.setup.js',
        'jest.config.js',
    ],
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  };
  