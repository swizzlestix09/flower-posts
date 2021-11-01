module.exports = {
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  "testMatch": [
    "**/__tests__/**/*.test.[jt]s?(x)"
  ],
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!@private-repo-name)/"
  ]
};