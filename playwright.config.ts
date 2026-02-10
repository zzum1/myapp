import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // testDir: "./tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["list"],
    [
      "html",
      {
        outputFolder: `playwright-report/${process.env.REPORT_NAME || "default"}`,
      },
    ],
  ],

  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: "https://restful-booker.herokuapp.com",

    trace: "on",
  },

  projects: [
    {
      name: "Setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "API Tests",
      testDir: "./tests/API",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://restful-booker.herokuapp.com",
      },
    },
    {
      name: "E2E Tests",
      testDir: "./tests/e2e",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://gopadel.lt",
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["Setup"],
    },
  ],
});
