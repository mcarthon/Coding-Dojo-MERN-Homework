import React, { useContext } from 'react';
import { WrapperContext } from '../Wrapper/Wrapper';

const Result = () => {

    const context = useContext(WrapperContext);

    const data = context.data;

    const selectedOption = context.selectedOption;

    const displayData = () => {

        if (data) {
    
          switch (selectedOption) {
    
            case "people":
              
              return {
    
                name: data.name,
    
                height: data.height,
                
                mass: data.mass,
    
                birthYear: data.birth_year
    
              };
    
            case "planets":
              
              return {
    
                name: data.name,
    
                climate: data.climate,
    
                population: data.population,
    
                terrain: data.terrain
    
              };
    
            case "starships":
              
              return {
    
                name: data.name,
    
                model: data.model,
    
                manufacturer: data.manufacturer,
    
                capacity: data.capacity
    
              };          
    
            default:
              
              return null;
    
        }
    
      } 
      
      return null;            
    
    };

    return (

        <div>

        

        <div>

           { data !== null && selectedOption === "people" && (

              <>

              <h1> { displayData().name } </h1>

              <p> { displayData().height } </p>

              <p> { displayData().mass } </p>

              <p> { displayData().birthYear } </p>

              </>

          )  } 

          { data !== null && selectedOption === "planets" && (

              <>

              <h1> { displayData().name } </h1>

              <p> { displayData().climate } </p>

              <p> { displayData().population } </p>

              <p> { displayData().terrain } </p>

              </>

          )  } 

          { data !== null && selectedOption === "starships" && (

              <>

              <h1> { displayData().name } </h1>

              <p> { displayData().model } </p>

              <p> { displayData().manufacturer } </p>

              <p> { displayData().capacity } </p>

              </>

          )  } 

        </div>

        </div>

    );

}

export default Result;