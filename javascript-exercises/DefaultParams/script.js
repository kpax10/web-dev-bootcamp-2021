//This function will roll a die with the number of sides being the parameter entered.  If not, it will default to 6.
// function rollDie(numSides) {
//     if (numSides == undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }


//This function does the same thing.  
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

//Default values are placed at the end of the parameters.
function greet(person, msg = 'Hello', punct = '!') {
    console.log(`${msg}, ${person}${punct}`)
}