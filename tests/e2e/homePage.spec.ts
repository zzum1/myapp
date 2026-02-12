import { test } from "../fixtures/page-objects-fixtures";

test.describe("Home Page tests", () => {
  test("should display the sticky header", async ({ homePage }) => {
    await homePage.goToHomePage();
    await homePage.headerShouldBeVisible();
  });

  test("should allow users to click the reservation button", async ({
    homePage,
    loginPage,
  }) => {
    await homePage.goToHomePage();
    await homePage.clickReservationButton();
    await loginPage.loginFormShouldBeVisible();
  });
});
