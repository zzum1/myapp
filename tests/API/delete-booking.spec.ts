import { expect, test } from "@playwright/test";
require("dotenv").config();

test.describe("Delete Booking API Test", () => {
  test.only("should delete the created booking", async ({ request }) => {
    const createBookingResponse = await request.post("/booking", {
      data: {
        firstname: "Tim",
        lastname: "Doe",
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: "2023-10-01",
          checkout: "2023-10-10",
        },
        additionalneeds: "Dinner",
      },
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
