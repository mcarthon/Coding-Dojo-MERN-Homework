function fiveHeads() {

    return new Promise( (resolve, reject) => {

        let flips = 0;

        let heads = 0;

        while (flips < 11) {

            let flipResult = Math.round(Math.random());

            if (flipResult === 1) {

                ++ heads;

            }

            if (heads > 4) {

                resolve(` We have five heads in ${flips} flips.`);

            }

            flips ++;

        }

        reject("We didn't get five heads");

    } );

}

fiveHeads()
    
    .then (result => console.log(result))
    
    .catch (result => console.log(result));

console.log("The last console.log is this one")