import { test } from "../fixtures/page-objects-fixtures";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Login Page tests", () => {
  test("should display login form", async ({ loginPage }) => {
    await loginPage.goToLoginPage();
    await loginPage.loginFormShouldBeVisible();
  });
});
