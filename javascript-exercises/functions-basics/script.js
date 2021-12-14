// function singSong() {
//     console.log('DO');
//     console.log('RE');
//     console.log('ME');
// }

// singSong()

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }



// function repeat(word, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += word;
//     }
//     console.log(result);
// }



// greet('Elvis');  Elvis will be assigned to firstName


//with loops//
// function rant(message) {
//     for (let i = 0; i < 3; i++) {
//         console.log(message.toUpperCase());
//     }
//without loops//
// console.log(message.toUpperCase());
// console.log(message.toUpperCase());
// console.log(message.toUpperCase());
// }


// function isSnakeEyes(firstRoll, secondRoll) {
//     if (firstRoll === 1) {
//         if (secondRoll === 1) {
//             console.log('Snake Eyes!')
//         } else {
//             console.log('Not Snake Eyes!')
//         }
//     } else {
//         console.log('Not Snake Eyes!')
//     }
// }

// function isSnakeEyes(firstRoll, secondRoll) {
//     if (firstRoll == 1 && secondRoll == 1) {
//         console.log('Snake Eyes!');
//     } else {
//         console.log('Not Snake Eyes!');
//     }
// }   


// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }

//     return x + y;
// }


// function multiply(firstNum, secondNum) {
//     return firstNum * secondNum;
// }


// function isShortsWeather(temperature) {
//     if (temperature >= 75) {
//         return true;
//     } return false;
// }


// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     }
//     return array[array.length - 1];
// }


function capitalize(input) {
    const firstLetter = input.slice(0, 1);
    const lastLetters = input.slice(1);
    return firstLetter.toUpperCase() + lastLetters;
}