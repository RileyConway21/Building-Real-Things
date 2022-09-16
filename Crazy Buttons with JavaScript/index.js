const crazyButtons = document.querySelectorAll('.btn-crazy');
crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));

function goCrazy() {

const offsetLeft = Math.random() * (window.innerWidth - 
    this.clientWidth);
const offsetTop = Math.random()  * (window.innerHeight -
this.clientHeight);

console.log(offsetLeft, offsetTop);


this.style.top = offsetTop + 'px';
this.style.top = offsetLeft + 'px';
}