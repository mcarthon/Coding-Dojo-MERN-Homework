const mongoose = require("mongoose");

const databaseName = process.env.DB;

const username = process.env.ATLAS_USERNAME;

const password = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.mhzuldc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { 

    useNewUrlParser: true,

    useUnifiedTopology: true

 })

    .then( () => console.log( "Established a connection to the database" ) )

    .catch( error => console.log( "Something went wrong when connecting to the database", error ) );