// const allLinks = document.querySelectorAll('a');

// // Change all the text for all links
// for (let link of allLinks) {
//     link.innerText = 'LOL bro';
// }

// // Change the h1 to an italicized h1
// document.querySelector('h1').innerHTML = '<i>sdfasdf</i>'


const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'cyan';
    link.style.textDecorationColor = 'magenta';
}

// Targets div w/ ID container and centers the text.  Targets the image, shrinks it, and gives it a circular border.
document.querySelector('#container').style.textAlign = 'center';
const image = document.querySelector('img')
image.style.width = '150px';
image.style.borderRadius = '50%';


// Select all spans, iterate over them, and assign them each one of the colors from the color array
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const allSpans = document.querySelectorAll('span');
for (let i = 0; i < colors.length; i++) {
    allSpans[i].style.color = colors[i];
}