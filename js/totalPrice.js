function totalPrice() {
const cartItems = document.querySelectorAll('.cart-item');
const sumEl = document.querySelector('.total-price')
let sum = 0;
//Обходим все блоки с ценами в корзине
cartItems.forEach(function (item){

 const amountEl = item.querySelector('[data-counter]');
 const priceEl = item.querySelector('.price__currency');

 const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
 sum += currentPrice;
})
// Отображаем цену на странице
sumEl.innerText = sum;
}