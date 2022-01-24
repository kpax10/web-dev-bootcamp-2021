// //PROMISE BASED
// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log('UH OH', err)
//     })


//ASYNC BASED
// const bitGetPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (err) {
//         console.log('UHOH!', err)
//     }
// }
// bitGetPrice()


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (err) {
        return 'NO JOKES AVAILABLE'
    }
}

button.addEventListener('click', addNewJoke)


