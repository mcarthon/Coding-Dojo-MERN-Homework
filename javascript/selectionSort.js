function selectionSort(array) {

    if (array.length < 2) {

        return array;

    }

    for (let i = 1; i < array.length; ++ i) {

        if (array[i] < array[0]) {

            let temp = array[0];

            array[0] = array[i];
            
            array[i] = temp; 
            
        }

    }

    return [array[0]].concat(selectionSort(array.slice(1)));

}

console.log(selectionSort([4,5,2, 4, 100, 6, 9]));