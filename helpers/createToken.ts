import { APIRequestContext } from "@playwright/test";

export const token = async ({ request }: { request: APIRequestContext }) => {
  const response = await request.post("/auth", {
    data: {
      username: "admin",
      password: "password123",
    },
  });
  if (response.status() !== 200) {
    throw new Error(
      `Failed to create token, status code: ${response.status()}`,
    );
  }
  const responseBody = await response.json();
  const token = responseBody.token;
  return token;
};
