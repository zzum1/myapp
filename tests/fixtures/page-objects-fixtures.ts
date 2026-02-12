import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/homePage.pom";
import { LoginPage } from "../page-objects/loginPage.pom";

// Define a fixture for the HomePage
type MyFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  cookieConsent: void;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  cookieConsent: [
    async ({ homePage }, use) => {
      await homePage.clickCookieConsent();
      await use();
    },
    { auto: true },
  ],
});
export { expect } from "@playwright/test";
