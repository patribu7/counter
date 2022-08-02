function makeElement(type, text, id) {
  const element = document.createElement(type);
  element.innerText = text;
  element.setAttribute('id', id);
  document.getElementById('container').appendChild(element);
};

function changeValue(value) {
      number.innerText = parseInt(number.innerText) + value
};

makeElement('button', '+', 'buttonPlus');
makeElement('div', 0, 'number');
makeElement('button', '-', 'buttonMinus');

number = document.getElementById('number');
buttonPlus = document.getElementById('buttonPlus');
buttonMinus = document.getElementById('buttonMinus');

buttonPlus.addEventListener('click', () => changeValue(1));
buttonMinus.addEventListener('click', () => changeValue(-1));

// funzioni aggiunte per mostrare la riusabilita' del codice
counterButton = 0

makeElement('button', '+10', 'buttonPlus10');
makeElement('button', '-10', 'buttonMinus10');
makeElement('button', 'make your own button!', 'buttonAdd')


buttonPlus10 = document.getElementById('buttonPlus10');
buttonMinus10 = document.getElementById('buttonMinus10');
buttonAdd = document.getElementById('buttonAdd');

buttonPlus10.addEventListener('click', () => changeValue(10));
buttonMinus10.addEventListener('click', () => changeValue(-10));
buttonAdd.addEventListener('click', () => makeElement('button', number.innerText, 'customButton' + ++counterButton));
