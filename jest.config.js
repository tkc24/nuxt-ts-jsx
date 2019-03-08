module.exports = {
  globals: {
    'ts-jest': {
      useBabelrc: true,
      tsConfigFile: 'tsconfig.test.json'
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'tsx'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    "^.+\\.tsx?$": "ts-jest"
  },
  "collectCoverage": true,
  "collectCoverageFrom": [
      "<rootDir>/components/**/*.vue",
      "<rootDir>/pages/**/*.vue"
  ]
}
