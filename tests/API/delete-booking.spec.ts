import { expect, test } from "@playwright/test";
import { generateRandomUserData } from "../../helpers/user-data";

test.describe("Delete Booking API Test", () => {
  test("should delete the created booking", async ({ request }) => {
    const newBooking = generateRandomUserData();

    const createBookingResponse = await request.post("/booking", {
      data: newBooking,
    });

    expect(createBookingResponse.status()).toBe(200);
    const createResponseBody = await createBookingResponse.json();
    const bookingId = createResponseBody.bookingid;
    // Now delete the created booking

    if (bookingId) {
      const response = await request.delete(`/booking/${bookingId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${process.env.TOKEN}`,
        },
      });
      expect(response.status()).toBe(201);
      const text = await response.text();
      expect(text).toBe("Created");
    }
  });
});
