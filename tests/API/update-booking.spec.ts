import { expect, test } from "@playwright/test";
import { generateRandomUserData } from "../../helpers/user-data";
import { faker } from "@faker-js/faker";

test.describe("Update Booking API Test", () => {
  let bookingId: number;
  let bookingDatesCheckin: string;
  let bookingDatesCheckout: string;

  test("should update a booking", { tag: "@critical" }, async ({ request }) => {
    const newBooking = generateRandomUserData();

    const response = await request.post("/booking", {
      data: newBooking,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    bookingId = responseBody.bookingid;
    bookingDatesCheckin = responseBody.booking.bookingdates.checkin;
    bookingDatesCheckout = responseBody.booking.bookingdates.checkout;

    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody.booking).toMatchObject(newBooking);

    // Now update the created booking

    if (bookingId) {
      const updateBookingResponse = await request.patch(
        `/booking/${bookingId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${process.env.TOKEN}`,
          },
          data: {
            // Update the booking dates to new random future dates
            bookingdates: {
              checkin: faker.date.future().toISOString().split("T")[0],
              checkout: faker.date.future().toISOString().split("T")[0],
            },
          },
        },
      );
      expect(updateBookingResponse.status()).toBe(200);
      const getUpdateResponseBody = await updateBookingResponse.json();
      expect(getUpdateResponseBody.bookingdates.checkin).not.toBe(
        bookingDatesCheckin,
      );
      expect(getUpdateResponseBody.bookingdates.checkout).not.toBe(
        bookingDatesCheckout,
      );
    }
  });
});
