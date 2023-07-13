const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({

    name: {

        type: String,

        required: [

            true,

            "The Player's name is required, but was not given."

        ]

    },

    position: {

        type: String

    },

    gameOneStatus: {

        type: Object,

        default: "Unavailable"

    },

    gameTwoStatus: {

        type: Object,

        default: "Unavailable"

    },

    gameThreeStatus: {

        type: Object,

        default: "Unavailable"

    }

}, 

    {

        timestamps: true

    }

);

module.exports.Player = mongoose.model( "Player", PlayerSchema );