import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/homePage.pom";

// Define a fixture for the HomePage
type MyFixtures = {
  homePage: HomePage;
  cookieConsent: void;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await use(homePage);
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
