// import helper functions
const { getInputByLine, getSumOfNumbers } = require('../helperFunctions');

// parse calibration values from input data
function getCalibrationValues(inputData) {
    // check for valid input data
    if (!inputData) return 0;

    // array for calibration values
    let calibrationValues = [];

    // fill array with all the calibration values
    inputData.forEach((line) => {
        // get first and last digit in the string
        let firstDigit = line.match(/\d/);
        let lastDigit = line.match(/\d(?=\D*$)/);

        // if both values are valid, concatenate the string and convert it to a decimal value
        if (firstDigit != null && lastDigit != null) {
            let value = firstDigit + lastDigit;
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
    console.log(`The answer for part 1 is: ${answer}`);
});




