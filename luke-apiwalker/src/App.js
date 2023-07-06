import React, { useState } from 'react';

import axios from 'axios';

function App() {

  const [ selectedOption, setSelectedOption ] = useState("people")

  const [ id, setID ] = useState(1);

  const [ data, setData ] = useState(null);

  const searchAPI = async (e) => {

    e.preventDefault();

    try {     

      const response = await axios.get(`https://swapi.dev/api/${selectedOption}/${id}/`);
  
      setData(response.data);

    }

    catch (error) {

        console.log(error);

        setData(null);

    }   

  };

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

        <form onSubmit={ searchAPI }>

          <label> Search for: </label>
          <select value={selectedOption} onChange={ (e) => setSelectedOption(e.target.value) }>

            <option value="people"> people </option>

            <option value="planets"> planets </option>

            <option value="starships"> starships </option>

          </select>

          <label> ID: </label>
          <input type="number" onChange={ (e) => setID(e.target.value) }/>

          <input type="submit" value="Search" />

        </form>        

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

export default App;
