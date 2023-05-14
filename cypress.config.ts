import { defineConfig } from "cypress";

export default defineConfig({
  requestTimeout: 15000,
  chromeWebSecurity: false,
  reporter: "mochawesome",
  video: false,
  
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    html: true,
    reportPageTitle: "Cypress-cwa-bce-test-automation-report",
    embeddedScreenshots: true,
  },

  e2e: {
    specPattern : ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}"]
  }
});
