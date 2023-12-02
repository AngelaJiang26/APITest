// jest.config.js
module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    testEnvironment: 'node',
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  