const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('YOU CLICKED ME');
    console.log('I hope it worked');
}


function scream() {
    console.log('AHHHH');
    console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = function () {
    alert('you clicked the h1!');
}



//When a button is clicked, 'hello' or 'goodbye' is logged
const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', () => {
    console.log('You clicked me');
})


const helloBtn = document.querySelector('#hello');
const goodbyeBtn = document.querySelector('#goodbye');

helloBtn.addEventListener('click', () => {
    console.log('hello')
})

goodbyeBtn.addEventListener('click', () => {
    console.log('goodbye')
})
