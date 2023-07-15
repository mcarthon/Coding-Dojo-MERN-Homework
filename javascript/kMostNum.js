    function kNums(array, k) {

    let numFrequencies = {};

    for ( let index = 0; index < array.length; ++ index ) {

        numFrequencies[`${array[index]}`] ? ++ numFrequencies[`${array[index]}`] : numFrequencies[`${array[index]}`] = 1;

    }    

    let keys = Array.from(Object.keys(numFrequencies));

    return keys.sort((a, b) => numFrequencies[b] - numFrequencies[a]).slice(0, k);

};

console.log(kNums([1,2,2,3,3,3,4,4,4,4], 2));