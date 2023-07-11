import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

const Form = () => {

    const [ title, setTitle ] = useState("");

    const [ price, setPrice ] = useState(0);

    const [ description, setDescription ] = useState("");

    const [ allProducts, setAllProducts ] = useState([]);


    useEffect( () => {

        axios.get( "http://localhost:8000/api/all-products" )

            .then( response => {
                
                setAllProducts( response.data.products );
            
                console.log(`Form Component API Call: ${(JSON.stringify(response.data.products))}`);
            
            } )

            .catch ( error => console.log( error ) );

        }, [setAllProducts] );


    const submitForm = async (e) => {

        e.preventDefault();

        await axios.post( "http://localhost:8000/api/new-product", 
        
            {

                title, price, description                

            }
        
        )

        .then( response => console.log(response) )

        .catch( error => console.log( error ) );

        await axios.get( "http://localhost:8000/api/all-products" )

            .then( response => setAllProducts(response.data.products) )

    }

    return (

        <div>

            <div>

                <form onSubmit={ submitForm }>

                    <label> Title: </label>
                    <input type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } />

                    <label> Price: </label>
                    <input type="number" value={ price } onChange={ (e) => setPrice(e.target.value) } />

                    <label> Description: </label>
                    <input type="text" value={ description } onChange={ (e) => setDescription(e.target.value) } />

                    <input type="submit" value="Create" />

                </form>

            </div>

            <div>

                <h1> All Products </h1>

                { allProducts.map( (product, index) => 

                <div key={ index }>
                    
                    <Link to={ `/product/${product._id}` } > { product.title } </Link>
                    
                </div>                                                                

             ) }

            </div>

        </div>

    );    

}

export default Form;