module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Transforms JS and JSX using Babel
        '^.+\\.ts$': 'ts-jest',      // Transforms TS using ts-jest
        '^.+\\.tsx?$': 'ts-jest'     // Transforms TSX using ts-jest
      },       // or 'jsdom' based on your project
      moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // File extensions to test
  };
  