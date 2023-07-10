function insertionSort(array) {      

    let i = 1;

    let j = i;

    while(i < array.length) {

        while(array[j-1] > array[j] && j > -1) {

            let temp = array[j];

            array[j] = array[j-1];

            array[j-1] = temp;

            j--;
            
        }

        i++;
        
        j = i;

    }

    return array;

}

console.log(insertionSort([6,1,9,34,25,6,0,12, -5, -34]));

module.exports = insertionSort;