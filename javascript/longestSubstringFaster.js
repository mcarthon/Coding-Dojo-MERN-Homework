const longestSubstring = string => {

    let newSubstring = true;

    let subStringCollection = [];

    let subString = '';

    for ( let index = 0; index < string.length - 1; ++ index ) {

        if ( newSubstring ) {

            subString = string[ index ];  

            newSubstring = false;

        }

        if ( subString.indexOf( string[ index + 1 ] ) === -1 ) {

            subString += string[ index + 1 ];

        }

        else {  

            subStringCollection.push( subString );

            newSubstring = true;

            index = subStringCollection.length - 1;



        }

    }

    subStringCollection.push( subString );

    if ( subStringCollection.length < 2 ) {

        return subStringCollection[0].length;

    }

    let maxLengthSubstring = subStringCollection[0];

    for ( let kindex = 1; kindex < subStringCollection.length; ++ kindex ) {

        if ( subStringCollection[ kindex ].length > maxLengthSubstring.length ) {

            maxLengthSubstring = subStringCollection[ kindex ];

        }

    }

    return maxLengthSubstring.length;

};

const str1 = "abcabcbb";

const str2 = "bbbbb";

const str3 = "pwwkew";

const str4 = "dvadf";

console.log( longestSubstring( str1 ) );

console.log( longestSubstring( str2 ) );

console.log( longestSubstring( str3 ) );

console.log( longestSubstring( str4 ) );