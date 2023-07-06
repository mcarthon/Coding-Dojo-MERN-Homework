import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [ pokemonNames, setPokemonNames ] = useState([]);

  const getPokemon = async () => {

  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
         
  const names = response.data.results.map(pokemon => {

    return pokemon.name;

  });

  setPokemonNames(names);

  }

  return (

    <>

      <button onClick={ getPokemon }> Fetch Pokemon </button>      

      <div>      

      { pokemonNames.length > 0 && ( 
      
          pokemonNames.map((pokemon, index) => {

              return <p key={index}> {pokemon} </p>;

          }) 
          
          ) }

      </div>

      </>

  );

}

export default App;
