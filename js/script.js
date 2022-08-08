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

/*assegna una classe che cambia il colore a seconda se il testo mostrato e' positivo, negativo, oppure zero*/
function addClassColor(element) {
  if (+element.innerText > 0) {
    element.classList.add('positive');

  } else if (+element.innerText < 0) {
    element.classList.add('negative');

  } else if (+element.innerText === 0) {
    element.classList.add('zero');

  };
};

function changeValue(value, element) {
      element.getElementsByTagName('span')[0].innerText = +element.innerText + value;
};

function show(element) {
  element.hidden = false;
};

function hide(element) {
  element.hidden = true;
};

function changeBtnApparence(btn, text, height) {
  btn.innerText = text;
  btn.style.height = height;

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
  /*si lascia vuoto valore il valore e' 0*/
  if (value.value == '') {
    value.value = 0
  };
  makeElement('button', value.value, 'customKeyboard');
};

/*imposto il bottone meno*/
const minus = makeElement('button', '', 'counter');
minus.id = 'minus';
minus.classList.add('negative');
const spanMinus = makeElement('span', '-', 'minus');

/*imposto lo schermo del contatore*/
const number = makeElement('div', '', 'counter');
number.id = 'number';
const spanNumber = makeElement('span', 0, 'number');

/*imposto il bottone piu'*/
const plus = makeElement('button', '', 'counter');
plus.id = 'plus';
plus.classList.add('positive');
const spanPlus = makeElement('span', '+', 'plus');

//assegno la funzione di + e -
plus.addEventListener('mousedown', () => changeValue(1, number));
minus.addEventListener('mousedown', () => changeValue(-1, number));

//imposto il customButtonSetup
customButtonSetup.hidden = true //// WARNING: dovrei chiamare i menu in un modo omogeneo

//tasto btnOpenSetup
btnOpenSetup.addEventListener('click', () => {
  /*il valore e' il numero nel counter di default*/
  value.value = +number.innerText;
  if (customButtonSetup.hidden === true) {
    show(customButtonSetup);
    changeBtnApparence(btnOpenSetup, '^', '30px')

  } else {
    hide(customButtonSetup);
    changeBtnApparence(btnOpenSetup,'Make your own button!', '' )
  };
});

makeButton.addEventListener('click', () => {
  makeCustomButton();
});

//tasto cancella
del.addEventListener('click', () => confermDeleteMemos());

//tasto salva
save.addEventListener('click', () => makeElement('div', number.innerText, 'listMemo'));



//refresh page with reset
reset.addEventListener('click', () => location.reload())
