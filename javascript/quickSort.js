function quickSort(array) {

    if (array.length < 2) {

        return array;

    } 
    
    let pivotIndex = Math.ceil((array.length - 1) / 2);

    let pivot = array[pivotIndex];

    let i = 0;

    let j = array.length - 1;

    while(i < pivot && j > pivot) {

        let isIStuck = false;

        let isJStuck = false;

        array[i] < pivot ? i++ : isIStuck = true;

        array[j] > pivot ? j-- : isJStuck = true;

        if (isIStuck && isJStuck) {

            let temp = array[j];

            array[j] = array[i];

            array[i] = temp;
                
        }

    }

    return array;

}

console.log(quickSort([4, 8, 5, 7, 1, 6, 10, 2, 3 ,9]));