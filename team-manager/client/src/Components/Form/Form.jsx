import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Form = (props) => {

    const { initialName, initialPosition, method, action } = props; 

    const [ name, setName ] = useState(initialName);

    const [ position, setPosition ] = useState(initialPosition);

    const navigate = useNavigate();

    const submitData = async (e) => {

        e.preventDefault();

        await axios[method]( `http://localhost:8000/api/players${action}`,
        
            { name, position }

        )

            .then( response => console.log( response.data.player ) )

            .catch( error => console.log( error ) );

        navigate("/");

    };

    const cancelChanges = (e) => {

        e.preventDefault();

        navigate("/");

    };    

    

    return (

        <form onSubmit={ submitData }>

            <label> Name: </label>
            <input type="text" value={ name } onChange={ (e) => setName( e.target.value ) }  />

            <label> Position: </label>
            <input type="text" value={ position } onChange={ (e) => setPosition( e.target.value ) }  />

            <input type="button" value="Cancel" onClick={ cancelChanges } />

            { name && name.length > 1 ?
            
            <input type="submit" value="Submit" />

            : <input type="submit" value="Submit" disabled/>
            
        }
            

        </form>

    );

}

export default Form;