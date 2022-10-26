const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "RD 2.0",
    "Test Environment": "STAGING",
    Browser: "Chrome  105.0.5195.127",
    Platform: "Windows 10",
    Parallel: "Features",
    Executed: "Remote",
  },
  jsonDir: 'cucumber-json/',
};

reporter.generate(options);