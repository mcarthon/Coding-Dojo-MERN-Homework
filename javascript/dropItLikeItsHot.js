const betterFilter = ( array, callback ) => {

    return array.filter( element => callback( element ) );

};

const numbers1 = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {

  return elem > 5;

};

console.log( betterFilter( numbers1, callback1 ) );

const numbers2 = [...numbers1];

const callback2 = (elem) => {

  return elem > 2;

};

console.log( betterFilter( numbers2, callback2 ) );

const numbers3 = [...numbers1];

const callback3 = (elem) => false;

console.log( betterFilter( numbers, callback3 ) );