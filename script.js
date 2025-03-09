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

let obj = [];

const numberButtons = document.querySelectorAll('.num-btn');
const actionButtons = document.querySelectorAll('#act-btn');
const footer = document.querySelector('.footer');

let currentInput = '';
let buttonClicked = false;

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    // if (
    //   currentInput.includes('-') ||
    //   currentInput.includes('/') ||
    //   currentInput.includes('*') ||
    //   currentInput.includes('+')
    // ) {
    //   let currentSymbol = footer.textContent;
    //   currentInput = '';
    // }

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
      !currentInput.includes('+')
    ) {
      const action = button.textContent;
      let firstPartInput = currentInput;
      currentInput = '';

      if (partInput != 0 && buttonClicked == true) {
        currentInput += action;
      }
      footer.textContent = currentInput;

      buttonClicked = false;
    }
  });
});

const clearButton = document.querySelector('.actions .C');
clearButton.addEventListener('click', () => {
  currentInput = '';
  footer.textContent = '';
});
