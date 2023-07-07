import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { WrapperContext } from '../Wrapper/Wrapper';

const Form = () => {
  
    const context = useContext(WrapperContext);

    const navigate = useNavigate();

    const searchAPI = async (e) => {

        e.preventDefault();
    
        try {     
    
          const response = await axios.get(`https://swapi.dev/api/${context.selectedOption}/${context.id}/`);
      
          context.setData(response.data);

          switch (context.selectedOption) {

            case "people":

              navigate("/people");

              break;

            case "planets":

              navigate("/planets");

              break;

            case "starships":

                navigate("/starships");

                break;

            default:

              break;

          }
    
        }
    
        catch (error) {
    
            console.log(error);
    
            context.setData(null);
    
        }   
    
      };

    return (

        <form onSubmit={ searchAPI }>

        <label> Search for: </label>
        <select value={context.selectedOption} onChange={ (e) => context.setSelectedOption(e.target.value) }>

        <option value="people"> people </option>

        <option value="planets"> planets </option>

        <option value="starships"> starships </option>

        </select>

        <label> ID: </label>
        <input type="number" onChange={ (e) => context.setID(e.target.value) }/>

        <input type="submit" value="Search" />

        </form>

    );

}

export default Form;