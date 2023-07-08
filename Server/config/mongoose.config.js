const mongoose = require("mongoose");

const dbName = process.env.DB;

const username = process.env.ATLAS_USERNAME;

const password = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.mhzuldc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)

    .then( () => console.log("Established a connection to the database") )

    .catch( error => console.log("Something went wrongn when connecting to the database", error ) );