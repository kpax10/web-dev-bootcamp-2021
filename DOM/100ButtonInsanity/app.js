//Creates 100 buttons with text. assigns the buttons to the container div.

const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    const button = document.createElement('button');
    button.innerText = 'Woo!';
    container.appendChild(button);
}