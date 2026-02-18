import { Page, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get userProfileMenuDropdown() {
    return this.page.locator("#user-dropdown");
  }

  async goToDashboard() {
    await this.page.goto(`${process.env.DASHBOARD_URL}reservation/short`);
  }

  async userProfileMenuShouldBeVisible() {
    await expect(this.userProfileMenuDropdown).toBeVisible();
  }
}

const url = `${process.env.DASHBOARD_URL}reservation/short`;
console.log(url);
