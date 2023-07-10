function socialDistancingEnforcer(array) {

    if (array.indexOf(1) === -1) {

        return true;
    }
    
    if (array.length < 8) {

        return false;

    }

    for (let i = 0; i < array.length; ++ i) {

        if (array[i] === 1) {

            let distance = 0;

            for (let j = i + 1; j < array.length; ++ j) {

                if (array[j] === 0) {

                    distance ++;

                }

                else {

                    if (distance < 6) {

                        return false;

                    }

                    break;

                }

            }

        }

    }

    return true;

}

console.log(socialDistancingEnforcer([0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1]));

console.log(socialDistancingEnforcer([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]));

console.log(socialDistancingEnforcer([1, 0, 0, 0, 0, 0, 0, 0, 1]));

console.log(socialDistancingEnforcer([]));