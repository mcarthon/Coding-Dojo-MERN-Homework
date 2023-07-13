import axios from 'axios';

const DeleteButton = (props) => {

    const { id, removeFromDom } = props;

    const deletePlayer = async (e) => {

        e.preventDefault();

        await axios.delete( `http://localhost:8000/api/players/${id}` )

            .then( response => console.log( response ) )

            .then( () => removeFromDom(id) )

            .catch( error => console.log( error ) );

    };

    return (

        <button onClick={ deletePlayer }> Delete </button>

    );

}

export default DeleteButton;