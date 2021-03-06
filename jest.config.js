module.exports = {
  // Enabled code coverage with istanbul reporter
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx}",
    "<rootDir>/pages/**/*.{js,jsx}",
    // Ignore patterns
    "!<rootDir>/pages/_app.jsx",
    "!<rootDir>/pages/_document.jsx",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/data/**",
    "!**/public/**",
  ],
  // Minimum threshold for the tests to pass [DO NOT DELETE]
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/tests/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/tests/__mocks__/fileMock.js`,

    // Handle module aliases
    "@/(.*)": "<rootDir>/src/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
};
