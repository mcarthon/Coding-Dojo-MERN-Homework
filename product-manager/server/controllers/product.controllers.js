const { Product } = require( "../models/product.model" );

const { response } = require( "express" );

module.exports.createProduct = ( request, response ) => {

    const { title, price, description } = request.body;

    Product.create({

        title,

        price,

        description

    })

    .then( product => response.json( product ) )

    .catch( error => console.log( error ) );

}

module.exports.findAllProducts = ( request, response ) => {

        Product.find()

            .then( (allProducts) => {

                response.json({

                    products: allProducts

                })

            } )

            .catch( (error) => {

                response.json( error )

            } );

}

module.exports.findOneProduct = ( request, response ) => {

    Product.findById({

        _id: request.params.id

    })

        .then( product => {

            response.json({

                product: product

            })

        } )

        .catch( error => {

            response.json( error )

        } )

}

module.exports.updateProduct = ( request, response ) => {

    Product.updateOne(
        
        { _id: request.params.id },

        request.body,

        { new:true, runValidators: true }
        
    )

    .then( product => {

        response.json({ product: product })

    } )

    .catch( error => { 

        response.json( error )

    } );

}

module.exports.deleteProduct = ( request, response ) => {

    Product.findByIdAndDelete({

        _id: request.params.id

    })        

    .then( result => {} )

    .catch( error => {

        response.json( error )

    } );

}