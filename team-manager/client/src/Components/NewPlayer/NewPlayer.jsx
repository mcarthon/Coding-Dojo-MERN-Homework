import Form from "../Form/Form";

import { Link } from 'react-router-dom';

const NewPlayer = () => {

    return (

        <>

        <Form method={"post"} action={""} />

        <Link to={ "/" } > Home </Link>

        </>

    );

};

export default NewPlayer;