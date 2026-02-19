import { Locator } from "@playwright/test";

export async function takeElementScreenshot(
  selector: Locator,
  screenshotPath: string,
) {
  const element = selector;
  if (element) {
    await element.screenshot({ path: screenshotPath });
  } else {
    throw new Error(`Element not found.`);
  }
}
