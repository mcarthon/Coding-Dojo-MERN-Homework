const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    name: {

        type: String,

        required: [

            true,

            "The Author's name is required, but was not given."

        ]

    }

}, 

    {

        timestamps: true

    }

);

module.exports.Author = mongoose.model( "Author", AuthorSchema );