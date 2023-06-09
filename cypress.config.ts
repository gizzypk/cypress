import { defineConfig } from "cypress";

export default defineConfig({
  requestTimeout: 15000,
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",
  video: false,
  
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    html: true,
    inlineAssets: true,
    reportPageTitle: "Cypress-test-automation-report",
    embeddedScreenshots: true,
  },

  e2e: {
    specPattern : ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  }
});
