// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('.container');

// for (let i = 0; i < 151; i++) {
//     const newImg = document.createElement('img');
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
//     container.append(newImg, `${i + 1}`);
// }

const container = document.querySelector('.container');

for (let i = 0; i < 151; i++) {
    const div = document.createElement('div');
    div.classList.add('pokemon')
    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
    const span = document.createElement('span');
    span.innerText = `${i + 1}`;

    container.append(div);
    div.append(img);
    div.append(span);
}
