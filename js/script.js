//---------------impostazini---------------------

let limitCharInListElm = 3;
let limitCharInNumbermyConsole = 6;

//---------------funzioni---------------------

function makeElement(type, text, parent) {
  const element = document.createElement(type);

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
      element.innerText = +element.innerText + value;
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
  makeElement('button', value.value, customKeyboard);
};

//---------------oggetti---------------------

const body = document.getElementsByTagName('body')[0];

/*imposto il bottone meno*/
const minus = makeElement('button', '', myConsole);
minus.id = 'minus';
minus.classList.add('negative');
const spanMinus = makeElement('span', '-', minus);

/*imposto il box del contatore*/
const monitor = makeElement('div', '', myConsole);
monitor.id = 'monitor';
const menu = makeElement('div', '', monitor);

menu.classList.add('menu');
const number = makeElement('span', 0, monitor);

/*imposto il bottone piu'*/
const plus = makeElement('button', '', myConsole);
plus.id = 'plus';
plus.classList.add('positive');
const spanPlus = makeElement('span', '+', plus);

//assegno la funzione incremento e decremento di + e -
plus.addEventListener('mousedown', () => changeValue(1, number));
minus.addEventListener('mousedown', () => changeValue(-1, number));


//imposto btnDeleteMemos
btnDeleteMemos = makeElement('button', 'DEL', body.children[1]);
btnDeleteMemos.addEventListener('click', () => confermDeleteMemos());

//imposto la lista dei memos
listMemo = makeElement('div', '', body.children[2]);
listMemo.classList.add('list');
listMemo.id = listMemo;

//imposto il bottone salva memo
btnSaveMemo = makeElement('button', 'SAVE THIS', body.children[3]);
btnSaveMemo.addEventListener('click', () => makeElement('div', number.innerText, listMemo));


//imposto il menuButtonSetupMaking
menuButtonSetupMaking = makeElement('div', '', body.children[4]);
menuButtonSetupMaking.classList.add('menuButtonSetupMaking');
menuButtonSetupMaking.hidden = true;

label = makeElement('label', 'insert a value for your button', menuButtonSetupMaking);
label.for = 'value';

insertValue = makeElement('input', '', menuButtonSetupMaking);
insertValue.type = 'number';
insertValue.value = '';
insertValue.id = 'value';

btnMakeButton = makeElement('button', 'make it!', menuButtonSetupMaking);
btnMakeButton.id = 'btnMakeButton';

//imposto il tasto per aprire il menu per il customBtn
btnOpenSetup = makeElement('button', 'Make your own button!', body.children[5]);
btnOpenSetup.addEventListener('click', () => {

  value.value = +number.innerText;//il valore e' il numero nel myConsole di default
  if (menuButtonSetupMaking.hidden) {
    show(menuButtonSetupMaking);
    changeBtnApparence(btnOpenSetup, '^', '30px');
    insertValue.select(); //mette subito il focus sulla casella per inserire il valore

  } else {
    hide(menuButtonSetupMaking);
    changeBtnApparence(btnOpenSetup,'Make your own button!', '' )
  };
});

btnMakeButton.addEventListener('click', () => {
  makeCustomButton();
});

//imposto il customKeyboard
customKeyboard = makeElement('div', '', body.children[6]);
customKeyboard.classList.add('list', 'customKeyboard');

//imposto il tasto RESET
btnReset = makeElement('button', 'RESET', body.children[7]);
btnReset.classList.add('reset');
btnReset.addEventListener('click', () => location.reload());
