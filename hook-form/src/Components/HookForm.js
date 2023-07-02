import React, { useState } from 'react';

const HookForm = (props) => {

    const [ firstName, setFirstName ] = useState("");

    const [ firstNameError, setFirstNameError ] = useState("");

    const [ lastName, setLastName ] = useState("");

    const [ lastNameError, setLastNameError ] = useState("");

    const [ email, setEmail ] = useState("");

    const [ emailError, setEmailError ] = useState("");

    const [ password, setPassword ] = useState("");

    const [ passwordError, setPasswordError ] = useState("");

    const [ confirmPassword, setConfirmPassword ] = useState("");

    const [ confirmPasswordError, setConfirmPasswordError ] = useState("");    

    const handleFirstName = (e) => {

        setFirstName(e.target.value);

        if (e.target.value.length < 1) {

            setFirstNameError(("First Name is required"));

        }

        else if (e.target.value.length < 2) {

            setFirstNameError(("First Name must be at least two characters long"));

        } 

        else {

            setFirstNameError("");

        }

    }

    const handleLastName = (e) => {

        setLastName(e.target.value);

        if (e.target.value.length < 1) {

            setLastNameError(("Last Name is required"));

        }

        else if (e.target.value.length < 2) {

            setLastNameError(("Last Name must be at least two characters long"));

        } 

        else {

            setLastNameError("");

        }
        
    }

    const handleEmail = (e) => {

        setEmail(e.target.value);

        if (e.target.value.length < 1) {

            setEmailError(("Email is required"));

        }

        else if (e.target.value.length < 2) {

            setEmailError(("Email must be at least two characters long"));

        } 

        else {

            setEmailError("");

        }

    }

    const handlePassword = (e) => {

        setPassword(e.target.value);

        if (e.target.value.length < 1) {

            setPasswordError(("Password is required"));

        }

        else if (e.target.value.length < 8) {

            setPasswordError(("Password must be at least eight characters long"));

        } 

        else {

            setPasswordError("");

        }

    }

    const handleConfirmPassword = (e) => {

        setConfirmPassword(e.target.value);

        if (e.target.value !== password) {

            setConfirmPasswordError(("Passwords do not match"));

        }

        else {

            setConfirmPasswordError("");

        }

    }

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

        <div>
          <label>First Name: </label>  
          <input type="text" value={ firstName } onChange={ handleFirstName } />         
        </div>

        <div> { firstNameError }</div>

        <div>
          <label>Last Name: </label>  
          <input type="text" value={ lastName } onChange={ handleLastName } />
        </div>

        <div>{ lastNameError }</div>

        <div>
          <label>Email: </label>  
          <input type="text" value={ email } onChange={ handleEmail } />
        </div>

        <div>{ emailError }</div>

        <div>
          <label>Password: </label>  
          <input type="password" value={ password } onChange={ handlePassword } />
        </div>

        <div>{ passwordError }</div>

        <div>
          <label>Confirm Password: </label>  
          <input type="password" value={ confirmPassword } onChange={ handleConfirmPassword } />
        </div>

        <div>{ confirmPasswordError }</div>

        <div>
          <input type="submit"/>
        </div>

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