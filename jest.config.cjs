module.exports = {
    preset: 'jest-expo', //
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.js$": "babel-jest",
        '^.+\\.ts$': 'ts-jest',      // Transforms TS using ts-jest
        '^.+\\.tsx?$': 'ts-jest'     // Transforms TSX using ts-jest
      },  
    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect"],// or 'jsdom' based on your project
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx',
      "json",
      "node"], // File extensions to test
    collectCoverage: true,
    coverageReporters: [
      "text",
      "lcov"
    ],
    testPathIgnorePatterns: [
      "/node_modules/",
      "/build/"
    ]
  };