const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  testMatch: [
    "**/src/test/**/*.test.js"
  ],
  transform: {
    '^.+\\.m?[jt]sx?$': 'babel-jest'
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^react-router-dom$': '<rootDir>/node_modules/react-router-dom'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  extensionsToTreatAsEsm: ['.js', '.jsx', '.ts', '.tsx']
};
