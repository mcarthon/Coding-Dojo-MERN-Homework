import React, { useState } from 'react';

import axios from 'axios';

const Form = () => {

    const [ firstName, setFirstName ] = useState("");

    const [ lastName, setLastName ] = useState("");

    const submitForm = async (e) => {

        e.preventDefault();

        await axios.post( "http://localhost:8000/api/people",
        
        {

            firstName,

            lastName

        }    

        )

        .then( data => console.log( data.data ) )

        .catch( error => console.log( error ) );

    }

    return (

        <div>

            <form onSubmit={ submitForm }>

                <label> First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />

                <label> Last Name: </label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />

                <input type="submit" value="Add Name" />

            </form>

        </div>

    );

}

export default Form;