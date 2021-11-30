// let count = 0;
// while (count < 10) {
//     console.log(count)
//     count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code!")
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code!")
// }
// console.log("CONGRATS!")


// let input = prompt("Hey, say something")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase()) === "stop copying me" break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i <= 1000; i++) {
//     console.log(i)
//     if (i === 500) break;
// }


let maximum = parseInt(prompt("Enter your maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter new guess:")
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
if (guess === 'q') {
    console.log('You quit')
} else {
    console.log(`YOU GOT IT! IT TOOK YOU ${attempts} guesses `)

}