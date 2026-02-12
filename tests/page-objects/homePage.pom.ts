import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly stickyHeader: Locator;
  readonly reservationButton: Locator;
  readonly cookieConsentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.stickyHeader = page.locator(".elementor-sticky");
    this.reservationButton = page.getByRole("link", {
      name: "Rezervuoti aikštelę",
    });
    this.cookieConsentButton = page.locator("#cookieadmin_reject_button");
  }

  async goToHomePage() {
    await this.page.goto("/");
  }

  async headerShouldBeVisible() {
    await expect(this.stickyHeader).toBeVisible();
  }

  async clickCookieConsent() {
    if (await this.cookieConsentButton.isVisible()) {
      await this.cookieConsentButton.click();
    }
  }

  async clickReservationButton() {
    await this.reservationButton.click();
  }
}
