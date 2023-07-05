import React, { createContext, useState } from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';
import Navbar from '../Navbar/Navbar';

export const WrapperContext = createContext();

const Wrapper = () => {    

    const [ name, setName ] = useState("");

    const contextName = {

        name,

        setName

    };

    return (

        <WrapperContext.Provider value={contextName}>
            <Navbar></Navbar>
            <FormWrapper></FormWrapper>
        </WrapperContext.Provider>

    );

}

export default Wrapper;