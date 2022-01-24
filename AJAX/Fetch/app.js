//PROMISES VERSON
// fetch('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log('Response, waiting to parse...', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('Data parsed')
//         console.log('Price is ' + data.ticker.price)
//     })
//     .catch(e => {
//         console.log('Rejected', e)
//     })


//ASYNC VERSION//
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (er) {
        console.log('SOMETHING WENT WRONG', er)
    }
}

fetchBitcoinPrice()