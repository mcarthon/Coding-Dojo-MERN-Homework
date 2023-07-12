function highestWaterLevelIncrease(array) {

    if (array.length < 2) {

        return -1;

    }

    let maxIncrease = array[1] - array[0];

    for (let i = 0; i < array.length; ++ i) {

        for (let j = i + 1 ; j < array.length; ++ j) {

            if (array[j] <= array[j - 1]) {

                break;

            }

            if (array[j] - array[i] > maxIncrease) {

                maxIncrease = array[j] - array[i];
            }

        }

    }

    if (maxIncrease > 0) {

        return maxIncrease;

    }

    return -1;

}
