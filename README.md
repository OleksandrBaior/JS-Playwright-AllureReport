## Playwright-framework
Web-Site  - https://www.redmine.org/

## Setup
1. Install [node.js](https://nodejs.org/en/) - JavaScript runtime environment
2. Clone git repository `git clone https://github.com/OleksandrBaior/JS-Playwright-AllureReport.g`
3. Install project dependencies specified in the package.json `npm install`
4. Install playwright `npx playwright install`.

## Running the Tests 
Results of the tests and test logs will be shown in the terminal:
```
npx playwright test
```

Run your tests with UI Mode:
```
npx playwright test --ui
```

Running a single test file:
```
npx playwright test example-page.spec.ts
```

Running a test file for tag:
```
 npx playwright test --grep=@[tag]
```

To debug tests with playwright inspector:
```
npx playwright test --debug
```

## Report 
For reporting used Allure Report - Automation Test Reporting Tool  
Learn more about Allure Report at [Allure](https://allurereport.org/)

To generate allure report:
```
allure generate --clean
```

To open allure report:
```
allure open allure-report
```
