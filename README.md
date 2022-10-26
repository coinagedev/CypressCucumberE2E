![project Logo](/)

# Cypress Cucumber Smoke Test

This is a project which you can use to start your E2E testing with mochawesome report

- Generating seperate json report for each test
- Merging all json reports into single report
- Generating HTML report from the merged json file

# Pre-requisite
### Node js should instaled
- Stable version Link https://nodejs.org/en/download/releases/ and Chose 12.0.0 Release
### npm should be installed
- npm version 6.14.10

# Installation  

1. Create a project directory and Clone the project: 
```https://bitbucket.org/rocketdocs/test-environment-smoke-test/src/master/``` 

2. Under the project directory install the followings: 
```npm install```


# Cypress Folder Structure

|Folder|Description|
|---|---|
|`constants/`| Code related constants. |
|`downloads/`| Location to place downloads. |
|`fixtures/`| Location to place static input related information like files or JSON input. |
|`integrations/`| Location to place your test definitions. |
|`interfaces/`| Location to place interfaces for validation and autocompletion of fixture data. |
|`page-objects/`| Location to place your page-objects. |
|`plugins/`| Location to place plugin configuration. |
|`reports/`| Location that any generated reports will be placed. |
|`steps/`| Location to place your step logic. |
|`support/`| General JS/TS files that support the rest of the setup. |

# How to start

In order to start using this project. You will have to do the following steps: 
- Provide and use valid credentials in `credentials.json`.
- Some tests require standardized data that `initial-data-setup.feature` will create.

Optionally, for features powered by cypress.io dashboard:
* Enter <project_ID> in the cypress.json.
* Enter <record_key> in the package.json under scripts sections.

## **Notable package.json Commands**:

### Using Cyperss GUI:
* Under the project directory run the following npm command development environment: `npm run rocketdocs:dev`
### Using Cyperss headless:
* Under the project directory run the following npm command development environment: `npm run rocketdocs:dev:headless`

### Running tests by tag headlessly:
* Under the project directory run the following npm command: `npx run cy:tagged -e TAGS='@SOME_TAG,@SOME_OTHER _TAG'`

### Running tests by tag headlessly:
* Under the project directory run the following npm command: `npx run cy:tagged -e TAGS='@SOME_TAG,@SOME_OTHER _TAG'`

### Overrride default cypress baseUrl using cypress GUI

* Under the project directory run the following npm command for test environment:`npm run rocketdocs:test`
* Under the project directory run the following npm command for staging environment:`npm run rocketdocs:staging`
* Under the project directory run the following npm command for production environment:`npm run rocketdocs:production`

### Overrride default cypress baseUrl using cypress headless

* Under the project directory run the following npm command for test environment:`npm run rocketdocs:test:headless`
* Under the project directory run the following npm command for staging environment:`npm run rocketdocs:staging:headless`
* Under the project directory run the following npm command for production environment:`npm run rocketdocs:production:headless`

### Run Test on Ci/Cd [Development, Automation1, Test, Staging, Production]

* npm run rocketdocs:dev:headless && cypress run --spec '**/*.feature'
* npm run rocketdocs:test:headless && cypress run --spec '**/*.feature'
* npm run rocketdocs:aut1:headless && cypress run --spec '**/*.feature'
* npm run rocketdocs:staging:headless && cypress run --spec '**/*.feature'
* npm run rocketdocs:production:headless && cypress run --spec '**/*.feature'

### Data initialization [Development, Automation1, Test, Staging, Production]

* data_ini:dev":    "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file cypress.json"
* data_ini:aut1":   "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file automation.json"
* data_ini:test":   "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file test-config.json"
* data_ini:staging":"npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file staging-config.json"
* data_ini:prod":   "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file production-config.json"

### Cucumber report generate [Development, Automation1, Test, Staging, Production]

* Cucumber_report:dev":    "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file cypress.json; npm run cucumber:report"
* Cucumber_report:aut1":   "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file automation.json; npm run cucumber:report"
* Cucumber_report:test":   "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file test-config.json; npm run cucumber:report"
* Cucumber_report:staging":"npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file staging-config.json; npm run cucumber:report"
* Cucumber_report:prod":   "npx || ./node_modules/.bin/cypress-tags run -e TAGS='@SETUP' --config-file production-config.json; npm run cucumber:report"

### Cleanup folders
* Currently cleans up only the reports folders, but could be extended to others: `npm run cleanup`

### Merge Mochawesome JSON Reports
* Combines JSON reports: `npm run merge_reports`

### Create Mochawesome HTML Report
* Converts JSON report to HTML report: `npm run mochawesome_report`

### Full List
* Full list of configured commands whether they are currently in use or not can be found inside the package.json

# Test debugging/Reports:

* During test execution locally if any test fails, screenshot with execution log will be taken for that. Screenshots will be available under the path: ```cypress-mochawesome-report/cypress/reports/mochawesome-report/assets``` 

* json reports are created under the path: ```cypress-mochawesome-report/cypress/reports/mochawesome-report``` 

* By default capturing test videos is turned off by the ```cypress.json```. If needed, can be possible to turn it on there.if enabled the you can find videos under the path:```cypress-mochawesome-report/cypress/videos``` 

* HTML reports are created under the path: ```cypress-mochawesome-report/cypress/reports/```

* If you record the execution then all reports would be saved on your cypress dashboard account:

![cypress dashboard](/cypress_dashboard-in-cypress.png)

## References
- [cypress](https://docs.cypress.io/api/table-of-contents)
- [cucumber](https://cucumber.io/docs/cucumber/)
- [mochawesome](https://github.com/adamgruber/mochawesome)
- [mochawesome merge](https://github.com/Antontelesh/mochawesome-merge)
- [mochawesome report generator](https://github.com/adamgruber/mochawesome-report-generator)
