function makeElement(type, text) {
  const element = document.createElement(type);
  element.innerText = text;
  document.getElementById("container").appendChild(element);
};

makeElement('button', '+');
makeElement('button', '-');
makeElement('div', 0);
