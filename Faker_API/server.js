// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker, fakerSK } = require('@faker-js/faker');
const express = require('express');

// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

const createUser = () => {

    return {

        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName("male"),
        lastName: faker.person.lastName("male"),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()

    };     

};

const createCompany = () => {

    return {

        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {

            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()

        }

    };

}

const app = express();

app.use( express.json() );

app.use( express.urlencoded( { extended: true } ) );

app.get("/api/users/new", ( request, response ) => {

    request.body = createUser();

    console.log(request.body);

    response.json( { status: "OK" } );

});

app.get("/api/companies/new", ( request, response ) => {

    request.body = createCompany();

    console.log(request.body);

    response.json( { status: "OK" } );

});

app.get("/api/user/company", ( request, response ) => {

    request.body.company = createCompany();

    request.body.user = createUser();

    console.log(request.body);

    response.json( { status: "OK" } );

});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);