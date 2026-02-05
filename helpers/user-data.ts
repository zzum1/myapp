import { faker } from "@faker-js/faker";

export const generateRandomUserData = () => {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int({ min: 100, max: 500 }),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: faker.date.future().toISOString().split("T")[0],
      checkout: faker.date.future().toISOString().split("T")[0],
    },
    additionalneeds: faker.lorem.word(),
  };
};
