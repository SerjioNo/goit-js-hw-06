
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChengeColor = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

btnChengeColor.addEventListener('click', chengeColor);

function chengeColor() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  textColorEl.textContent = hexColor;
}