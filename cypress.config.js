const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    "reporter": "mochawesome",
    "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('task', {downloadFile})
    },
  },
});
