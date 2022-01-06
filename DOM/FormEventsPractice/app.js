const form = document.querySelector('form');
const list = document.querySelector('#list');

// listen for the form submission
form.addEventListener('submit', function (e) {
    // when the form is submitted, prevent the default behavior
    e.preventDefault();
    // grab the quantity input value and the product input value
    const product = form.elements.product.value;
    const qty = form.elements.qty.value;
    // create a new <li> element.  Set the text on the new <li> to include the quantity and product name from the form
    const newLi = document.createElement('li');
    newLi.innerText = `${qty} ${product}`;
    // Append the new <li> to the <ul> on the page
    list.appendChild(newLi);
    // reset the inputs
    form.elements.qty.value = '';
    form.elements.product.value = '';
})

