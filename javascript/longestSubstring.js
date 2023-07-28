const longestSubstring = string => {

    if ( string.length < 2 ) {

        return string;

    }

    subStringCollection = [];

    for ( let index = 0; index < string.length; ++ index ) {

        let subString = string[index];

        for ( let jindex = index + 1; jindex < string.length; ++ jindex ) {

            if ( subString.indexOf(string[jindex]) === -1 ) {

                subString += string[jindex];

            }

            else {

                if ( subString.length === string.length ) {

                    return subString.length;

                }

                break;

            }            

        }

        subStringCollection.push( subString );

    }

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