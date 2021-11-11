const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.list-items');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const texts = ['WE BUILD EZQUISIT DIGITAL PRODUCTS'];
let count = 0;
let index = 0;
let currentText = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 100);
}());