const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0
// for (let price of prices) {
//     total += price;
// }
// console.log(total)

//This will sum every element together
// const total = prices.reduce((total, price) => {
//     return total + price
// })

// //Want to find the minimum value of the array
// const minPrice = prices.reduce((min, price) => {
//     if (price < min){
//         return price;
//     }
//     return min;
// })



const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

//Want to find the highest rated movie
const highScore = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie.score;
    }
    return bestMovie;
})


//You can change the initial value below.  The .reduce function has two arguments available.
const evens = [2, 4, 6, 8];
const total = evens.reduce((accum, current) => {
    return accum + current;
}, 100)
