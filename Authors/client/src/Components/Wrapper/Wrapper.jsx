import React, { createContext, useState } from "react";

import AllAuthors from "../AllAuthors/AllAuthors";

export const WrapperContext = createContext();

const Wrapper = () => {

    const [ authors, setAuthors ] = useState(null);

    const authorContext = {

        authors,

        setAuthors

    };

    return (

        <>
        
            <WrapperContext.Provider value={authorContext}>

                <AllAuthors>

                </AllAuthors>

            </WrapperContext.Provider>

        </>

    );

};

export default Wrapper;