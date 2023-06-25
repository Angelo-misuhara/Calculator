let toggle_dark = document.querySelector('#toggle_checkbox');
let isDark = true;
let body = document.querySelector("body");
let navbar = document.querySelector(".navbar-brand");
let label = document.querySelector('label');

toggle_dark.addEventListener('click', function () {
  
  if (isDark === true) {
    body.style.backgroundColor = 'black';
    navbar.style.color = 'white';
    body.style.transition = '2s'
    label.style.borderColor = 'white'
    isDark = false;
  } else {
    body.style.backgroundColor = 'white';
    navbar.style.color = 'black';
    body.style.transition = '2s'
    label.style.borderColor = 'black'
    isDark = true;
  }
});
//calculator function//
const textarea = document.querySelector('#tttextarea');
const clear = document.querySelector('#clear');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const divide = document.querySelector('#divide')

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const multiply = document.querySelector('#multiply');

const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const minus = document.querySelector('#minus');

const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const equals = document.querySelector('#equals');
const plus = document.querySelector('#plus');


clear.addEventListener('click', function () {
  tttextarea.value = "";
});

one.addEventListener('click', function () {
  tttextarea.value += "1";
});

two.addEventListener('click', function () {
  tttextarea.value += "2";
});

three.addEventListener('click', function () {
  tttextarea.value += "3";
});

four.addEventListener('click', function () {
  tttextarea.value += "4";
});

five.addEventListener('click', function () {
  tttextarea.value += "5";
});

six.addEventListener('click', function () {
  tttextarea.value += "6";
});

seven.addEventListener('click', function () {
  tttextarea.value += "7";
});

eight.addEventListener('click', function () {
  tttextarea.value += "8";
});

nine.addEventListener('click', function () {
  tttextarea.value += "9";
});

zero.addEventListener('click', function () {
  tttextarea.value += "0";
});

divide.addEventListener('click', function () {
  tttextarea.value += "/";
});

multiply.addEventListener('click', function () {
  tttextarea.value += "*";
});

plus.addEventListener('click', function () {
  tttextarea.value += "+";
});

minus.addEventListener('click', function () {
  tttextarea.value += "-";
});

point.addEventListener('click', function () {
  tttextarea.value += ".";
});

equals.addEventListener('click', function () {
  tttextarea.value= eval(tttextarea.value);
});


