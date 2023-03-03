const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "u928gc",
    baseUrl:"https://www.stg.kabum.com.br",
    viewportWidth: 1440,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
