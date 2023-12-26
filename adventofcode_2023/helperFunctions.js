// import file system functionality
const fs = require('fs');

// read in the full contents of the input without any modifications
function getFullInput(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }

        // update callback with input data
        callback(data);
    })
}

// read in contents of input and split by line
function getInputByLine(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }

        // split input by line
        const splitInput = data.split('\n');

        // update callback with input data
        callback(splitInput);
    })
}

// checks to see if a character is a digit
function isDigit(character) {
    return /\d/.test(character);
}

// calculates the sum of an array of numbers
function getSumOfNumbers(arrayOfNumbers) {
    let sum = 0;
    arrayOfNumbers.forEach(value => {
        sum += value;
    });

    return sum;
}

// export modules for use in other js modules
module.exports = { getFullInput, getInputByLine, isDigit, getSumOfNumbers };
