let keyboard = []
let counterButton = 0;

function makeElement(type, text, id, parentId) {
  const element = document.createElement(type);
  const parent = document.getElementById(parentId);

  element.innerText = text;
  element.setAttribute('id', id);
  parent.appendChild(element);

  if (parent.classList.contains('list')) {
    element.classList.add('listElm');
    element.setAttribute('style','width: 50px');
  };

  if (parent.classList.contains('list') && type === 'button') {
    element.addEventListener('click', () => changeValue(+text));
  };

  if (+element.innerText > 0) {
    element.classList.add('positive');

  } else if (+element.innerText < 0) {
    element.classList.add('negative');

  } else if (+element.innerText === 0) {
    element.classList.add('zero');

  };

};

/*aggiungere una funzione che assegni una classe del colore giusto se negativo o positivo*/

function changeValue(value) {
      number.innerText = parseInt(number.innerText) + value
};

makeElement('button', '-', 'minus', 'counter');
makeElement('div', 0, 'number', 'counter');
makeElement('button', '+', 'plus', 'counter');

number = document.getElementById('number');
buttonPlus = document.getElementById('plus');
buttonMinus = document.getElementById('minus');

//assegno il colore
number.classList.remove('zero');
buttonPlus.classList.add('positive');
buttonMinus.classList.add('negative');

//assegno la funzione
plus.addEventListener('click', () => changeValue(1));
minus.addEventListener('click', () => changeValue(-1));


// opzioni a scomparsa
customButtonSetup = document.getElementById('customButtonSetup');
document.getElementById('openSetup').addEventListener('click', () => customButtonSetup.style.display = 'block');

document.getElementById('save').addEventListener('click', () => makeElement('div', number.innerText, '', 'listMemo'));
/*sistemare 'se il valore inserito e' diverso da NaN'*/
let value = document.getElementById('value');
document.getElementById('makeButton').addEventListener('click', () =>{
  makeElement('button', value.value, '', 'customKeyboard');
  customButtonSetup.style.display = 'none';
});
