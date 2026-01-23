import {Page, expect, test} from '@playwright/test';

test.describe('Create Booking API Test', () => {
  let bookingId: number;

  test('should create a new booking', async ({request}) => {
    const newBooking = {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2023-10-01',
        checkout: '2023-10-10',
      },
      additionalneeds: 'Breakfast',
    };

    const response = await request.post('/booking', {
      data: newBooking,
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    bookingId = responseBody.bookingid;

    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody.booking).toMatchObject(newBooking);
  });

//   test.afterEach(async ({request}) => {
//     if (bookingId) {
//       await request.delete(`/booking/${bookingId}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Basic ' + Buffer.from('admin:password123').toString('base64'),
//         },
//       });
//     }
//   });
});