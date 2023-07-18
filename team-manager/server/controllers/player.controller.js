const { Player } = require( "../models/player.model" );

const { response } = require( "express" );

module.exports.createPlayer = ( request, response ) => {

    const { name, position, gameStatus } = request.body;

    Player.create({

        name,

        position,

        gameStatus

    })

    .then( player => response.json( player ) )

    .catch( error => response.status( 400 ).json( error ) );

}

module.exports.findAllPlayers = ( request, response ) => {

        Player.find()

            .then( (allPlayers) => {

                response.json({

                    players: allPlayers

                })

            } )

            .catch( (error) => {

                response.status( 400 ).json( error )

            } );

}

module.exports.findOnePlayer = ( request, response ) => {

    Player.findById({

        _id: request.params.id

    })

        .then( player => {

            response.json({

                player: player

            })

        } )

        .catch( error => {

            response.status( 400 ).json( error )

        } )

}

module.exports.updatePlayer = ( request, response ) => {

    Player.updateOne(
        
        { _id: request.params.id },

        request.body,

        { new:true, runValidators: true }
        
    )

    .then( player => {

        response.json({ player: player })

    } )

    .catch( error => { 

        response.status( 400 ).json( error )

    } );

}

module.exports.deletePlayer = ( request, response ) => {

    Player.findByIdAndDelete({

        _id: request.params.id

    })        

    .then( result => {
    
        response.status( 200 ).json({

            message: `Player with id: ${request.params.id} was successfully deleted.`

        });
    
    } )

    .catch( error => {

        response.status( 400 ).json( error )

    } );

}