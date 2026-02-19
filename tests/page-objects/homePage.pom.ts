import { expect, Locator, Page } from "@playwright/test";
import { takeElementScreenshot } from "../../helpers/element-screenshot";

export class HomePage {
  readonly page: Page;
  readonly stickyHeader: Locator;
  readonly reservationButton: Locator;
  readonly cookieConsentButton: Locator;
  readonly mainSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.stickyHeader = page.locator(".elementor-sticky");
    this.reservationButton = page.getByRole("link", {
      name: "Rezervuoti aikštelę",
    });
    this.cookieConsentButton = page.locator("#cookieadmin_reject_button");
    this.mainSection = page.locator("[data-id='6c3fc4ee']");
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

  async takeMainSectionScreenshot() {
    await takeElementScreenshot(
      this.mainSection,
      "screenshots/main-section.png",
    );
  }
}
