let keyboard = []
let counterButton = 0;

function makeElement(type, text, parentId) {
  const element = document.createElement(type);
  const parent = document.getElementById(parentId);

  element.innerText = text;
  parent.appendChild(element);

  /*assegna la classe ElmList se verra' aggiunto ad una lista*/
  if (parent.classList.contains('list')) {
    element.classList.add('listElm');
    element.setAttribute('style','width: 50px');
  };

  /*se e' un bottone di una lista assegna un addEventListener*/
  if (parent.classList.contains('list') && type === 'button') {
    element.addEventListener('click', () => changeValue(+text));
  };

  /*assegna una classe che cambia il colore a seconda se il valore mostrato e' positivo, negativo, oppure zero*/
  if (+element.innerText > 0) {
    element.classList.add('positive');

  } else if (+element.innerText < 0) {
    element.classList.add('negative');

  } else if (+element.innerText === 0) {
    element.classList.add('zero');

  };

  return element
};

/*aggiungere una funzione che assegni una classe del colore giusto se negativo o positivo*/

function changeValue(value) {
      number.innerText = parseInt(number.innerText) + value;
};

function hidden(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';

  } else {
    element.style.display = 'none';
  };
};

/*creo il bottone minus*/
const minus = makeElement('button', '-', 'counter');
minus.id = 'minus';
minus.classList.add('negative');

/*creo lo schermo del contatore*/
const number = makeElement('div', 0, 'counter');
number.id = 'number';
number.classList.remove('zero');

/*creo il bottone plus*/
const plus = makeElement('button', '+', 'counter');
plus.id = 'plus';
plus.classList.add('positive');

//assegno la funzione di + e -
plus.addEventListener('click', () => changeValue(1));
minus.addEventListener('click', () => changeValue(-1));

save = document.getElementById('save')
save.addEventListener('click', () => makeElement('div', number.innerText, 'listMemo'));

// opzioni a scomparsa. stranamente funziona solo al secondo click!!!
const customButtonSetup = document.getElementById('customButtonSetup');
const openSetup = document.getElementById('openSetup');
openSetup.addEventListener('click', () => hidden(customButtonSetup));

/*se non si inserisce valore il valore e' 0*/
let value = document.getElementById('value');
document.getElementById('makeButton').addEventListener('click', () => {
  if (value.value == '') { value.value = 0};
  makeElement('button', value.value, 'customKeyboard');
  customButtonSetup.style.display = 'none';
});
