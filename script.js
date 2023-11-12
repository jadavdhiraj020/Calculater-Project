let btn_result = document.querySelector('#result');
let display_num = document.querySelector('#display_number');
let number = document.querySelectorAll('.btn_number');
let value = '';
let result = '';

Print_number();

function Print_number() {
  number.forEach(element => {
    element.addEventListener('click', () => {
      display_num.innerHTML = '';
      value += element.innerText;
      btn_result.innerHTML = value;
    });
  });
}

function Display_result() {
  if (value.includes('/')) {
    if (eval(value.split('/')[1]) === 0) {
      display_num.innerHTML = 'infinity';
      btn_result.innerHTML = 'infinity';
    }

    result = eval(value);
    result = result.toFixed(2);
    display_num.innerHTML = value;
  } else {
    result = parseFloat(eval(value));
    display_num.innerHTML = value;
  }

  btn_result.innerHTML = `= ${result}`;
  value = result.toString();
}

function Clear() {
  value = '';
  btn_result.innerHTML = '';
  display_num.innerHTML = '';
}

function Delete() {
  value = value.substring(0, value.length - 1);
  btn_result.innerText = value;
}

// Add keyboard input
let key;
document.body.addEventListener('keydown', (event) => {
  key = event.key;
  if (key >= '0' && key <= '9') {
    display_num.innerHTML = '';
    value += key;
    btn_result.innerHTML = value;
    event.preventDefault();
  } else if (key === '+') {
    display_num.innerHTML = '';
    value += '+';
    event.preventDefault();
    btn_result.innerHTML = value;
  } else if (key === '-') {
    display_num.innerHTML = '';
    value += '-';
    event.preventDefault();
    btn_result.innerHTML = value;
  } else if (key === '*') {
    display_num.innerHTML = '';
    value += '*';
    event.preventDefault();
    btn_result.innerHTML = value;
  } else if (key === '/') {
    display_num.innerHTML = '';
    value += '/';
    event.preventDefault();
    btn_result.innerHTML = value;
  } else if (key === 'Enter') {
    Display_result();
  } else if (key === 'c') {
    Clear();
  } else if (key === 'Delete' || key === 'Backspace') {
    Delete();
  }
});