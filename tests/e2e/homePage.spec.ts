import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/homePage.pom";

test.describe("Home Page tests", () => {
  test.only("should display the sticky header", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.headerShouldBeVisible();
  });
});
