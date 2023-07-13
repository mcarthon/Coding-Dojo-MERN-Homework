import axios from 'axios';

import React from 'react';

import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { WrapperContext } from '../Wrapper/Wrapper';

const DeleteButton = (props) => {

    const { id } = props;

    const navigate = useNavigate();

    const { authors, setAuthors } = useContext(WrapperContext);

    const deleteAuthor = async (e) => {        

        e.preventDefault();

        await axios.delete( `http://localhost:8000/api/authors/${id}` )

            .then( () => {

                setAuthors( authors.filter( author => author._id !== id ) );

                navigate("/");
            
            })

            .catch( error => console.log( error ) );                            

    }

    return(

        <form onSubmit={ deleteAuthor }>

            <input type="submit" value="Delete" />

        </form>

    );

}

export default DeleteButton;