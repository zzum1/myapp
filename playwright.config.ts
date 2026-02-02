import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/API",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: "https://restful-booker.herokuapp.com",

    trace: "on",
  },

  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["setup"],
    },
  ],
});
