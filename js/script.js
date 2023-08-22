//---------------impostazini---------------------

let limitCharInListElm = 3;
let limitCharInNumbermyConsole = 6;

//---------------funzioni---------------------

function limitElmTo(num, list) {
  if ( list.childElementCount > num) {
    list.removeChild(list.getElementsByClassName('listElm')[0]);
  };
};

function makeElement(type, text, parent, cls='') {
  const element = document.createElement(type);
  if (cls !== '') {
    element.classList.add(cls);
  }
  element.innerText = text;
  parent.appendChild(element);

  /*se e' un div di una lista assegna la classe e ElmList*/
  if (parent.classList.contains('list')) {
    element.classList.add('listElm');
    // limitElmTo(10, parent);
    addClassColor(element);

    if (type === 'button') {
      element.addEventListener('click', () => changeValue(+text, number))
      element.classList.add('btnCustom')
    } else {
      element.classList.add('elmMemo')
    };

    element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (element.classList.contains('to-delete')) {
        element.classList.remove('to-delete')
      } else {
        element.classList.add('to-delete')
      }

    });
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
      element.innerText = + element.innerText + value;
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

function confirmDelete(context) {
  let confirmAction = confirm('Are you sure to delete all' + context + '?');
  return confirmAction
}

function deleteAll(clsElm, confirmAction) {
  if (confirmAction) {
    document.querySelectorAll(clsElm).forEach(el => el.remove());
}};

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
const minus = makeElement('button', '', myConsole, 'negative');
minus.id = 'minus';
const spanMinus = makeElement('span', '-', minus);

/*imposto il box del contatore*/
const monitor = makeElement('div', '', myConsole);
monitor.id = 'monitor';

const menu = makeElement('div', '', monitor, 'menu');

const number = makeElement('span', 0, monitor);

const space = makeElement('div', '', monitor, 'space');

for (let i = 0; i<3; i++ ) {
  makeElement('div', '', space, 'boxSpace')
}

const menuList = ['Memo', 'Custom Button'];
const numberOfdropdownContent = 4;
for (let el of menuList) {
  let dropdown = makeElement('div', '', menu,'dropdown');
  makeElement('div', el, dropdown, 'dropbtn' );
  let dropdownContent = makeElement('div', '', dropdown, 'dropdown-content');
  for (let i = 0; i < numberOfdropdownContent; i++)
    dropdownElement = makeElement('div', '', dropdownContent);

};

//imposto la lista dei memos
var listMemo = makeElement('div', '', space.children[0], 'list');
listMemo.parentElement.style.display = 'none';

//imposto il customKeyboard
var customKeyboard = makeElement('div', '', space.children[1], 'list');
customKeyboard.parentElement.style.display = 'none';

//imposto il bottone salva memo
const btnSaveMemo = makeElement('button', 'SAVE memo', menu.children[0].children[1].children[0]);
btnSaveMemo.addEventListener('click', () => makeElement('div', number.innerText, listMemo));

//imposto btnDeleteMemos
const btnDeleteMemos = makeElement('button', 'DELETE memo', menu.children[0].children[1].children[2]);
btnDeleteMemos.addEventListener('click', () => {
  var confirm = confirmDelete(' memo');
  deleteAll('.elmMemo', confirm)
});

//imposto btn delete memo selected
const btnDeleteSelected = makeElement('button', 'DELETE selected', menu.children[0].children[1].children[3]);
btnDeleteSelected.addEventListener('click', () => {
  var confirm = confirmDelete(' selected');
  deleteAll('.to-delete', confirm)
});

//btn delete custom buttons
const btnDeleteCustomButtons = makeElement('button', 'DELETE ', menu.children[1].children[1].children[2])
btnDeleteCustomButtons.addEventListener('click', () => {
  var confirm = confirmDelete(' custom buttons');
  deleteAll('.btnCustom', confirm)
});

//imposto btnShowMemos
const btnShowMemos = makeElement('button', 'SHOW memo',menu.children[0].children[1].children[1]);
btnShowMemos.addEventListener('click', () => switchShow(listMemo.parentElement, 'none', 'flex'));

/*imposto il bottone piu'*/
const plus = makeElement('button', '', myConsole, 'positive');
plus.id = 'plus';

const spanPlus = makeElement('span', '+', plus);

//assegno la funzione incremento e decremento di + e -
plus.addEventListener('mousedown', () => changeValue(1, number));
minus.addEventListener('mousedown', () => changeValue(-1, number));

//imposto il menuButtonSetupMaking
const menuButtonSetupMaking = makeElement('div', '', space.children[2], 'menuButtonSetupMaking');
menuButtonSetupMaking.parentElement.style.display = 'none';

const label = makeElement('label', 'insert a value for your button', menuButtonSetupMaking);
label.for = 'value';

const insertValue = makeElement('input', '', menuButtonSetupMaking);
insertValue.type = 'number';
insertValue.value = '';
insertValue.id = 'value';

const btnMakeButton = makeElement('button', 'make it!', menuButtonSetupMaking);

//imposto il tasto per aprire il menu per il customBtn
const btnOpenSetupText = 'New button'

const btnOpenSetup = makeElement('button', btnOpenSetupText, menu.children[1].children[1].children[0]);
btnOpenSetup.addEventListener('click', () => {
  
  value.value = +number.innerText;//il valore e' il numero nel myConsole di default
  switch (menuButtonSetupMaking.parentElement.style.display) {
    case 'none' :
      menuButtonSetupMaking.parentElement.style.display = 'flex';
      changeApparence(btnOpenSetup, '<p>^</p><p><br/></p>')
      insertValue.select(); //mette subito il focus sulla casella per inserire il valore
      break;
    
    case 'flex':
    menuButtonSetupMaking.parentElement.style.display = 'none';
    changeApparence(btnOpenSetup, btnOpenSetupText)
    break;
  };
});

btnMakeButton.addEventListener('click', () => {
  makeCustomButton();
  customKeyboard.parentElement.style.display = 'flex';
});

//imposto il tasto btnShowKeyboard
const btnShowKeyboard = makeElement('button', 'SHOW keyboard', menu.children[1].children[1].children[1]);
btnShowKeyboard.addEventListener('click', () => {switchShow(customKeyboard.parentElement, 'none', 'flex')})

// tasti close
function buttonClose(parent, primaryBtn, primaryBtnText) {
  let btn = makeElement('button', 'x', parent, 'close');
  btn.addEventListener('click', () => {
  parent.style.display = 'none';
  changeApparence(primaryBtn, primaryBtnText)
  });
}

buttonClose(menuButtonSetupMaking.parentElement, btnOpenSetup, btnOpenSetupText)
buttonClose(listMemo.parentElement)
buttonClose(customKeyboard.parentElement)

//imposto il tasto RESET
// btnReset = makeElement('button', 'RESET', body.children[7]);
// btnReset.classList.add('reset');
// btnReset.addEventListener('click', () => location.reload());
