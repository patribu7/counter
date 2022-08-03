let keyboard = []
let counterButton = 0;

function makeElement(type, text, id, container) {
  const element = document.createElement(type);
  element.innerText = text;
  element.setAttribute('id', id);
  document.getElementById(container).appendChild(element);

}

function changeValue(value) {
      number.innerText = parseInt(number.innerText) + value
};

makeElement('button', '+', 'plus', 'counter');
makeElement('div', 0, 'number', 'counter');
makeElement('button', '-', 'minus', 'counter');

number = document.getElementById('number');
buttonPlus = document.getElementById('plus');
buttonMinus = document.getElementById('minus');

plus.addEventListener('click', () => changeValue(1));
minus.addEventListener('click', () => changeValue(-1));

// funzioni aggiunte per mostrare la riusabilita' del codice
// opzioni a scomparsa

customButtonSettup = document.getElementById('customButtonSettup')
document.getElementById('makeButton').addEventListener('click', () => customButtonSettup.style.display = 'block')
