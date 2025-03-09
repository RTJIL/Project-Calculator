function operate(num1, action, num2) {
  let result;

  switch (action) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }

  return result;
}

const containerNums = document.querySelector('.numbers');

for (let i = 9; i >= 0; i--) {
  const button = document.createElement('button');
  button.textContent = i;
  button.classList.add('num-btn');
  button.id = 'inp-btn';
  // button.addEventListener("click", () => alert)
  containerNums.appendChild(button);
}

const containerActions = document.querySelectorAll('.actions button');

containerActions.forEach((action) => {
  if (action.className != 'C' && action.className != '=') {
    action.id = 'act-btn';
  }
});

// Number input implementation

// let obj = [];

const numberButtons = document.querySelectorAll('.num-btn');
const actionButtons = document.querySelectorAll('#act-btn');
const footer = document.querySelector('.footer');

let currentInput = '';
let buttonClicked = false;
let currentAction
let firstPartInput = '';
let secondPartInput = '';

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    if (
      currentInput.includes('-') ||
      currentInput.includes('/') ||
      currentInput.includes('*') ||
      currentInput.includes('+')
    ) {
      currentAction = footer.textContent;
      currentInput = '';
      console.log('currentSymbol = ' + currentAction);
    }

    buttonClicked = true;

    currentInput += number;

    footer.textContent = currentInput;
  });
});

actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (
      !currentInput.includes('-') &&
      !currentInput.includes('/') &&
      !currentInput.includes('*') &&
      !currentInput.includes('+') &&
      firstPartInput === ''
    ) {
      const action = button.textContent;
      firstPartInput = currentInput;

      console.log('firstPartInput = ' + firstPartInput);

      currentInput = '';

      if (firstPartInput != 0 && buttonClicked == true) {
        currentInput += action;
      }
      footer.textContent = currentInput;

      secondPartInput = '';
      buttonClicked = false;
    } else if (
      !currentInput.includes('-') &&
      !currentInput.includes('/') &&
      !currentInput.includes('*') &&
      !currentInput.includes('+') &&
      secondPartInput === ''
    ) {
      const action = button.textContent;
      secondPartInput = currentInput;

      console.log('secondPartInput = ' + secondPartInput);

      currentInput = '';

      if (firstPartInput != 0 && buttonClicked == true) {
        currentInput += action;
      }
      footer.textContent = currentInput;

      firstPartInput = '';
      buttonClicked = false;
    }
  });
});

const clearButton = document.querySelector('.actions .C');
clearButton.addEventListener('click', () => {
  currentInput = '';
  footer.textContent = '';
});
