// import helper functions
const { getInputByLine, getSumOfNumbers } = require('../helperFunctions');

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

// get all valid game ID's
function getValidGameIDs(inputData) {
    // check for valid input data
    if(!inputData) return [];

    // parse input for all valid game ID's
    let validGameIDs = [];
    inputData.forEach(line => {
        // parse string into game ID and draw data
        let [gameIdString, drawsString] = line.split(':');
        let gameID = parseInt(gameIdString.replace(/\D/g, ''));
        let gameDraws = drawsString.split(';');

        // check game for validity and push to array if valid
        if (isGameValid(gameDraws)) {
            validGameIDs.push(gameID);
        }
    });

    return validGameIDs;
}

// check if game is valid
function isGameValid(gameDraws) {
    return gameDraws.every(draw => {
        let colors = draw.split(',');
        return colors.every(colorIsValid);
    })
}

// check if color is within valid range
function colorIsValid(color) {
    let count = parseInt(color.replace(/\D/g, ''));
    return !((color.includes('red') && count > MAX_RED)
        || (color.includes('green') && count > MAX_GREEN)
        || (color.includes('blue') && count > MAX_BLUE));
}

// get input data from input file and process answer
getInputByLine('input.txt', inputData => {
    let validGameIDs = getValidGameIDs(inputData);
    let answer = getSumOfNumbers(validGameIDs);
    console.log(`The answer for part 1 is: ${answer}`);
});