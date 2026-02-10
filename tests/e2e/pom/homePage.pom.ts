import { test, expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly stickyHeader: Locator;
  readonly reservationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.stickyHeader = page.locator(".elementor-sticky");
    this.reservationButton = page.getByRole("link", {
      name: "Rezervuoti aikštelę",
    });
  }

  async goto() {
    await this.page.goto("/");
  }

  async isHeaderVisible() {
    await expect(this.stickyHeader).toBeVisible();
  }
}
