const { response } = require("express");

const User = require("../models/user.model");

module.exports.findAllUsers = (request, response) => {

    User.find()

        .then( (allDaUsers) => {

            response.json({ users: allDaUsers })

        } )

        .catch( (error) => {

            response.json( error )

        } );

}

module.exports.findOneSingleUser = ( request, response ) => {

    User.findOne({ _id: request.params.id })

        .then( oneSingleUser => {

            response.json({ user: oneSingleUser })

        } )

        .catch(( error ) => {

            respone.json( error )

        } );

}

module.exports.createNewUser = ( request, reponse ) => {

    User.create( request.body )

        .then( newlyCreatedUser => {

            response.json({ user: newlyCreatedUser })

        } )

        .catch( ( error ) => {

            response.json(error)

        } );

}

module.exports.updateExistingUser = ( request, response ) => {

    User.findOneAndUpdate(

        { _id: request.params.id },

        request.body,

        { new: true, runValidators: true }

    )

    .then( updatedUser => {

        response.json({ user: updatedUser })

    } )

    .catch( ( error ) => {

        response.json( error )

    } );

}

module.exports.deleteAnExistingUser = ( request, response ) => {

    User.deleteOne({ _id: request.params.id })

        .then( result => {            

        } )

        .catch( ( error ) => {

            response.json( error )

        } );

}