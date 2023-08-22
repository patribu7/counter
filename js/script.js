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

function switchApparence(element, text1, text2) {
  var currentText = element.innerHTML;
  switch (currentText) {
    case text1:
      element.innerHTML = text2;
      break;
    case text2:
      element.innerHTML = text1;
      break;
}};

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


//---------------oggetti---------------------
const textBtnClose = '^';

const body = document.getElementsByTagName('body')[0];

/*imposto il bottone meno*/
const minus = makeElement('button', '', myConsole, 'negative');
minus.id = 'minus';
const spanMinus = makeElement('span', '-', minus);

/*imposto il box del contatore*/
const monitor = makeElement('div', '', myConsole);
monitor.id = 'monitor';

/*imposto il bottone piu'*/
const plus = makeElement('button', '', myConsole, 'positive');
plus.id = 'plus';
const spanPlus = makeElement('span', '+', plus);


//assegno la funzione incremento e decremento di + e -
plus.addEventListener('mousedown', () => changeValue(1, number));
minus.addEventListener('mousedown', () => changeValue(-1, number));

//elementi del monitor
const menu = makeElement('div', '', monitor, 'menu');

const number = makeElement('span', 0, monitor);

const space = makeElement('div', '', monitor, 'space');

//tre children per l'elemento space
for (let i = 0; i<3; i++ ) {
  makeElement('div', '', space, 'boxSpace')
};

//dorpdwon menu
const menuList = ['Memo','DEL Select', 'Custom Button'];
for (let el of menuList) {
  let dropdown = makeElement('div', '', menu,'dropdown');
  makeElement('div', el, dropdown, 'dropbtn' );
  let dropdownContent = makeElement('div', '', dropdown, 'dropdown-content');
  dropdownElement = makeElement('div', '', dropdownContent);

};

//lista dei memos
let listMemo = makeElement('div', '', space.children[0], 'list');
listMemo.parentElement.style.display = 'none';

//lista dei bottoni custom
let customKeyboard = makeElement('div', '', space.children[1], 'list');
customKeyboard.parentElement.style.display = 'none';

//bottone salva memo
const btnSaveMemo = makeElement('button', 'SAVE memo', menu.children[0].children[1].children[0]);
btnSaveMemo.addEventListener('click', () => makeElement('div', number.innerText, listMemo));

//per mostrare i memo
const textBtnShowMemos = 'SHOW memo';
const btnShowMemos = makeElement('button', textBtnShowMemos, menu.children[0].children[1].children[0]);
btnShowMemos.addEventListener('click', () => {
  switchShow(listMemo.parentElement, 'none', 'flex');
  switchApparence(btnShowMemos, textBtnShowMemos, textBtnClose)
});


//bottone cancella tutti i memo
const btnDeleteMemos = makeElement('button', 'DELETE memo', menu.children[0].children[1].children[0]);
btnDeleteMemos.addEventListener('click', () => {
  var confirm = confirmDelete(' memo');
  deleteAll('.elmMemo', confirm)
});

//bottone cancella i memo/button selezionati
const btnDeleteSelected = makeElement('button', 'DELETE selected', menu.children[1].children[1].children[0]);
btnDeleteSelected.addEventListener('click', () => {
  var confirm = confirmDelete(' selected');
  deleteAll('.to-delete', confirm)
});

//bottone cancella i memo/button positivi
const btnDeletePositive = makeElement('button', 'DELETE POSITIVE', menu.children[1].children[1].children[0]);
btnDeletePositive.addEventListener('click', () => {
  var confirm = confirmDelete(' positive');
  deleteAll('.positive', confirm)
});

//bottone cancella i memo/button negativi
const btnDeleteNegative = makeElement('button', 'DELETE NEGATIVE', menu.children[1].children[1].children[0]);
btnDeleteNegative.addEventListener('click', () => {
  var confirm = confirmDelete(' negative');
  deleteAll('.negative', confirm)
});

//bottone cancella i memo/button zero
const btnDeleteZero = makeElement('button', 'DELETE ZERO', menu.children[1].children[1].children[0]);
btnDeleteZero.addEventListener('click', () => {
  var confirm = confirmDelete(' zero');
  deleteAll('.zero', confirm)
});

//per aprire il menu per il fare il bottone custom
const textBtnOpenSetup = 'NEW BUTTON';
const btnOpenSetup = makeElement('button', textBtnOpenSetup, menu.children[2].children[1].children[0]);
btnOpenSetup.addEventListener('click', () => {
  value.value = +number.innerText; //il valore e' il numero nel myConsole di default
  switchApparence(btnOpenSetup, textBtnOpenSetup, textBtnClose);
  switchShow(menuButtonSetupMaking.parentElement, 'flex', 'none');
  insertValue.select(); //mette subito il focus sulla casella per inserire il valore
});

//per mostrare i bottoni custom
const textBtnShowKeyboard = 'SHOW keyboard';
const btnShowKeyboard = makeElement('button', textBtnShowKeyboard, menu.children[2].children[1].children[0]);
btnShowKeyboard.addEventListener('click', () => {
  switchShow(customKeyboard.parentElement, 'none', 'flex');
  switchApparence(btnShowKeyboard, textBtnShowKeyboard, textBtnClose)
});

//bottone cancella tutti i bottoni custom
const btnDeleteCustomButtons = makeElement('button', 'DELETE keyboard', menu.children[2].children[1].children[0])
btnDeleteCustomButtons.addEventListener('click', () => {
  var confirm = confirmDelete(' custom buttons');
  deleteAll('.btnCustom', confirm)
});
  
//il menu per fare il bottone custom
const menuButtonSetupMaking = makeElement('div', '', space.children[2], 'menuButtonSetupMaking');
menuButtonSetupMaking.parentElement.style.display = 'none';

const label = makeElement('label', 'insert a value for your button', menuButtonSetupMaking);
label.for = 'value';

const insertValue = makeElement('input', '', menuButtonSetupMaking);
insertValue.type = 'number';
insertValue.value = '';
insertValue.id = 'value';

//bottone per fare il bottone custom
const btnMakeButton = makeElement('button', 'make it!', menuButtonSetupMaking);
btnMakeButton.addEventListener('click', () => {
  makeCustomButton();
  customKeyboard.parentElement.style.display = 'flex';
});

// tasti close
function buttonClose(parent, primaryBtn, textPrimaryBtn) {
  let btn = makeElement('button', 'x', parent, 'close');
  btn.addEventListener('click', () => {
  parent.style.display = 'none';
  primaryBtn.innerHTML = textPrimaryBtn;
  });
};

buttonClose(menuButtonSetupMaking.parentElement, btnOpenSetup, textBtnOpenSetup);
buttonClose(listMemo.parentElement, btnShowMemos, textBtnShowMemos);
buttonClose(customKeyboard.parentElement, btnShowKeyboard, textBtnShowKeyboard);

//imposto il tasto RESET
// btnReset = makeElement('button', 'RESET', body.children[7]);
// btnReset.classList.add('reset');
// btnReset.addEventListener('click', () => location.reload());
