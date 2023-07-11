import axios from 'axios';

import React, { createContext, useEffect, useState } from 'react';

import AllProducts from '../AllProducts/AllProducts';

import Form from '../Form/Form';

export const WrapperContext = createContext();

const Wrapper = () => {

    const [ allProducts, setAllProducts ] = useState([]);    

    useEffect( () => {

        axios.get( "http://localhost:8000/api/all-products" )

            .then( response => setAllProducts( response.data.products ) )

            .catch( error => console.log( error ) )

    }, [ setAllProducts ] )
    
    const productContext = { allProducts, setAllProducts };

    return (

        <>

            <WrapperContext.Provider value={ productContext }>

                <Form></Form>

                <AllProducts></AllProducts>

            </WrapperContext.Provider>

        </>

    );

}

export default Wrapper;