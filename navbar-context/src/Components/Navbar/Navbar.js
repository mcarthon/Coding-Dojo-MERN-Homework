import React, { useContext } from "react";
import { WrapperContext } from "../Wrapper/Wrapper";

const Navbar = () => {

    const nameContext = useContext(WrapperContext);

    return (

        <div><p>Hi {nameContext.name}!</p></div>

    );

}

export default Navbar;