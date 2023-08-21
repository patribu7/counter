//---------------impostazini---------------------

let limitCharInListElm = 3;
let limitCharInNumbermyConsole = 6;

//---------------funzioni---------------------

function limitElmTo(num, list) {
  if ( list.childElementCount > num) {
    list.removeChild(list.getElementsByClassName('listElm')[0]);
  };
};

function makeElement(type, text, parent) {
  const element = document.createElement(type);

  element.innerText = text;
  parent.appendChild(element);

  /*se e' un div di una lista assegna la classe e ElmList e controlla il limite degli Elm*/
  if (parent.classList.contains('list')) {
    element.classList.add('listElm');
    // limitElmTo(10, parent);
    addClassColor(element);

    if (type === 'button') {
      element.addEventListener('click', () => changeValue(+text, number))
    };
  };

  return element
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

function switchShow(element, state1, state2) {
    var currentState = element.style.display;
  switch (currentState) {
    case state1:
    element.style.display = state2;
    break;
    case state2:
      element.style.display = state1;
      break;
    }
};

function confermDeleteMemos() {
  listMemo.childNodes.forEach((item, i) => {
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

function changeApparence(element, text, height) {
  element.innerHTML = text;
  element.style.height = height;

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

const space = makeElement('div', '', monitor);
space.classList.add('space');

for (let i = 0; i < 2; i++) {
  makeElement('div', '', menu);;
};


//imposto la lista dei memos
listMemo = makeElement('div', '', space);
listMemo.classList.add('list');
listMemo.style.display = 'none';

//imposto il customKeyboard
const customKeyboard = makeElement('div', '', space);
customKeyboard.classList.add('list', 'customKeyboard');
customKeyboard.style.display = 'none';

//imposto il bottone salva memo
btnSaveMemo = makeElement('button', 'SAVE memo', menu.children[0]);
btnSaveMemo.addEventListener('click', () => makeElement('div', number.innerText, listMemo));

//imposto btnDeleteMemos
const btnDeleteMemos = makeElement('button', 'DELETE memo', menu.children[0]);
btnDeleteMemos.addEventListener('click', () => confermDeleteMemos());

//imposto btnShowMemos
const btnShowMemos = makeElement('button', 'SHOW memo', menu.children[0]);
btnShowMemos.addEventListener('click', () => switchShow(listMemo, 'none', 'flex'));

/*imposto il bottone piu'*/
const plus = makeElement('button', '', myConsole);
plus.id = 'plus';
plus.classList.add('positive');
const spanPlus = makeElement('span', '+', plus);

//assegno la funzione incremento e decremento di + e -
plus.addEventListener('mousedown', () => changeValue(1, number));
minus.addEventListener('mousedown', () => changeValue(-1, number));

//imposto il menuButtonSetupMaking
const menuButtonSetupMaking = makeElement('div', '', space);
menuButtonSetupMaking.classList.add('menuButtonSetupMaking');
menuButtonSetupMaking.style.display = 'none';

label = makeElement('label', 'insert a value for your button', menuButtonSetupMaking);
label.for = 'value';

const insertValue = makeElement('input', '', menuButtonSetupMaking);
insertValue.type = 'number';
insertValue.value = '';
insertValue.id = 'value';

const btnMakeButton = makeElement('button', 'make it!', menuButtonSetupMaking);
btnMakeButton.id = 'btnMakeButton';

//imposto il tasto per aprire il menu per il customBtn
const btnOpenSetup = makeElement('button', 'MAKE button', menu.children[1]);
btnOpenSetup.addEventListener('click', () => {
  
  value.value = +number.innerText;//il valore e' il numero nel myConsole di default
  switch (menuButtonSetupMaking.style.display) {
    case 'none' :
      menuButtonSetupMaking.style.display = 'block';
      changeApparence(btnOpenSetup, '<p>^</p><p><br/></p> ')
      insertValue.select(); //mette subito il focus sulla casella per inserire il valore
      break;
    
    case 'block':
    menuButtonSetupMaking.style.display = 'none';
    changeApparence(btnOpenSetup, 'MAKE button')
    break;
  };
});

btnMakeButton.addEventListener('click', () => {
  makeCustomButton();
});

//imposto il tasto btnShowKeyboard
const btnShowKeyboard = makeElement('button', 'SHOW keyboard', menu.children[1]);
btnShowKeyboard.addEventListener('click', () => {switchShow(customKeyboard, 'none', 'flex')})

// listMemo.style.display = 'none';
// customKeyboard.style.display = 'none'

//imposto il tasto RESET
// btnReset = makeElement('button', 'RESET', body.children[7]);
// btnReset.classList.add('reset');
// btnReset.addEventListener('click', () => location.reload());
