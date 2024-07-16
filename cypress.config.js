const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.co.uk", // I set this as base URL for my tests because Cypress does not allow cross origin test if not enable
    viewportWidth: 1000,
    viewportHeight: 660, 
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    testIsolation: false,
    video: true, //I included this to see if I could record of my test running

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});