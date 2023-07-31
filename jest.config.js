module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFiles: ["<rootDir>/src/__test__/setupTests.js"],
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTestsAfterEnv.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/path/to/empty/module.js",
  },
};