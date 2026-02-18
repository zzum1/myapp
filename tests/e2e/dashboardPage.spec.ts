import { test } from "../fixtures/page-objects-fixtures";

test.describe("Dashboard Page tests", () => {
  test.only("should display dashboard page", async ({ dashboardPage }) => {
    await dashboardPage.userProfileMenuShouldBeVisible();
  });
});
