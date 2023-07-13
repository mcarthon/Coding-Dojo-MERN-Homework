import React, { useEffect } from "react";

import axios from 'axios';

import { Link } from 'react-router-dom';

import DeleteButton from "../DeleteButton/DeleteButton";

import { useContext } from "react";

import { WrapperContext } from "../Wrapper/Wrapper";

const AllAuthors = () => {

    const context = useContext(WrapperContext);

    useEffect( () => {

        axios.get( "http://localhost:8000/api/authors" )

            .then( response => context.setAuthors( response.data.authors ) )

            .catch( error => console.log( error ) );

    }, [ context.setAuthors ] );

    if (!context.authors) {

        return <h1>Fetching Authors........</h1>

    }

    return (

        <div>

            <div>

                <Link to={"/authors/new"}><button>Add Author</button></Link>

            </div>

        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Actions Available </th>
                </tr>                
            </thead>
            <tbody>
                { context.authors.sort().map( (author, index) => {

                return (<tr key={index}>

                        <td> {author.name} </td>

                        <td> <Link to={ `/authors/${ author._id }` } ><button>Edit</button></Link> </td>

                        <td> <DeleteButton id={ author._id } /> </td>

                    </tr>)

                } ) }
            </tbody>
        </table>

        </div>

    )

};

export default AllAuthors;    