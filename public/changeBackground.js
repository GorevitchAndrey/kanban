
//------вызов окна изменений
let showMoreBtn = document.querySelector('.showMore');
let blockBackground = document.querySelector('.changeBackgroundColor');
let headerBlock = document.querySelector('.header');
let hideBtn = document.querySelector('.hideMore');

showMoreBtn.addEventListener('click', () => {
    blockBackground.style.display = 'block';
    // showMoreBtn.style.display = 'none';
})
hideBtn.addEventListener('click', () => {
    blockBackground.style.display = 'none';
    //showMoreBtn.style.display = 'block';
})

// ------------- Изменение фона
//
let inputChangeColor = document.querySelector('.changeColor');
let body = document.querySelector('body');
let btnChangeColor = document.querySelector('.btnChangeColor');
let imgBg = document.querySelector('.img');



let colorGetLocal = localStorage.getItem('data');

inputChangeColor.oninput = () => {
    localStorage.setItem('data', inputChangeColor.value);
};

body.style.background = colorGetLocal;

function bodyColor() {
    body.style.background = inputChangeColor.value;
}
btnChangeColor.addEventListener('click', bodyColor);

