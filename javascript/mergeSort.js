// function mergeSort(sortedLeft, sortedRight) {

//     if (sortedLeft.length < 1) {

//         return sortedRight;

//     }
    
//     if (sortedRight.length < 1) {

//         return sortedLeft;

//     }
    
//     if (sortedLeft.length < 2) {

//         if (sortedLeft[0] <= sortedRight[0]) {

//             return sortedLeft.concat(sortedRight);

//         }            

//     }

//     if (sortedRight.length < 2) {

//         if (sortedRight[0] <= sortedLeft[0]) {

//             return sortedRight.concat(sortedLeft);

//         }            

//     }

//     if (sortedLeft.length > 1 && sortedRight.length > 1) {

//         let leftSortedLeft = sortedLeft.slice(0, Math.ceil((sortedLeft.length - 1) / 2));

//         let rightSortedLeft = sortedLeft.slice(Math.ceil((sortedLeft.length - 1) / 2), sortedLeft.length);

//         let leftSortedRight = sortedRight.slice(0, Math.ceil((sortedRight.length - 1) / 2));

//         let rightSortedRight = sortedRight.slice(Math.ceil((sortedRight.length - 1) / 2), sortedRight.length);

//         mergeSort(leftSortedLeft, rightSortedLeft);

//         mergeSort(leftSortedRight, rightSortedRight);

//     }    

//     return sortedLeft.concat(sortedRight);

// }

function merge(left = [], right = []) {

    let output= []

    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]) {
            output.push(left[leftIndex])
            leftIndex++
        } else {
            output.push(right[rightIndex])
            rightIndex++
        }
    }

    while (rightIndex < right.length) {
        output.push(right[rightIndex])
        rightIndex++
    }

    while (leftIndex < left.length) {
        output.push(left[leftIndex])
        leftIndex++
    }
    return output

}

function mergeSort(numbers = []) {

    if (numbers.length === 1){
        return numbers
    }

    const middleIdx = Math.floor(numbers.length/2)

    const left = numbers.slice(0,middleIdx)
    const right = numbers.slice(middleIdx)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

console.log(mergeSort([10,9,8,7,6,5,4,3,2,1,0]));