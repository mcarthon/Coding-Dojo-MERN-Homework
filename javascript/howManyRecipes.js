const howManyRecipes = ( recipe, available ) => {

    const receipeKeys = Object.keys(recipe);

    const availableKeys = Object.keys(available);

    let servings = [];

    for ( index in receipeKeys ) {

        if ( availableKeys.indexOf(receipeKeys[index]) === -1 ) {

            return 0;

        }

        servings.push(Math.floor( available[receipeKeys[index]]/recipe[receipeKeys[index]]));

    }

    let minServings = servings[0];

    for ( index in servings ) {

        if (servings[index] < minServings) {

            minServings = servings[index];

        }

    }

    return minServings;

};

const recipe1 = {

    "organic fat": 99,

    "broccoli seeds": 1,

    okra: 1,

    potato: 1,

    spicy: 5,

    "gourmet memes": 4200,

  };
  
  const available1 = {

    "organic fat": 990,

    "broccoli seeds": 1,

    okra: 10,

    potato: 10,

    spicy: 50,

    "gourmet memes": 42000,

    sugar: 9001,

    spice: 5,

    "everything nice": 1,

    "triple point water": 5,
    
  };

console.log( howManyRecipes( recipe1, available1 ) );

const available2 = { ...available1, ["broccoli seeds"]: 10 };

console.log( howManyRecipes(recipe1, available2 ) );

const available3 = { ...available1 };

delete available3["broccoli seeds"];

console.log( howManyRecipes(recipe1, available3 ) );