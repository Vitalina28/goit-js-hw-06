const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const container = document.querySelector('body');

buttonEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  container.style.backgroundColor =
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  spanEl.textContent = container.style.backgroundColor;
  return;
}
