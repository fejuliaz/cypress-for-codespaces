const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.js',
  },
})