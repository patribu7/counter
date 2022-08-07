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

    if (type === 'button') {
      element.addEventListener('click', () => changeValue(+text, number))
    };
  };

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

function changeValue(value, item) {
      item.innerText = +item.innerText + value;
};

function hidden(element) {
  if (element.style.display === 'none') {
    openSetup.innerText = '^';
    openSetup.style.height = '30px';
    element.style.display = 'block';

  } else {
    openSetup.innerText = 'Make your own button!'
    openSetup.style.height = '';
    element.style.display = 'none';
  };
};

function confermDeleteMemos() {
  listMemo.childNodes.forEach((item, i) => {
    item.classList.add('toDelete');
  });
  let confirmAction = confirm('Are you sure to delete all your memo?');
  if (confirmAction) {
      listMemo.innerHTML = '';
  }
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
plus.addEventListener('click', () => changeValue(1, number));
minus.addEventListener('click', () => changeValue(-1, number));

save.addEventListener('click', () => makeElement('div', number.innerText, 'listMemo'));

openSetup.addEventListener('click', () => {
  /*il valore e' il numero nel counter di default*/
  value.value = +number.innerText;
  hidden(customButtonSetup);
});

/*se non si inserisce valore il valore e' 0*/

document.getElementById('makeButton').addEventListener('click', () => {
  if (value.value == '') { value.value = 0};
  makeElement('button', value.value, 'customKeyboard');
  customButtonSetup.style.display = 'none';
});

/*del option*/
del.addEventListener('click', () => confermDeleteMemos());




/*refresh page with reset*/
reset.addEventListener('click', () => location.reload())
