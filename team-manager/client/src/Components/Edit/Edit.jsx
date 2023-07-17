import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import Form from '../Form/Form';

import axios from 'axios';

const Edit = () => {

    const { id } = useParams();

    const [ player, setPlayer ] = useState(null);

    useEffect( () => {

        axios.get( `http://localhost:8000/api/players/${id}` )

            .then( response => setPlayer( response.data.player ) )

            .catch( error => console.log( error ) );

    }, [ id ] );

    if (!player) {

        return <h1>Fetching Data...</h1>

    }

    return(

        <>

        <Form initialName={player.name} initialPosition={player.position} method={"patch"} action={`${player._id}`} ></Form>

        <Link to={"/"} > Home </Link>

        </>

    )

};

export default Edit;