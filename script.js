function operate(num1, action, num2) {
  let result;

  switch (action) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      break;
    case '/':
      result = Number(num1) / Number(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  return result.toString();
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
const expression = document.querySelector('.expression');
const res = document.querySelector('.result')

let currentInput = '';
let buttonClicked = false;
let currentAction;
let firstPartInput = '';
let secondPartInput = '';
let evaluation = '';

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    if (
      currentInput.includes('-') ||
      currentInput.includes('/') ||
      currentInput.includes('*') ||
      currentInput.includes('+')
    ) {
      currentAction = expression.textContent;
      currentInput = '';
      console.log('currentSymbol = ' + currentAction);
    }

    buttonClicked = true;

    currentInput += number;

    expression.textContent = currentInput;
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
      expression.textContent = currentInput;

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
      expression.textContent = currentInput;

      console.log(operate(firstPartInput, currentAction, secondPartInput));
      res.textContent = operate(firstPartInput, currentAction, secondPartInput);
      firstPartInput = '';
      buttonClicked = false;
    }
  });
});

const clearButton = document.querySelector('.actions .C');
clearButton.addEventListener('click', () => {
  currentInput = '';
  expression.textContent = '';
  res.textContent = 0;
});