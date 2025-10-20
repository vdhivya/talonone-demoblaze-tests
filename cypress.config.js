const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    defaultBrowser: "chrome",
    video: true,    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
