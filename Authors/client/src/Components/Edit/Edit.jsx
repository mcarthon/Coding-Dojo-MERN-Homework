import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Form from '../Form/Form';

import axios from 'axios';

const Edit = () => {

    const { id } = useParams();

    const [ author, setAuthor ] = useState(null);

    useEffect( () => {

        axios.get( `http://localhost:8000/api/authors/${id}` )

            .then( response => setAuthor( response.data.author ) )

            .catch( error => console.log( error ) );

    }, [ ] );

    if (!author) {

        return <h1>Fetching Data...</h1>

    }

    return(

        <>
        <Form initialName={author.name} method={"patch"} action={`${author._id}`} ></Form>
        </>

    )

};

export default Edit;