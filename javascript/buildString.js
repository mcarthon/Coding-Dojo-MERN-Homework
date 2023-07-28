const checkBuildString = ( string1, string2 ) => {

    string1 = string1.toLowerCase();

    string2 = string2.toLowerCase();

    for ( const index in string1 ) {

        if ( string2.indexOf( string1[ index ] ) !== -1 ) {

            string2 = string2.replace( string1[ index ], "" );

        }

        else {

            return false;

        }

    }    

    return true;

};

const strA1 = "Hello World";

const strB1 = "lloeh wordl";

console.log( checkBuildString( strA1, strB1 ) );

const strA2 = "Hey";

const strB2 = "hello";

console.log( checkBuildString( strA2, strB2 ) );

const strA3 = "hello";

const strB3 = "helo";

console.log( checkBuildString( strA3, strB3 ) );

const strA4 = "hello";

const strB4 = "lllheo";

console.log( checkBuildString( strA4, strB4 ) );

const strA5 = "hello";

const strB5 = "heloxyz";

console.log( checkBuildString( strA5, strB5 ) );