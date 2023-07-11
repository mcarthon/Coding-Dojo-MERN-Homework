import React, { useState } from 'react';

import axios from 'axios';

const Form = () => {

    const [ title, setTitle ] = useState("");

    const [ price, setPrice ] = useState(0);

    const [ description, setDescription ] = useState("");

    const submitForm = async (e) => {

        e.preventDefault();

        await axios.post( "http://localhost:8000/api/new-product", 
        
            {

                title, price, description                

            }
        
        )

        .then( response => console.log(response) )

        .catch( error => console.log( error ) );

    }

    return (

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

    );    

}

export default Form;