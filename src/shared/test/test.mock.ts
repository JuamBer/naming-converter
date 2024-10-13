import { faker } from "@faker-js/faker";

const camelCaseObject1 = {
  id: faker.string.uuid(),
  yearOfBirth: faker.date.past().getFullYear(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  address: {
    streetName: faker.location.street(),
    postalCode: faker.location.zipCode(),
    city: faker.location.city(),
    country: faker.location.country(),
  },
  companies: [
    {
      id: faker.string.uuid(),
      name: faker.company.name(),
      buzzAdjective: faker.company.buzzAdjective(),
      catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
      employees: [
        {
          id: faker.string.uuid(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
        },
        {
          id: faker.string.uuid(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
        },
        {
          id: faker.string.uuid(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
        },
      ],
    },
    {
      id: faker.string.uuid(),
      name: faker.company.name(),
      buzzAdjective: faker.company.buzzAdjective(),
      catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
      employees: [],
    },
    {
      id: faker.string.uuid(),
      name: faker.company.name(),
      buzzAdjective: faker.company.buzzAdjective(),
      catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
      employees: [],
    },
  ],
};

export const testObjects = {
  camelCase: camelCaseObject1,
  pascalCase: {
    Id: camelCaseObject1.id,
    YearOfBirth: camelCaseObject1.yearOfBirth,
    FirstName: camelCaseObject1.firstName,
    LastName: camelCaseObject1.lastName,
    Email: camelCaseObject1.email,
    PhoneNumber: camelCaseObject1.phoneNumber,
    Address: {
      StreetName: camelCaseObject1.address.streetName,
      PostalCode: camelCaseObject1.address.postalCode,
      City: camelCaseObject1.address.city,
      Country: camelCaseObject1.address.country,
    },
    Companies: [
      {
        Id: camelCaseObject1.companies[0].id,
        Name: camelCaseObject1.companies[0].name,
        BuzzAdjective: camelCaseObject1.companies[0].buzzAdjective,
        CatchPhraseDescriptor:
          camelCaseObject1.companies[0].catchPhraseDescriptor,
        Employees: [
          {
            Id: camelCaseObject1.companies[0].employees[0].id,
            FirstName: camelCaseObject1.companies[0].employees[0].firstName,
            LastName: camelCaseObject1.companies[0].employees[0].lastName,
            Email: camelCaseObject1.companies[0].employees[0].email,
          },
          {
            Id: camelCaseObject1.companies[0].employees[1].id,
            FirstName: camelCaseObject1.companies[0].employees[1].firstName,
            LastName: camelCaseObject1.companies[0].employees[1].lastName,
            Email: camelCaseObject1.companies[0].employees[1].email,
          },
          {
            Id: camelCaseObject1.companies[0].employees[2].id,
            FirstName: camelCaseObject1.companies[0].employees[2].firstName,
            LastName: camelCaseObject1.companies[0].employees[2].lastName,
            Email: camelCaseObject1.companies[0].employees[2].email,
          },
        ],
      },
      {
        Id: camelCaseObject1.companies[1].id,
        Name: camelCaseObject1.companies[1].name,
        BuzzAdjective: camelCaseObject1.companies[1].buzzAdjective,
        CatchPhraseDescriptor:
          camelCaseObject1.companies[1].catchPhraseDescriptor,
        Employees: [],
      },
      {
        Id: camelCaseObject1.companies[2].id,
        Name: camelCaseObject1.companies[2].name,
        BuzzAdjective: camelCaseObject1.companies[2].buzzAdjective,
        CatchPhraseDescriptor:
          camelCaseObject1.companies[2].catchPhraseDescriptor,
        Employees: [],
      },
    ],
  },
  kebabCase: {
    id: camelCaseObject1.id,
    "year-of-birth": camelCaseObject1.yearOfBirth,
    "first-name": camelCaseObject1.firstName,
    "last-name": camelCaseObject1.lastName,
    email: camelCaseObject1.email,
    "phone-number": camelCaseObject1.phoneNumber,
    address: {
      "street-name": camelCaseObject1.address.streetName,
      "postal-code": camelCaseObject1.address.postalCode,
      city: camelCaseObject1.address.city,
      country: camelCaseObject1.address.country,
    },
    companies: [
      {
        id: camelCaseObject1.companies[0].id,
        name: camelCaseObject1.companies[0].name,
        "buzz-adjective": camelCaseObject1.companies[0].buzzAdjective,
        "catch-phrase-descriptor":
          camelCaseObject1.companies[0].catchPhraseDescriptor,
        employees: [
          {
            id: camelCaseObject1.companies[0].employees[0].id,
            "first-name": camelCaseObject1.companies[0].employees[0].firstName,
            "last-name": camelCaseObject1.companies[0].employees[0].lastName,
            email: camelCaseObject1.companies[0].employees[0].email,
          },
          {
            id: camelCaseObject1.companies[0].employees[1].id,
            "first-name": camelCaseObject1.companies[0].employees[1].firstName,
            "last-name": camelCaseObject1.companies[0].employees[1].lastName,
            email: camelCaseObject1.companies[0].employees[1].email,
          },
          {
            id: camelCaseObject1.companies[0].employees[2].id,
            "first-name": camelCaseObject1.companies[0].employees[2].firstName,
            "last-name": camelCaseObject1.companies[0].employees[2].lastName,
            email: camelCaseObject1.companies[0].employees[2].email,
          },
        ],
      },
      {
        id: camelCaseObject1.companies[1].id,
        name: camelCaseObject1.companies[1].name,
        "buzz-adjective": camelCaseObject1.companies[1].buzzAdjective,
        "catch-phrase-descriptor":
          camelCaseObject1.companies[1].catchPhraseDescriptor,
        employees: [],
      },
      {
        id: camelCaseObject1.companies[2].id,
        name: camelCaseObject1.companies[2].name,
        "buzz-adjective": camelCaseObject1.companies[2].buzzAdjective,
        "catch-phrase-descriptor":
          camelCaseObject1.companies[2].catchPhraseDescriptor,
        employees: [],
      },
    ],
  },
  snakeCase: {
    id: camelCaseObject1.id,
    year_of_birth: camelCaseObject1.yearOfBirth,
    first_name: camelCaseObject1.firstName,
    last_name: camelCaseObject1.lastName,
    email: camelCaseObject1.email,
    phone_number: camelCaseObject1.phoneNumber,
    address: {
      street_name: camelCaseObject1.address.streetName,
      postal_code: camelCaseObject1.address.postalCode,
      city: camelCaseObject1.address.city,
      country: camelCaseObject1.address.country,
    },
    companies: [
      {
        id: camelCaseObject1.companies[0].id,
        name: camelCaseObject1.companies[0].name,
        buzz_adjective: camelCaseObject1.companies[0].buzzAdjective,
        catch_phrase_descriptor:
          camelCaseObject1.companies[0].catchPhraseDescriptor,
        employees: [
          {
            id: camelCaseObject1.companies[0].employees[0].id,
            first_name: camelCaseObject1.companies[0].employees[0].firstName,
            last_name: camelCaseObject1.companies[0].employees[0].lastName,
            email: camelCaseObject1.companies[0].employees[0].email,
          },
          {
            id: camelCaseObject1.companies[0].employees[1].id,
            first_name: camelCaseObject1.companies[0].employees[1].firstName,
            last_name: camelCaseObject1.companies[0].employees[1].lastName,
            email: camelCaseObject1.companies[0].employees[1].email,
          },
          {
            id: camelCaseObject1.companies[0].employees[2].id,
            first_name: camelCaseObject1.companies[0].employees[2].firstName,
            last_name: camelCaseObject1.companies[0].employees[2].lastName,
            email: camelCaseObject1.companies[0].employees[2].email,
          },
        ],
      },
      {
        id: camelCaseObject1.companies[1].id,
        name: camelCaseObject1.companies[1].name,
        buzz_adjective: camelCaseObject1.companies[1].buzzAdjective,
        catch_phrase_descriptor:
          camelCaseObject1.companies[1].catchPhraseDescriptor,
        employees: [],
      },
      {
        id: camelCaseObject1.companies[2].id,
        name: camelCaseObject1.companies[2].name,
        buzz_adjective: camelCaseObject1.companies[2].buzzAdjective,
        catch_phrase_descriptor:
          camelCaseObject1.companies[2].catchPhraseDescriptor,
        employees: [],
      },
    ],
  },
};
