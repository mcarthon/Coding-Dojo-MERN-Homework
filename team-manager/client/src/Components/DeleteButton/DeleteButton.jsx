import axios from 'axios';

// import { confirm } from '../Modal/Modal';

const DeleteButton = props => {

    const { id, removeFromDom } = props;

    // const deleteModal = async () => {

    //     await confirm( 
            
    //         "Are you sure about that? (John Cena Meme)" ,
            
    //         "Yes, Delete Player",
            
    //         )  ?

    //         console.log( "Modal was accepted" )

    //         : console.log( "Modal was rejected" );

    // };

    const deletePlayer = async (e) => {

        e.preventDefault();

        if ( window.confirm( "Are you sure you want to delete this player?" ) === true ) {

            await axios.delete( `http://localhost:8000/api/players/${id}` )

            .then( response => console.log( response ) )

            .then( () => removeFromDom(id) )

            .catch( error => console.log( error ) );


        }
        
    };

    return (

        <button onClick={ deletePlayer }> Delete </button>

    );

}

export default DeleteButton;