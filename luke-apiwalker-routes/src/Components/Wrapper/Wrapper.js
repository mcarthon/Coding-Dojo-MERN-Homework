import React, { useState, createContext } from 'react';
import Form from '../Form/Form';
import Result from '../Result/Result';

export const WrapperContext = createContext();

const Wrapper = () => {

    const [ data, setData ] = useState({});

    const [ selectedOption, setSelectedOption ] = useState("people");

    const [ id, setID ] = useState(1);

    const dataContext = {

        data,

        setData,

        selectedOption,

        setSelectedOption,

        id,

        setID

    };

    return (

        <WrapperContext.Provider value={dataContext}>
            <Form></Form>
            <Result></Result>            
        </WrapperContext.Provider>

    );

}

export default Wrapper;