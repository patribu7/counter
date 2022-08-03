let keyboard = []
let counterButton = 0;

/*aggiungere la classe (spero che se vuota la salti) e le misure*/
function makeElement(type, text, id, parentId) {
  const element = document.createElement(type);
  const parent = document.getElementById(parentId);

  element.innerText = text;
  element.setAttribute('id', id);
  parent.appendChild(element);

  if (parent.classList.contains('list')) {
    element.classList.add('memoElm')
    element.setAttribute('style','width: 50px')

  }

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

plus.addEventListener('click', () => changeValue(1));
minus.addEventListener('click', () => changeValue(-1));

// funzioni aggiunte per mostrare la riusabilita' del codice
// opzioni a scomparsa

customButtonSetup = document.getElementById('customButtonSetup');
document.getElementById('openSetup').addEventListener('click', () => customButtonSetup.style.display = 'block');

document.getElementById('save').addEventListener('click', () => makeElement('div', number.innerText, '', 'customKeyboard'))
