import dotenv from "dotenv";
dotenv.config();

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
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
        baseURL: process.env.API_BASE_URL,
      },
    },
    {
      name: "E2E Tests",
      testDir: "./tests/e2e",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.HOME_PAGE_URL,
        storageState: "playwright/.auth/user.json",
      },
      dependencies: ["Setup"],
    },
  ],
});
