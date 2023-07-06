import React, { useReducer } from 'react';

const initialState = {

    firstName: {

        value: "",

        error: null

    },

    lastName: {

        value: "",

        error: null

    },

    email: {

        value: "",

        error: null

    }
    
};

function reducer(state, action) {

    switch (action.type) {

        case "firstName":

            return {

                ...state, 
                
                firstName: {

                    value: action.payload.value,
                    
                    error: action.payload.error

                }

            };

        case "lastName":

            return {

                ...state, 
                
                lastName: {

                    value: action.payload.value,
                    
                    error: action.payload.error

                }

            };     
            
        case "email":

            return {

                ...state, 
                
                email: {

                    value: action.payload.value,
                    
                    error: action.payload.error

                }

            };      
            
        default:
            
            return state;
            
    }

};

const Form = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    function handleChange(e) {

        const { name, value } = e.target;

        switch(name) {

            case "firstName":

                if (value.length < 10) {

                    dispatch({ type: name, payload: { value, error: "First Name must be at least 10 characters." } });

                }

                else {

                    dispatch({ type: name, payload: { value, error: null } });

                }

                break;
                
            case "lastName":

                if (value.length < 10) {

                    dispatch({ type: name, payload: { value, error: "Last Name must be at least 10 characters." } });

                }       
                
                else {

                    dispatch({ type: name, payload: { value, error: null } });

                }

                break;

            case "email":

                if (value.length < 10) {

                    dispatch({ type: name, payload: { value, error: "Email must be at least 10 characters. " } });

                }    
                
                else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    
                    dispatch({ type: name, payload: { value, error: "The email you entered is not a valid email." } });

                }

                else {

                    dispatch({ type: name, payload: { value, error: null } });

                }

                break;

            default:
                
                break;

        }

    };

    return (

        <div>

            <form>

                <div>

                <label>First Name: </label>

                <input type="text" name="firstName" value={state.firstName.value} onChange={ handleChange} />

                { state.firstName.error !== null && ( <p> { state.firstName.error } </p> ) }

                </div>

                <div>

                <label>Last Name: </label>

                <input type="text" name="lastName" value={state.lastName.value} onChange={ handleChange} />

                { state.lastName.error !== null && ( <p> { state.lastName.error } </p> ) }

                </div>

                <div>

                <label>Email: </label>

                <input type="text" name="email" value={state.email.value} onChange={ handleChange} />

                { state.email.error !== null && ( <p> { state.email.error } </p> ) }

                </div>

            </form>

        </div>

    );    

}
    
export default Form;