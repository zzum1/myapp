import { expect, test } from "@playwright/test";
import { generateRandomUserData } from "../../helpers/user-data";

test.describe("Create Booking API Test", () => {
  let bookingId: number;

  test("should create a new booking", async ({ request }) => {
    const newBooking = generateRandomUserData();

    const response = await request.post("/booking", {
      data: newBooking,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    bookingId = responseBody.bookingid;

    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody.booking).toMatchObject(newBooking);
  });
});
