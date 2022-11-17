const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9sij7v",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
    excludeSpecPattern: "**/example/*",
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
  },
});
