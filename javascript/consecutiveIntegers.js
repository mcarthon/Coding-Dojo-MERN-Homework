function consecutiveIntegers(array) {

    if (array.length < 2) {

        return [];

    }             
    
    let nonConsecNums = [];

    for (let i = 0; i < array.length; ++ i) {

        if (array[i + 1] > (array[i] + 1)) {

            nonConsecNums.push({ i: i + 1, n: array[i + 1] });

        }

    }

    return nonConsecNums;

}

console.log(consecutiveIntegers([-1, 0, 6, 7, 9, 10, 13]));