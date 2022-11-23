const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9sij7v",

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000/",
  },
});
