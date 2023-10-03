const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

inputEl.addEventListener('blur', (event) => {
    event.preventDefault();
    const inputValue = event.currentTarget.value;
    const dataLength = Number(inputEl.getAttribute('data-length'));
    console.log(dataLength);
    if (inputValue.length === dataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    };
})

