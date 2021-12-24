// ===================
// DESTRUCTURING ARRAYS
// ===================
//Want to single out the first and second scores 
// const scores = [923491, 828227, 781939, 529383, 478484, 2292933, 137264];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// //Shorter way of doing this using destructuring
// const [gold, silver, bronze, ...everythingElse] = scores;

// ====================
// DESTRUCURING OBJECTS
// ====================
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacey@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const fullName = firstName + lastName;

//Make an email variable from user , under the email property.  Each of these variables are holding just their corresponding properties from the user object
// const { email, password, bio } = user;
// // To rename the destructured variable, it can be done with the colon below
// const { born: birthYear, died: deathYear = 'N/A' } = user;

const { city, state, died = 'N/A' } = user2;

// ========================
// DESTRUCTURING PARAMETERS
// ========================
//two ways of doing the same thing
// function fullName {
//     return `${user.firstName} ${user.lastName}`
// }
// //This way uses deconstructed parameters
// function fullName(user) {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`
// }
// You can destructure firstName and lastName from the object
function fullName({ firstName, lastName = 'N/A' }) {
    return `${firstName} ${lastName}`
}


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

// Want to filter movies based on score
// const highScore = movies.filter((movie) => movie.score > 80)
// This will do the same thing, but by destructuring score from the object
// const highScore = movies.filter(({ score }) => score > 80)

// List all movies with title, year, and score.
// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
// This does the same as above, except the title, year, and score are destructured from the object movies
movies.map(({ title, year, score }) => {
    return `${title} (${year}) is rated ${score}`
})