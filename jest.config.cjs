/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true, tsconfig: 'tsconfig.jest.json' }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
