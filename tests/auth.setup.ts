import { test as setup } from "@playwright/test";

const userSession = "playwright/.auth/user.json";

setup("Authenticate and save session", async ({ request }) => {
  await request.post(process.env.LOGIN_URL!, {
    form: {
      "LoginForm[var_login]": process.env.PADEL_USER_EMAIL!,
      "LoginForm[var_password]": process.env.PADEL_USER_PASSWORD!,
    },
  });

  // Save the authenticated session to a file
  await request.storageState({ path: userSession });
});
