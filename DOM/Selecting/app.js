const toc = document.getElementById('toc')

// How to console.log each images source
// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }

const java = document.querySelector('a[title= "Java"]')

// Print out every link source.  querySelectorAll targets every anchor tag nested in paragraph
const links = document.querySelectorAll('p a')
for (let link of links) {
    console.log(link.href)
}