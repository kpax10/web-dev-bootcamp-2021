//pass in a function that need to return true or false.  If it ever runs true for a given element, that element is added into the new filtered array that is created.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// //Creates a new array with the following parameters
// numbers.filter(n => {
//     return n < 10
// })


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// //Creates new array of goodMovies
// const goodMovies = movies.filter(m => m.score >= 85)
// //Creates array of goodMovie titles
// const goodTitles = goodMovies.map(m => m.title)
// //This will do the same code on a single line.
// movies.filter(m => m.score >= 80).map(m => m.title);



// const badMovies = movies.filter(m => m.score < 70)
// const recentMovies = movies.filter(m => m.year > 2015)




// const userNames = ['fjkdsapoiapsoifo', 'sdasdadfafdf', 'dfd', 'sss']

// const validUserNames = userNames.filter((name) => {
//     return name.length < 10
// }) 


//creates a function 'validUserNames' that takes an array, 'userNames'. userNames is filtered to create a new array.
function validUserNames(userNames) {
    return userNames.filter((names) => {
        return names.length < 10;
    })
}