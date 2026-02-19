import { test } from "../fixtures/page-objects-fixtures";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Home Page tests", () => {
  test("should display the sticky header", async ({ homePage }) => {
    await homePage.headerShouldBeVisible();
  });

  test("should allow users to click the reservation button", async ({
    homePage,
    loginPage,
  }) => {
    await homePage.clickReservationButton();
    await loginPage.loginFormShouldBeVisible();
  });

  test("should make a screenshot of main section", async ({
    homePage,
    cookieConsent,
  }) => {
    await homePage.takeMainSectionScreenshot();
  });
});
