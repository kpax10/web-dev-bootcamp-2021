// async function hello() {
// }


// const sing = async () => {
//     throw 'OH NO, PROBLEM'
//     return 'LA LA LA LA'
// }

// sing()
//     .then(data => {
//         console.log('PROMISE RESOLVED WITH: ', data)
//     })
//     .catch(err => {
//         console.log('OH NO, PROMISE REJECTED')
//         console.log(err)
//     })



// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'corgifeetarecute') return 'Welcome'
//     throw 'Invalid Password'
// }

// login('adfsafds')
//     .then(msg => {
//         console.log('logged in')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('error')
//         console.log(err)
//     })



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return 'all done'
// }

// // rainbow().then(() => console.log('end of rainbow'))

// async function printRainbow() {
//     await rainbow();
//     console.log('end of rainbow')
// }
// printRainbow();



const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve(`Here is your fake data from ${url}`);
            }
            reject('Request Error!');
        }, 1000)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log('caught an error')
        console.log('error is: ', e)
    }

}