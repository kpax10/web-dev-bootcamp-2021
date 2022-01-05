const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
    e.preventDefault(); //Stop default behavior
    const catName = input.value; //Extract the value out
    const newLi = document.createElement('li'); //create new li on the page
    newLi.innerText = catName; //add input value to new li
    list.append(newLi); //add new li as a child element of ul 'cats'
    input.value = ''; //reset the field
})

