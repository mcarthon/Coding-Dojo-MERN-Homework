function convertTo24HourClock(string) {

    if (string.substring(0,2) === "12" && string[8] === "A") {

        return `00${string.substring(2, 8)}`;

    }

    if (parseInt(string.substring(0, 2)) < 12 && string[8] === "P") {

        return `${parseInt(string.substring(0,2)) + 12}${string.substring(2, 8)}`;

    }

    return string.substring(0,8);

};

console.log(convertTo24HourClock("07:12:45PM"));

console.log(convertTo24HourClock("12:40:22AM"));

console.log(convertTo24HourClock("12:12:45PM"));