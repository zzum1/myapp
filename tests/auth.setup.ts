import { test as setup, expect } from "@playwright/test";
require("dotenv").config();

const userSession = "playwright/.auth/user.json";

setup("Authenticate and save session", async ({ request }) => {
  await request.post(process.env.BASE_URL!, {
    form: {
      email: process.env.PADEL_USER_EMAIL!,
      password: process.env.PADEL_USER_PASSWORD!,
    },
  });

  // Save the authenticated session to a file
  await request.storageState({ path: userSession });
});
