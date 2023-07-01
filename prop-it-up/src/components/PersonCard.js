import React, { useState } from 'react';

const PersonCard = (props) => {

    const [state, setState] = useState({

        age: props.age

    });

    const handleClick = () => {

        setState({

            age: state.age + 1

        });

    }

    return (

        <div>

            <h1> { props.lastName }, { props.firstName } </h1>

            <p> Age: { state.age } </p>

            <p> Age: { props.hairColor } </p>

            <button onClick={ handleClick }> Birthday Button for { props.firstName } { props.lastName } </button>

        </div>

    );    

}

export default PersonCard;