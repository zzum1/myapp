import { APIRequestContext } from "@playwright/test";
require("dotenv").config();

export const getToken = async ({ request }: { request: APIRequestContext }) => {
  const response = await request.post("/auth", {
    data: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
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
