// function sum() {
//     console.log(arguments)
// }

// //if you pass more than one arguement into nums, only the first one will be recognized
// function sum(nums) {

// }

//The rest ... in front of nums will collect the rest of the parameters and creates an actual array.
// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }
//this function will allow you to enter any amount of numbers and they will be added.


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold goes to: ${gold}`)
    console.log(`Silver goes to: ${silver}`)
    console.log(`And a special thank you to: ${everyoneElse} `)
}
