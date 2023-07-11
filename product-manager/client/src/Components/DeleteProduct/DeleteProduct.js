import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const DeleteProduct = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const deleteProduct = () => {

        axios.delete( `http://localhost:8000/api/delete-product/${id}` )

            .then( result => {} )

            .catch( error => console.log( error ) );


        navigate( "/" );            

    }

    return (

        <form onSubmit={ deleteProduct }>

            <input type="submit" value="Delete" />

        </form>

    );

}

export default DeleteProduct;