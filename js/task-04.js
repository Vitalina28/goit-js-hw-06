const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');



let counterValue = 0;
const containerValueSpan = () => {
    valueEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    containerValueSpan();
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    containerValueSpan();
});
