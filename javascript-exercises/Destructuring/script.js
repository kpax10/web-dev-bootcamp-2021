//Want to single out the first and second scores 
const scores = [923491, 828227, 781939, 529383, 478484, 2292933, 137264];

const highScore = scores[0];
const secondHighScore = scores[1];

//Shorter way of doing this using destructuring
const [gold, silver, bronze, ...everythingElse] = scores;