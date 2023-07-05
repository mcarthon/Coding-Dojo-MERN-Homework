import React, { useContext } from 'react';
import { WrapperContext } from '../Wrapper/Wrapper'

const Form = () => {

    const nameContext = useContext(WrapperContext);

    return (

        <>            

        <label>Your Name: </label>        
        <input type="text" value={nameContext.name} onChange={ (e) => nameContext.setName(e.target.value) } />

        </>


    );

}

export default Form;