import { test } from "../fixtures/page-objects-fixtures";

test.describe("Home Page tests", () => {
  test("should display the sticky header", async ({ homePage }) => {
    await homePage.goto();
    await homePage.headerShouldBeVisible();
  });
});
