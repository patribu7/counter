function makeElement(type, text, id) {
  const element = document.createElement(type);
  element.innerText = text;
  element.setAttribute('id', id);
  document.getElementById('container').appendChild(element);
};

function changeValue(value) {
  if (value > 0) {
      number.innerText++

    } else {
      number.innerText--
    }
};

makeElement('button', '+', 'buttonPlus');
makeElement('div', 0, 'number');
makeElement('button', '-', 'buttonMinus');

number = document.getElementById('number');
buttonPlus = document.getElementById('buttonPlus');
buttonMinus = document.getElementById('buttonMinus');

buttonPlus.addEventListener('click', () => changeValue(1));
buttonMinus.addEventListener('click', () => changeValue(-1));
