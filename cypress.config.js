const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:4200',
  },
})
