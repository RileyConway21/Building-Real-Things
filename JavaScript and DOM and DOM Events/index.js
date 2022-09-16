function goCoocoo(){
    document.body.style.backgroundColor = '#C00C00';
}
const coffeeButtons = document.querySelectorAll('.coffee-btn');

coffeeButtons.forEach(function(button) {
    button.onclick = goCoocoo;

});

function getCoffee() {
    document.body.style.backgroundColor = "C0FFEE";
}


const lalaButton = document.querySelector('.lala-btn');

function notListening () {
    document.body.style.backgroundColor = '#1A1A1A1A';
}
lalaButton.addEventListener('click', notListening);
lalaButton.addEventListener('mouseenter', goCoocoo);

const buttons = document.querySelectorAll('button');
button.forEach(button => button.addEventListener('mouseleave,notListening'));
