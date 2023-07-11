import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import DeleteProduct from '../DeleteProduct/DeleteProduct';

const EditProduct = () => {

    const { id } = useParams();    

    const [ title, setTitle ] = useState("");

    const [ price, setPrice ] = useState(0);

    const [ description, setDescription ] = useState("");

    const navigate = useNavigate();


    useEffect( () => {

        axios.get( `http://localhost:8000/api/product/${id}` )

            .then( response => {

                console.log("Response Received");

                setTitle(response.data.product.title);

                setPrice(response.data.product.price);

                setDescription(response.data.product.description);

            } )

            .catch( error => console.log( error ) );

    }, [] );

    const productUpdate = async (e) => {

        e.preventDefault();

        await axios.patch( `http://localhost:8000/api/update-product/${id}`, 
        
            {

                title, price, description                

            }
        
        )

        .then( response => console.log(response) )

        .catch( error => console.log( error ) );        

        navigate(`/product/${id}`);

    }

    if(!title) {

        return <div><h1>Loading.....</h1></div>

    }

    return (

        <div>

            <div>

                <form onSubmit={ productUpdate }>

                    <label> Title: </label>
                    <input type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } />

                    <label> Price: </label>
                    <input type="number" value={ price } onChange={ (e) => setPrice(e.target.value) } />

                    <label> Description: </label>
                    <input type="text" value={ description } onChange={ (e) => setDescription(e.target.value) } />

                    <input type="submit" value="Update" />

                </form>

                <DeleteProduct/>

            </div>      
            
        </div>

    );

}

export default EditProduct;