const longNonRepeat = string => {
 
    if (string.length < 2) {

        return string;

    }
    
    let subStrings = [];

    for (let i = 0; i < string.length; ++ i) {

        let subString = string[i];

        for (let j = i + 1; j < string.length; ++ j) {

            if (subString.indexOf(string[j]) === -1) {

                subString += string[j];

            }

            else {

                subStrings.push(subString);

                break;

            }

        }

        subStrings.push(subString);

    }

    let longestSubstring = subStrings[0];

    for (let i = 0; i < subStrings.length; ++ i) {

        if (longestSubstring.length < subStrings[i]) {

            longestSubstring = subStrings[i];

        }

    }

    return longestSubstring;

};

console.log(longNonRepeat("a"));

console.log(longNonRepeat("ab"));

console.log(longNonRepeat("abc"));

console.log(longNonRepeat("abca"));