import { test as base } from "@playwright/test";
import { HomePage } from "../page-objects/homePage.pom";

// Define a fixture for the HomePage
type MyFixtures = {
  homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});
export { expect } from "@playwright/test";
