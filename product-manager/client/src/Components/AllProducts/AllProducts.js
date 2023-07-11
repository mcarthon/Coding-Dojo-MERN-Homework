import React, { useContext, useEffect } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import { WrapperContext } from '../Wrapper/Wrapper';

const AllProducts = () => {

    const context = useContext(WrapperContext);

    useEffect( () => {

        axios.get( "http://localhost:8000/api/all-products" )

            .then( response => {
                
                context.setAllProducts( response.data.products );
            
                console.log(`Form Component API Call: ${(JSON.stringify(response.data.products))}`);
            
            } )

            .catch ( error => console.log( error ) );

        }, [context.setAllProducts] );

    return (

        <div>

        <h1> All Products </h1>

        { context.allProducts.map( (product, index) => 

        <div key={ index }>
            
            <Link to={ `/product/${product._id}` } > { product.title } </Link>
            
        </div>                                                                

     ) }

    </div>

    );        

}

export default AllProducts;