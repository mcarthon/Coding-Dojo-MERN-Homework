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

    gameStatus: {

        type: Object,

        default: ["Unavailable", "Unavailable", "Unavailable"]

    }

}, 

    {

        timestamps: true

    }

);

module.exports.Player = mongoose.model( "Player", PlayerSchema );