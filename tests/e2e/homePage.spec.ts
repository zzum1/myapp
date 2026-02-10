import { test, expect } from "@playwright/test";
import { HomePage } from "./pom/homePage.pom";

test.describe("Home Page tests", () => {
  test("should display the sticky header", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.isHeaderVisible();
  });
});
