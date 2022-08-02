function makeElement(type, text, className) {
  const element = document.createElement(type);
  element.innerText = text;
  element.classList.add(className);
  document.getElementById('container').appendChild(element);
};

makeElement('button', '+', 'buttonPlus');
makeElement('div', 0, 'number');
makeElement('button', '-', 'buttonMinus');
