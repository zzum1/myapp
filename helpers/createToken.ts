import { APIRequestContext } from "@playwright/test";

export const token = async ({ request }: { request: APIRequestContext }) => {
  const response = await request.post("/auth", {
    data: {
      username: "admin",
      password: "password123",
    },
  });
  const responseBody = await response.json();
  const token = responseBody.token;
  return token;
};
