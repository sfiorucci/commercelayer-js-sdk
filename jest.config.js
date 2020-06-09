module.exports = {
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  testMatch: ['<rootDir>/**/*(*.)@(spec).[tj]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/', // default
    '<rootDir>/specs/.*/fixtures/', // don't run tests in fixtures
  ],
}
