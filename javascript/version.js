const compareVersionNumbers = ( version1, version2 ) => {

    const leadingZerosRegex = /^([0-9]+)(\.)(0{1,})([0-9]+)$/gm;
    
    if ( version1.match( leadingZerosRegex ) ) {

        version1 = version1.replace( leadingZerosRegex, "$1$2$4" );

    }

    if ( version2.match( leadingZerosRegex ) ) {

        version2 = version2.replace( leadingZerosRegex, "$1$2$4" );

    }

    version1 = version1.replace( /\./g, "" );

    version2 = version2.replace( /\./g, "" );

    if ( version1.length > version2.length ) {

        version2 = version2 + "0".repeat( version1.length - version2.length );            

    }

    if ( version2.length > version1.length ) {

        version1 = version1 + "0".repeat( version2.length - version1.length );            

    }

    version1 = parseInt( version1 );

    version2 = parseInt( version2 );

    if ( version1 - version2 > 0 ) {

        return 1;

    }

    if ( version1 - version2 < 0 ) {

        return -1;

    }

    return 0;

};

const test1V1 = "0.1";

const test1V2 = "1.1";

console.log( compareVersionNumbers( test1V1, test1V2 ) );

const test2V1 = "1.0.1";

const test2V2 = "1";

console.log( compareVersionNumbers( test2V1, test2V2 ) );

const test3V1 = "7.5.2.4";

const test3V2 = "7.5.3";

console.log( compareVersionNumbers( test3V1, test3V2 ) );

const test4V1 = "7.5.2.4";

const test4V2 = "7.5.2";

console.log( compareVersionNumbers( test4V1, test4V2 ) );

const test5V1 = "1.01";

const test5V2 = "1.001";

console.log( compareVersionNumbers( test5V1, test5V2 ) );

const test6V1 = "1.0.1";

const test6V2 = "1";

console.log( compareVersionNumbers( test6V1, test6V2 ) );