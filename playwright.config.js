// @ts-check
const { defineConfig, devices } = require('@playwright/test');
import * as os from "os";
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  /* Set timeout */
  timeout: 40000,
  expect: {
    timeout: 10 * 1000,
  },
    /* Folder of report */
  outputDir: "reports/test-results",
    /* Folder of tests */
  testDir: './tests/specs',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 5 : 2,
  // /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 
  reporter: [
    ['html', { open: 'never', outputFolder: 'reports/html-report' }],
    ['list', { printSteps: true }],
    ["allure-playwright",
      {
        detail: true,
        suiteTitle: false,
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.redmine.org/',
    actionTimeout: 15000, 
    navigationTimeout: 15000,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}
);

