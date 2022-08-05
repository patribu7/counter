function makeElement(type, text, parentId) {
  const element = document.createElement(type);
  const parent = document.getElementById(parentId);

  element.innerText = text;
  parent.appendChild(element);

  /*se e' un div di una lista assegna la classe e ElmList e controlla il limite degli Elm*/

  if (parent.classList.contains('list')) {
    element.classList.add('listElm');
    limitElmTo(10, parent);
    addClassColor(element);

  }

  return element
};

/*assegna una classe che cambia il colore a seconda se il valore mostrato e' positivo, negativo, oppure zero*/
function addClassColor(element) {
  if (+element.innerText > 0) {
    element.classList.add('positive');

  } else if (+element.innerText < 0) {
    element.classList.add('negative');

  } else if (+element.innerText === 0) {
    element.classList.add('zero');

  };
};

function limitElmTo(num, list) {
  if ( list.childElementCount > num) {
    list.removeChild(list.getElementsByClassName('listElm')[0]);
  };
};

function changeValue(value) {
      number.innerText = +number.innerText + value;
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

/*refresh page with reset*/

reset.addEventListener('click', () => location.reload())
