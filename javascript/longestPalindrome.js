function longestPalindrome(string) {

    collectionOfPalindromes = [];

    for (let i = 0; i < string.length; ++ i) {        

        let substring = `${string[i]}`;

        for (let j = i + 1; j < string.length; ++ j) {

            if (string[j] !== string[i]) {

                substring += `${string[j]}`;

            }

            if (string[j] === string[i]) {

                substring += `${string[j]}`;

                if (isPalindrome(substring)) {

                    collectionOfPalindromes.push(substring);

                }

            }            

        }

    }

    if (collectionOfPalindromes.length < 1) {

        return string[0];

    }

    let longestPalindromeIndex = 0;

    for (let index = 0; index < collectionOfPalindromes.length; ++ index){

        if (collectionOfPalindromes[index].length > collectionOfPalindromes[longestPalindromeIndex].length) {

            longestPalindromeIndex = index;

        }

    }

    return collectionOfPalindromes[longestPalindromeIndex];

}

function isPalindrome(string) {

    for (let i = 0; i < Math.floor(string.length / 2); ++ i) {

        if (string[i] !== string[string.length - 1 - i]) {

            return false;

        }        

    }

    return true;

}

console.log(longestPalindrome("a1001x20002y5677765z"));

console.log(longestPalindrome("a1001x20002y567765z"));

console.log(longestPalindrome("Yikes! my favorite racecar erupted!"));

console.log(longestPalindrome("uh, not much"));