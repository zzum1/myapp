import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/homePage.pom";
import { LoginPage } from "../page-objects/loginPage.pom";
import { DashboardPage } from "../page-objects/dashboardPage.pom";

// Define a fixture for the HomePage
type MyFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  cookieConsent: void;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goToDashboard();
    await use(dashboardPage);
  },
  cookieConsent: async ({ homePage }, use) => {
    await homePage.clickCookieConsent();
    await use();
  },
});
export { expect } from "@playwright/test";
