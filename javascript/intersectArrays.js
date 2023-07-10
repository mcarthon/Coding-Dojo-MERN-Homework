function intersectArrays(array1, array2) {

    commonValues = [];

    for (let i = 0; i < array1.length; ++ i){

        if (array2.indexOf(array1[i]) !== -1 && commonValues.indexOf(array1[i]) === -1) {

            commonValues.push(array1[i]);

        }

    }

    for (let j = 0; j < array2.length; ++ j) {

        if (array1.indexOf(array2[j]) !== -1 && commonValues.indexOf(array2[j]) === -1) {

            commonValues.push(array2[j]);

        }

    }

    return commonValues.sort((a, b) => a - b);

}

console.log(intersectArrays([0,8, 1, 2, 2, 2, 7, -1], [8,2, 2, 6, 6, 7, -1]))