<div align="center"> 
<img <img src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png" width="80"/>
 <h1>Playwright-framework</h1>
</div>

## ⚡️ Object for testing
Web site - [Redmime.org](https://www.redmine.org/)


##  📦 Setup

1. Install [node.js](https://nodejs.org/en/) - JavaScript runtime environment
2. Clone git repository `git clone https://github.com/OleksandrBaior/JS-Playwright-AllureReport.g`
3. Install project dependencies specified in the package.json `npm install`
4. Install playwright `npx playwright install`.

## ⚙️ Running Tests

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

## 📜 Allure Report

For reporting used Allure Report - Automation Test Reporting Tool  
Learn more about Allure Report at [Allure](https://allurereport.org/)

To generate allure report:

```
allure generate --clean -o reports/allure-report reports/allure-results
```

To open allure report:

```
allure open reports/allure-report
```

## 📝 Playwright Report

For reporting used Playwright Reports - **LIST and HTML**  
Learn more about Playwright Reports at [Reports](https://playwright.dev/docs/test-reporters#introduction)

To open html report :

```
npx playwright show-report reports\html-report
```

## 🌏 Link of Allure report on CI 

[https://oleksandrbaior.github.io/Playwright_framework_AllureReport_JS/index.html](https://oleksandrbaior.github.io/Playwright_framework_AllureReport_JS/index.html) 

## 🔑 License

[MIT](https://github.com/OleksandrBaior/JS-Playwright-AllureReport?tab=MIT-1-ov-file)
