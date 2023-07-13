import React, { useState, useEffect, useRef } from "react";

import { useParams } from "react-router-dom";

const PlayerStatus = () => {

    const [ players, setPlayers ] = useState([]);

    const playingRef = useRef(null);

    const notPlayingRef = useRef(null);

    const unavailableRef = useRef(null);

    useEffect( () => {

        axios.get( "http://localhost:8000/api/players" )

            .then( response => response.data.players )

            .catch( error => console.log( error ) );

    }, [ setPlayers ] ); 

    const handlePlaying = ( playerId, e ) => {

        e.preventDefault();

        axios.get( `http://localhost/api/players/${playerId}` )

            .then( response => setClickedPlayer( response.data.player ) )

            .catch( error => console.log( error ) );

        axios.patch( `http://localhost:8000/api/players/${ playerId }`, 
        
            {

               

            }

        )



    };

    return (

        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Actions </th>
                </tr>                
            </thead>
            <tbody>
                { players.map( ( player ) => {

                return (<tr key={ player._id }>

                        <td> {player.name} </td>

                        <td> <button onClick={ handlePlaying } > Playing </button> </td>

                        <td> <button onClick={ handleNotPlaying } > Not Playing </button> </td>

                        <td> <button onClick={ handleUnavailable } > Unavailable </button> </td>

                    </tr>)

                } ) }
            </tbody>
        </table>

    );

};

export default PlayerStatus;