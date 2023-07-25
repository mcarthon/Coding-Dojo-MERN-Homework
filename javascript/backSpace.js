const backSpace = ( string1, string2 ) => {

    let someStringWasChanged = false;

    for ( let index = 0; index <= string1.length; ++ index ) {

        if ( string1[index] === "#" ) {

            string1 = string1.slice(index + 1);

            someStringWasChanged = true;

        }

        if ( string2[index] === "#" ) {

            string2 = string2.slice(index + 1);

            someStringWasChanged = true;

        }

        if ( someStringWasChanged ) {

            index = -1;
            
            someStringWasChanged = false;

        }

    }

    return string1 === string2;

};

const S1 = "ab#c";

const T1 = "ad#c";

console.log( backSpace( S1, T1 ) );


const S2 = "ab##";

const T2 = "c#d#"; 

console.log( backSpace( S2, T2 ) );

const S3 = "a##c";

const T3 = "#a#c";

console.log( backSpace( S3, T3 ) );

const S4 = "a#c";

const T4 = "b";

console.log( backSpace( S4, T4 ) );