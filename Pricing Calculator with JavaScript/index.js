const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=price]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');


function calculatePieCost() {
    const price = priceInpute.value;
    const quantity = quantityInput.value;
    const cost = price * quantity;
    console.log(total);
    total.innerText = '$' + cost.toFixed(2);
}
function updateQuantityLabel() {
    const quantity = quantityInpute.value;
    quantityLabel.innerText = quantity;
}

priceInput.addEventListener('keyup', calculatePieCost);
quantityInput.addEventListener('keyup', calculatePieCost);
quantityInput.addEventListener('keyup', updateQuantityLabel);

calculatePieCost();