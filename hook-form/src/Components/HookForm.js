import React, { useState } from 'react';

const HookForm = (props) => {

    const [ firstName, setFirstName ] = useState("");

    const [ lastName, setLastName ] = useState("");

    const [ email, setEmail ] = useState("");

    const [ password, setPassword ] = useState("");

    const [ confirmPassword, setConfirmPassword ] = useState("");

    const createUser = (e) => {

        e.preventDefault();
    
        const newUser = { firstName, lastName, email, password, confirmPassword };
    
        console.log(newUser);            

        setFirstName("");

        setLastName("");

        setEmail("");

        setPassword("");

        setConfirmPassword("");
    
    }

    return (

        <>

        <form onSubmit={ createUser }>

          <label>First Name: </label>  
          <input type="text" value={ firstName } onChange={ (e) => setFirstName(e.target.value) } />

          <label>Last Name: </label>  
          <input type="text" value={ lastName } onChange={ (e) => setLastName(e.target.value) } />

          <label>Email: </label>  
          <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } />

          <label>Password: </label>  
          <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />

          <label>Confirm Password: </label>  
          <input type="password" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } />

        </form>

        <p>Your Form Data</p>

        <p>First Name: { firstName }</p>

        <p>Last Name: { lastName }</p>

        <p>Email: { email }</p>

        <p>Password: { password }</p>

        <p>Confirm Password: { confirmPassword }</p>

        </>
    );

}

export default HookForm;