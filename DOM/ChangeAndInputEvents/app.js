// const input = document.querySelector('input');

// input.addEventListener('change', function (e) {
//     console.log('change!');
// })

// input.addEventListener('input', function (e) {
//     console.log('input!');
// })


//update h1 with whatever you type as you type it
const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('input', function () {
    h1.innerText = input.value;
})