function diagonalDifference(matrix) {

    let topLeftToBotRightSum = 0;

    let topRightToBotLeftSum = 0;

    for (let i = 0; i < matrix[0].length; ++ i) {

        topLeftToBotRightSum += matrix[i][i];         
        
        topRightToBotLeftSum += matrix[i][matrix[0].length - 1 - i];

    }

    return Math.abs(topLeftToBotRightSum - topRightToBotLeftSum);

}

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

console.log(diagonalDifference(squareMatrix1));

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];

  console.log(diagonalDifference(squareMatrix2));  