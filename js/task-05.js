const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue === "") {
        nameOutputEl.textContent = "Anonymous";
    } else {
          nameOutputEl.textContent = inputValue;
    }
});

