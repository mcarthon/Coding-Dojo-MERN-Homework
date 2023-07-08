const { response } = require("express");

const Joke = require("../models/joke.model");

module.exports.findAllJokes = (request, response) => {

    Joke.find()

        .then( (allDaJokes) => {

            response.json({ jokes: allDaJokes })

        } )

        .catch( (error) => {

            response.json( error )

        } );

}

module.exports.findOneSingleJoke = ( request, response ) => {

    Joke.findOne({ _id: request.params.id })

        .then( oneSingleJoke => {

            response.json({ joke: oneSingleJoke })

        } )

        .catch(( error ) => {

            response.json( error )

        } );

}

module.exports.createNewJoke = ( request, response ) => {

    Joke.create( request.body )

        .then( newlyCreatedJoke => {

            response.json({ joke: newlyCreatedJoke })

        } )

        .catch( ( error ) => {

            response.json(error)

        } );

}

module.exports.updateExistingJoke = ( request, response ) => {

    Joke.findOneAndUpdate(

        { _id: request.params.id },

        request.body,

        { new: true, runValidators: true }

    )

    .then( updatedJoke => {

        response.json({ joke: updatedJoke })

    } )

    .catch( ( error ) => {

        response.json( error )

    } );

}

module.exports.deleteAnExistingJoke = ( request, response ) => {

    Joke.deleteOne({ _id: request.params.id })

        .then( result => {            

        } )

        .catch( ( error ) => {

            response.json( error )

        } );

}