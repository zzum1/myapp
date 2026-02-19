import { test } from "../fixtures/page-objects-fixtures";

test.describe("Dashboard Page tests", () => {
  test("should display dashboard page", async ({ dashboardPage }) => {
    await dashboardPage.userProfileMenuShouldBeVisible();
  });
});
