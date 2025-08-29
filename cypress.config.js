const path = require("path");
const { defineConfig } = require("cypress");
const envTarget = process.env.ENV || "qauto";
const envs = require(path.resolve(__dirname, "cypress/env.json"));

module.exports = defineConfig({
  //baseUrl: envs[envTarget].baseUrl,
  env: {
    email: envs[envTarget].email,
    password: envs[envTarget].password,
  },
  // reporter: "mochawesome",
  // reporterOptions: {
  //   reportDir: "cypress/reports",
  //   overwrite: false,
  //   html: true,
  //   json: true,
  // },
  e2e: {
    baseUrl: envs[envTarget].baseUrl,
    // baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space/",
    //baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space/",
    //specPattern: "cypress/e2e/ДЗ21.1/**/*.cy.js",
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 6000,
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
