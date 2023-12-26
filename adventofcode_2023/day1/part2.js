// import file system functionality
const { getInputByLine, isDigit, getSumOfNumbers } = require('../helperFunctions');

// map to convert written digit to normal digit
const numberMap = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
}

// create a regex expression for parsing written words
const numberRegex = /[a-z]?zero|one|two|three|four|five|six|seven|eight|nine/;

// parse calibration values from input data
function getCalibrationValues(inputData) {
    // check for valid input data
    if (!inputData) return 0;

    // array for storing calibration values
    let calibrationValues = [];

    // parse each line of input
    inputData.forEach(line => {
        // string for storing current digit
        let checkString = '';
        let firstDigit = '';
        let lastDigit = '';

        // parse line in forward direction until match is found
        for (let character = 0; character < line.length; character++) {
            // if character is a digit, update firstDigit variable and break loop
            if (isDigit(line[character])) {
                firstDigit = line[character];
                break;
            }

            // add new character to check string
            checkString += line[character];

            // check to see if the check string contains any word matches from the map
            if (numberRegex.test(checkString)) {
                let number = checkString.match(numberRegex);
                firstDigit = numberMap[number];
                checkString = '';
                break;
            }
        }

        // parse line in reverse direction until match is found
        for (let character = (line.length - 1); character >= 0; character--) {
            // if character is a digit, update lastDigit variable and break loop
            if (isDigit(line[character])) {
                lastDigit = line[character];
                break;
            }

            // add new character to check string
            checkString = line[character] + checkString;

            // check to see if the check string contains any word matches from the map
            if (numberRegex.test(checkString)) {
                let number = checkString.match(numberRegex);
                lastDigit = numberMap[number];
                checkString = '';
                break;
            }
        }

        // concatenate first and last digits, convert to integer, and add it to the array
        if (firstDigit != null && lastDigit != null) {
            let value  = firstDigit + lastDigit;
            calibrationValues.push(parseInt(value));
        }


    });

    // return calibration values
    return calibrationValues;
}

// get input data, get calibrated values, calculate the sum, and print the answer
getInputByLine('input.txt', inputData => {
    let calibrationValues = getCalibrationValues(inputData);
    let answer = getSumOfNumbers(calibrationValues);
    console.log(`The answer for part 2 is: ${answer}`);
});
