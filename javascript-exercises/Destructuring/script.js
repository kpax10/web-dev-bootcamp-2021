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