import React, { useState } from 'react';

function App() {

  const [ pokemonNames, setPokemonNames ] = useState([]);

  const getPokemon = async () => {

    await fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")

      .then(response => {

            return response.json();
          
        })

      .then(data => {

          const names = data.results.map(

            pokemon => {

              return pokemon.name;

            }

          );

          return names;

      })
      
      .then(names => {

        setPokemonNames(names);

        console.log(names);

      })

      .catch(error => {

          console.log(error);

      })        

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
