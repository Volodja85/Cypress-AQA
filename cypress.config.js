const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 6000,
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
