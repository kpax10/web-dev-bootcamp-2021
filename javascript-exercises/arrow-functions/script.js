// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x ** 2;
// }

// const square = num => { //if only one parameter, the brackets are optional
//     return num ** 2;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

//Replacing the curly braces with parenthesis allows an implicit return
//The parenthesis tell javascrips, 'return this'
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// const add = (a, b) => (
//     a + b
// )
//OR
const add = (a, b) => a + b //Can be done on the same line without braces or parenthesis


//All these functions do the same thing
// const isEven = function (num) {
//     return num % 2 === 0;
// }
// const isEven = (num) => {
//     return num % 2 === 0;
// }
// const isEven = num => (
//     num % 2 === 0;
// )
// const isEven = num => num % 2 === 0;



const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const scoreOfTen = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


//rewritten using arrow functions
const scoreOfTen = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))