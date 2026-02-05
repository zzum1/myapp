import { expect, test } from "@playwright/test";
import { generateRandomUserData } from "../../helpers/user-data";

test.describe("Get Booking API Test", () => {
  let bookingId: number;

  test("should fetch a new booking", async ({ request }) => {
    const newBooking = generateRandomUserData();

    const response = await request.post("/booking", {
      data: newBooking,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    bookingId = responseBody.bookingid;

    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody.booking).toMatchObject(newBooking);

    // Now get the created booking

    if (bookingId) {
      const getBookingResponse = await request.get(`/booking/${bookingId}`);
      expect(getBookingResponse.status()).toBe(200);
      const getBookingResponseBody = await getBookingResponse.json();
      expect(getBookingResponseBody).toMatchObject(newBooking);
    }
  });
});
