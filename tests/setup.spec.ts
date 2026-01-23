import { test as setup } from "@playwright/test";

const authFile = 'playwright/.auth/user.json';

setup("Create Auth Token", async ({ request }) => {
    await request.post('/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    await request.storageState({ path: authFile });
});