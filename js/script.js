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

function limitElmTo(num, list) {
  if ( list.childElementCount > num) {
    list.removeChild(list.getElementsByClassName('listElm')[0]);
  };
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


function changeValue(value, item) {
      item.getElementsByTagName('span')[0].innerText = +item.innerText + value;
};

function hidden(element) {
  if (element.style.display === 'none') {
    showSetupCustomButton(element)

  } else {
    hideSetupCustomButton(element)
  };
};

function showSetupCustomButton(element) {
  element.style.display = 'block';
  openSetup.innerText = '^';
  openSetup.style.height = '30px';
};

function hideSetupCustomButton(element) {
  element.style.display = 'none';
  openSetup.innerText = 'Make your own button!'
  openSetup.style.height = '';
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

function makeCustomButton() {
  /*se non si inserisce valore il valore e' 0*/
  if (value.value == '') {
    value.value = 0
  };
  makeElement('button', value.value, 'customKeyboard');
};


/*creo il bottone meno*/
const minus = makeElement('button', '', 'counter');
minus.id = 'minus';
minus.classList.add('negative');
const spanMinus = makeElement('span', '-', 'minus');

/*creo lo schermo del contatore*/
const number = makeElement('div', '', 'counter');
number.id = 'number';
const spanNumber = makeElement('span', 0, 'number');

/*creo il bottone piu'*/
const plus = makeElement('button', '', 'counter');
plus.id = 'plus';
plus.classList.add('positive');
const spanPlus = makeElement('span', '+', 'plus');

//assegno la funzione di + e -
plus.addEventListener('click', () => changeValue(1, number));
minus.addEventListener('click', () => changeValue(-1, number));

//tasto salva
save.addEventListener('click', () => makeElement('div', number.innerText, 'listMemo'));

//tasto openSetup
openSetup.addEventListener('click', () => {
  /*il valore e' il numero nel counter di default*/
  value.value = +number.innerText;
  hidden(customButtonSetup);
});


makeButton.addEventListener('click', () => {
  makeCustomButton();
  hideSetupCustomButton(customButtonSetup)
});

//tasto cancella
del.addEventListener('click', () => confermDeleteMemos());




//refresh page with reset
reset.addEventListener('click', () => location.reload())
