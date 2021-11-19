// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("VALID PASSWORD")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD")
// }

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = ;

// if (age >= 0 && age < 5 || age >= 65) {   //AND and OR operators
//     console.log("FREE")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("INVALID AGE")
// }

const firstName = prompt("enter your first name");
//If firstName is False, run prompt again
if (!firstName) {
    firstName = prompt("Try again")
}

const age = 45;
if (age >= 0 && age < 5 || age >= 65) {   //AND and OR operators
    console.log("FREE")