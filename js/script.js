number = document.getElementById('number')

function makeElement(type, text, id) {
  const element = document.createElement(type);
  element.innerText = text;
  element.setAttribute('id', id);
  document.getElementById('container').appendChild(element);
};

function changeValue(operation, value) {
  switch (operation) {
    case 'incr':
      number.innerText++
      break;

    case 'decr':
      number.innerText--
      break;
  }

};

makeElement('button', '+', 'buttonPlus');
makeElement('div', 0, 'number');
makeElement('button', '-', 'buttonMinus');

number = document.getElementById('number');
buttonPlus = document.getElementById('buttonPlus');
buttonMinus = document.getElementById('buttonMinus');

buttonPlus.addEventListener('click', () => changeValue('incr', 1));
buttonMinus.addEventListener('click', () => changeValue('decr', 1));
