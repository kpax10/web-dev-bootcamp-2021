//On click, change the color of the background while updating the h1 to display the rgb color changed to.

const button = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

//Applies the function and changes text
button.addEventListener('click', () => {
    const newColor = randRgb();
    body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

//Random RGB color function
const randRgb = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    //White text when color is too dark
    let sum = r + g + b;
    if (sum <= 200) {
        h1.style.color = 'white';
    } else h1.style.color = 'black';

    return `rgb(${r}, ${g}, ${b})`;

}
