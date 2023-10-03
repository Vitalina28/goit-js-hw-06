const inputFontSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputFontSize.addEventListener('input', () => {
     const fontSize = inputFontSize.value + 'px';

  textEl.style.fontSize = fontSize;
});

