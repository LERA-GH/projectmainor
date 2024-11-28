
window.addEventListener('click', function(event){
if (event.target.dataset.action === 'plus'){
    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    counter.innerText = ++counter.innerText;
}
if (event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    if (parseInt(counter.innerText) > 0){counter.innerText = --counter.innerText}

if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 0){
    event.target.closest('.cart-item').remove();
    // Отоброжение статуса корзины пустая/ полная
	cartStatus();
	// Пересчет общей стоимости корзины
    totalPrice();
    }
}
// Проверяем клик на + или - внутри корзины
if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
// Пересчет общей стоимости корзины
    totalPrice();
}
})