import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginForm = page.locator("#login_form_desktop");
  }

  async loginFormShouldBeVisible() {
    await expect(this.loginForm).toBeVisible();
  }

  async goToLoginPage() {
    await this.page.goto(process.env.LOGIN_URL!);
  }
}
