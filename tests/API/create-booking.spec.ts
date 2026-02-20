import { expect, test } from "@playwright/test";
import { generateRandomUserData } from "../../helpers/user-data";
import { bookingSchema } from "../../schema-validation/booking-schema";

test.describe("Create Booking API Test", () => {
  let bookingId: number;

  test(
    "should create a new booking",
    { tag: "critical" },
    async ({ request }) => {
      const newBooking = generateRandomUserData();

      const response = await request.post("/booking", {
        data: newBooking,
      });

      expect(response.status()).toBe(200);
      const responseBody = await response.json();

      expect(() => {
        bookingSchema.parse(responseBody);
      }).not.toThrow();
    },
  );
});
