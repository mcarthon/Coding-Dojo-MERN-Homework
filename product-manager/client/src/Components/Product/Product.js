import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Product = () => {

    const { id } = useParams();

    const [ product, setProduct ] = useState(null);

    useEffect( () => {

        axios.get( `http://localhost:8000/api/product/${id}` )

            .then( response => setProduct(response.data.product) )

            .catch( error => console.log( error ) );

    }, [id]);

    if(!product) {

        return <div><h1>Loading.....</h1></div>

    }

    return (

        <div>

            <h1> { product.title } </h1>

            <h2> { product.price } </h2>

            <h3> { product.description } </h3>



        </div>

    );

}

export default Product;