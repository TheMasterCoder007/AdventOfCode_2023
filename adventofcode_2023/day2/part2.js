// import helper functions
const {getInputByLine, getSumOfNumbers} = require('../helperFunctions')

// get the power of each set
function getPowerOfSets(inputData) {
    // check for valid input data
    if (!inputData) return [];

    // parse input for draw data
    // calculate minimum required playing cubes
    // get the power of sets
    let powerOfSets = [];
    inputData.forEach(line => {
        let [gameIDString, drawString] = line.split(':');
        let gameDraws = drawString.split(';');
        let minimumRequiredCubes = findMinimumRequiredCubes(gameDraws);
        powerOfSets.push(calculatePowerOfSet(minimumRequiredCubes));
    });

    return powerOfSets;
}

// finds minimum number of each color of cube required for that game
function findMinimumRequiredCubes(draws) {
    let minimumRequiredCubes = {
        red: 0,
        green: 0,
        blue:0,
    }

    // parse colors to find minimum required cubes of each color
    draws.forEach(draw => {
       let colors = draw.split(',');
       colors.forEach(color => {
           let numberOfCubes = parseInt(color.replace(/\D/g, ''));

           if (color.includes('red') && numberOfCubes > minimumRequiredCubes.red) {
               minimumRequiredCubes.red = numberOfCubes;
           } else if (color.includes('green') && numberOfCubes > minimumRequiredCubes.green) {
               minimumRequiredCubes.green = numberOfCubes;
           } else if (color.includes('blue') && numberOfCubes > minimumRequiredCubes.blue) {
               minimumRequiredCubes.blue = numberOfCubes;
           }
       });
    });

    return minimumRequiredCubes;
}

// calculates the power of a set
function calculatePowerOfSet(set) {
    return set.red * set.green * set.blue;
}

// get input data from input file and process answer
getInputByLine('input.txt', inputData => {
    let powerOfSets = getPowerOfSets(inputData);
    let answer = getSumOfNumbers(powerOfSets);
    console.log(`The answer for part 2 is: ${answer}`);
});