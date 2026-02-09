import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: "list",

  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: "https://restful-booker.herokuapp.com",

    trace: "on",
  },

  projects: [
    {
      name: "API Tests",
      testDir: "./api",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://restful-booker.herokuapp.com",
      },
    },
    {
      name: "E2E Tests",
      testDir: "./e2e",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://gopadel.lt", // Main page URL for not authenticated E2E tests
      },
    },
  ],
});
