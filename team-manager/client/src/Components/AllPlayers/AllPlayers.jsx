import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import DeleteButton from '../DeleteButton/DeleteButton';

const AllPlayers = () => {

    const [ players, setPlayers ] = useState([]);

    useEffect( () => {

        axios.get( "http://localhost:8000/api/players" )

            .then( response => setPlayers( response.data.players ) )

            .catch( error => console.log( error ) );

    }, [ setPlayers ] );

    const removeFromDom = playerId => {

        setPlayers( players.filter( player => player._id !== playerId ) );

    };

    return (

        <div>

            <div>

                <Link to={"/players/new"}><button>Add Player</button></Link>

                <Link to={"/players/status/0"} > Manage Player Status </Link>

            </div>

        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Position </th>
                    <th> Actions Available </th>
                </tr>                
            </thead>
            <tbody>
                { players.map( (player, index) => {

                return (<tr key={index}>

                        <td> {player.name} </td>

                        <td> {player.position} </td>

                        <td> <Link to={ `/players/${ player._id }` } ><button>Edit</button></Link> </td>

                        <td> <DeleteButton id={ player._id } removeFromDom={ removeFromDom } /> </td>

                    </tr>)

                } ) }
            </tbody>
        </table>

        </div>

    );

}

export default AllPlayers;