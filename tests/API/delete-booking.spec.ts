import { expect, test } from "@playwright/test";
import { getToken } from "../../helpers/createToken";

test("should delete the created booking", async ({ request }) => {
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
  console.log(`Created booking: ${createResponseBody}`);
  const bookingId = createResponseBody.bookingid;
  // Now delete the created booking
  const token = await getToken({ request });

  if (bookingId) {
    const response = await request.delete(`/booking/${bookingId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + token,
      },
    });
    expect(response.status()).toBe(201);
    const text = await response.text();
    console.log(`Delete response text: ${text}`);
  }
});
