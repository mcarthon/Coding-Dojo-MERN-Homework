import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Form = (props) => {

    const { initialName, method, action } = props; 

    const [ name, setName ] = useState(initialName);

    const navigate = useNavigate();

    const submitName = async (e) => {

        e.preventDefault();

        await axios[method]( `http://localhost:8000/api/authors/${action}`,
        
            { name }

        )

            .then( response => console.log( response.data.author ) )

            .catch( error => console.log( error ) );

        navigate("/");

    };

    const cancelChanges = (e) => {

        e.preventDefault();

        navigate("/");

    };    

    return (

        <form onSubmit={ submitName }>

            <label> Name: </label>
            <input type="text" value={ name } onChange={ (e) => setName( e.target.value ) }  />

            <input type="button" value="Cancel" onClick={ cancelChanges } />

            <input type="submit" value="Submit" />

        </form>

    );

}

export default Form;