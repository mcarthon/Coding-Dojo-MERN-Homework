import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import axios from 'axios';

const PlayerStatus = () => {

    const { gameNumber } = useParams();

    const [ players, setPlayers ] = useState([]);

    useEffect( () => {

        axios.get( "http://localhost:8000/api/players" )

            .then( response => setPlayers(response.data.players) )

            .catch( error => console.log( error ) );

    }, [ setPlayers ] ); 

    const handleStatus = async ( playerId, e, status ) => {

        e.preventDefault();

        const response = await axios.get( `http://localhost:8000/api/players/${ playerId }` );

        let gameStatus = response.data.player.gameStatus;

        gameStatus[gameNumber] = status;

        await axios.patch( `http://localhost:8000/api/players/${ playerId }`, 
        
            {

               gameStatus: gameStatus

            }

        )

        .then( response => console.log(response) )

        .catch( error => console.log( error ) );

        await axios.get( "http://localhost:8000/api/players" )

        .then( response => setPlayers(response.data.players) )

        .catch( error => console.log( error ) );

    };

    return (

    <div>
    <h1> Game { parseInt(gameNumber) + 1 } </h1>   

        <Link to={"/"} > Home </Link>
    
        <Link to={ "/players/status/0" } > Game 1 </Link>

        <Link to={ "/players/status/1" } > Game 2 </Link>

        <Link to={ "/players/status/2" } > Game 3 </Link>

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

                        {player.gameStatus[gameNumber] === "Playing" ? (

                            <>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Playing") } style={{backgroundColor:"green", color:"white" }} > Playing </button> </td>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Not Playing") } > Not Playing </button> </td>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Unavailable") } > Unavailable </button> </td>

                            </>

                        )

                        : player.gameStatus[gameNumber] === "Not Playing" ? (

                            <>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Playing") } > Playing </button> </td>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Not Playing") } style={{ backgroundColor:"red", color:"white" }} > Not Playing </button> </td>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Unavailable") } > Unavailable </button> </td>

                            </>

                        )

                        : (

                            <>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Playing") } > Playing </button> </td>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Not Playing") } > Not Playing </button> </td>

                            <td> <button onClick={ (e) => handleStatus(player._id, e, "Unavailable") } style={{ backgroundColor:"yellow" }} > Unavailable </button> </td>

                            </>


                        )}
                    
                    </tr>)

                } ) }
            </tbody>
        </table>
        </div>        

    );

};

export default PlayerStatus;