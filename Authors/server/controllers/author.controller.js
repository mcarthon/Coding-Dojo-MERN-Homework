const { Author } = require( "../models/author.model" );

const { response } = require( "express" );

module.exports.createAuthor = ( request, response ) => {

    const { name } = request.body;

    Author.create({

        name

    })

    .then( author => response.json( author ) )

    .catch( error => response.status( 400 ).json( error ) );

}

module.exports.findAllAuthors = ( request, response ) => {

        Author.find()

            .then( (allAuthors) => {

                response.json({

                    authors: allAuthors

                })

            } )

            .catch( (error) => {

                response.status( 400 ).json( error )

            } );

}

module.exports.findOneAuthor = ( request, response ) => {

    Author.findById({

        _id: request.params.id

    })

        .then( author => {

            response.json({

                author: author

            })

        } )

        .catch( error => {

            response.status( 400 ).json( error )

        } )

}

module.exports.updateAuthor = ( request, response ) => {

    Author.updateOne(
        
        { _id: request.params.id },

        request.body,

        { new:true, runValidators: true }
        
    )

    .then( author => {

        response.json({ author: author })

    } )

    .catch( error => { 

        response.status( 400 ).json( error )

    } );

}

module.exports.deleteAuthor = ( request, response ) => {

    Author.findByIdAndDelete({

        _id: request.params.id

    })        

    .then( result => {
        
        console.log("record was deleted")
    
        response.status( 200 ).json({

            message: `Author with id: ${request.params.id} was successfully deleted.`

        });
    
    } )

    .catch( error => {

        response.status( 400 ).json( error )

    } );

}