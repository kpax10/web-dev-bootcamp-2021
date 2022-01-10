const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const p1ScoreText = document.querySelector('#p1ScoreText');
const p2ScoreText = document.querySelector('#p2ScoreText');
const resetButton = document.querySelector('#reset')
const input = document.querySelector('input');

let p1Counter = 0;
let p2Counter = 0;

p1Button.addEventListener('click', function (e) {
    p1ScoreText.innerHTML = p1Counter += 1;
    if (p1Counter == input.value) {
        //update colors of numbers
        p1ScoreText.style.color = 'limegreen';
        p1Button.style.opacity = '0.5';
        p2ScoreText.style.color = 'red';
        p2Button.style.opacity = '0.5';
        //disable both both buttons
        p1.disabled = true;
        p2.disabled = true;
    }
})

p2Button.addEventListener('click', function (e) {
    p2ScoreText.innerHTML = p2Counter += 1;
    if (p2Counter == input.value) {
        //update colors of numbers
        p2ScoreText.style.color = 'limegreen';
        p2Button.style.opacity = '0.5';
        p1ScoreText.style.color = 'red';
        p1Button.style.opacity = '0.5';
        //disable both both buttons
        p1.disabled = true;
        p2.disabled = true;
    }
})

resetButton.addEventListener('click', function () {
    //set text value to 0 0
    p1ScoreText.innerHTML = '0';
    p2ScoreText.innerHTML = '0';
    p1ScoreText.style.color = '';
    p2ScoreText.style.color = '';
    p1.disabled = false;
    p2.disabled = false;
    p1Counter = 0;
    p2Counter = 0;
    p1Button.style.opacity = '1';
    p2Button.style.opacity = '1';
})