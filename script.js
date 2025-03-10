//main mistake is to not comment crusial parts

//shitty code, hard to understand and edit

// function that return result of evaluation of two nums and set it to evaluation
// function operate(num1, action, num2) {
//   let result;

//   switch (action) {
//     case '+':
//       result = Number(num1) + Number(num2);
//       break;
//     case '-':
//       result = Number(num1) - Number(num2);
//       break;
//     case '*':
//       result = Number(num1) * Number(num2);
//       break;
//     case '/':
//       result = Number(num1) / Number(num2);
//       break;
//     default:
//       result = 'Invalid operator';
//   }

//   return result.toString();
// }

// const containerNums = document.querySelector('.numbers');

// for (let i = 9; i >= 0; i--) {
//   const button = document.createElement('button');
//   button.textContent = i;
//   button.classList.add('num-btn');
//   button.id = 'inp-btn';
//   // button.addEventListener("click", () => alert)
//   containerNums.appendChild(button);
// }

// const containerActions = document.querySelectorAll('.actions button');

// containerActions.forEach((action) => {
//   if (action.className != 'C' && action.className != 'equals') {
//     action.id = 'act-btn';
//   }
// });

// // Number input implementation

// // let obj = [];

// const numberButtons = document.querySelectorAll('.num-btn');
// const actionButtons = document.querySelectorAll('#act-btn');
// const expression = document.querySelector('.expression');
// const res = document.querySelector('.result');

// let currentInput = '';
// let buttonClicked = false;
// let currentAction;
// let firstPartInput = '';
// let secondPartInput = '';
// let evaluation = '';

// numberButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const number = button.textContent;
//     if (
//       currentInput.includes('-') ||
//       currentInput.includes('/') ||
//       currentInput.includes('*') ||
//       currentInput.includes('+') ||
//       currentInput.includes('=')
//     ) {
//       currentAction = expression.textContent;
//       currentInput = '';
//       console.log('currentSymbol: ' + currentAction);
//     }

//     buttonClicked = true;

//     currentInput += number;

//     expression.textContent = currentInput;
//   });
// });

// actionButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     if (
//       !currentInput.includes('-') &&
//       !currentInput.includes('/') &&
//       !currentInput.includes('*') &&
//       !currentInput.includes('+') &&
//       firstPartInput === '' &&
//       evaluation === '' &&
//       !currentInput.includes('=')
//     ) {
//       const action = button.textContent;
//       firstPartInput = currentInput;

//       if (currentInput != '') console.log('firstPartInput: ' + firstPartInput);

//       currentAction = action;
//       currentInput = '';

//       if (firstPartInput != 0 && buttonClicked == true) {
//         currentInput += action;
//       }
//       expression.textContent = currentInput;

//       secondPartInput = '';
//       buttonClicked = false;
//     } else if (
//       !currentInput.includes('-') &&
//       !currentInput.includes('/') &&
//       !currentInput.includes('*') &&
//       !currentInput.includes('+') &&
//       !currentInput.includes('=')
//     ) {
//       const action = button.textContent;
//       secondPartInput = currentInput;

//       console.log('secondPartInpu: ' + secondPartInput);

//       currentInput = '';

//       if (firstPartInput != 0 && buttonClicked == true) {
//         currentInput += action;
//       }
//       expression.textContent = currentInput;

//       evaluation = operate(firstPartInput, currentAction, secondPartInput);

//       console.log('Evaluation: ' + evaluation);

//       console.log(
//         firstPartInput +
//           currentAction +
//           secondPartInput +
//           ' = ' +
//           operate(firstPartInput, currentAction, secondPartInput)
//       );
//       res.textContent = operate(firstPartInput, currentAction, secondPartInput);

//       if (evaluation === '') {
//         firstPartInput = '';
//       } else {
//         firstPartInput = evaluation;
//         console.log('firstPartInput: ' + firstPartInput);
//       }

//       buttonClicked = false;
//     }
//   });
// });

// const clearButton = document.querySelector('.actions .C');
// clearButton.addEventListener('click', () => {
//   buttonClicked = false;
//   currentAction;
//   firstPartInput = '';
//   secondPartInput = '';
//   evaluation = '';
//   currentInput = '';
//   expression.textContent = '';
//   res.textContent = 0;
// });

// if (firstPartInput != '') {
//   const equalsButton = document.querySelector('.actions .equals');
//   equalsButton.addEventListener('click', () => {
//     const action = button.textContent;
//     secondPartInput = currentInput;

//     console.log('secondPartInpu: ' + secondPartInput);
//     res.textContent = operate(firstPartInput, currentAction, secondPartInput);
//   });
// }

// Function that returns the result of an evaluation between two numbers
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
      if (Number(num2) === 0) {
        alert("Can't divide by zero!");
        return 'Error';
      }
      result = Number(num1) / Number(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  return result.toString();
}

// Create number buttons dynamically
const containerNums = document.querySelector('.numbers');

for (let i = 9; i >= 0; i--) {
  const button = document.createElement('button');
  button.textContent = i;
  button.classList.add('num-btn');
  containerNums.appendChild(button);
}

// Identify the action buttons (operators +, -, *, /)
const containerActions = document.querySelectorAll('.actions button');

containerActions.forEach((action) => {
  if (action.className !== 'C' && action.className !== 'equals') {
    action.id = 'act-btn';
  }
});

// Select DOM elements for interaction
const numberButtons = document.querySelectorAll('.num-btn');
const actionButtons = document.querySelectorAll('#act-btn');
const expression = document.querySelector('.expression');
const res = document.querySelector('.result');

let currentInput = ''; // Current number user is typing
let currentAction = ''; // The current operator (+, -, *, /)
let firstPartInput = ''; // First operand
let secondPartInput = ''; // Second operand
let evaluation = ''; // Result of evaluation
let awaitingNextAction = false;

// Helper function to update expression display
function updateExpressionDisplay() {
  expression.textContent = `${firstPartInput} ${currentAction} ${currentInput}`;
}

// ---------------------
// Number Button Clicks
// ---------------------
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // If = was pressed and no operator clicked yet, block number input
    if (awaitingNextAction) {
      alert('Press an operator to continue or clear to reset.');
      return;
    }

    const number = button.textContent;

    // Append number to currentInput
    currentInput += number;

    updateExpressionDisplay();
  });
});

// ---------------------
// Action (Operator) Button Clicks
// ---------------------
actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.textContent;
    
    // Unlock number inputs
    awaitingNextAction = false;

    // No first input yet -> store currentInput as first operand
    if (!firstPartInput && currentInput) {
      firstPartInput = currentInput;
      currentAction = action;
      currentInput = '';
      updateExpressionDisplay();
    }
    // User is chaining operations (e.g. 5 + 2 - 3)
    else if (firstPartInput && currentInput) {
      secondPartInput = currentInput;
      evaluation = operate(firstPartInput, currentAction, secondPartInput);

      if (evaluation === 'Error') {
        clearCalculator();
        return;
      }

      // Show result & prepare for the next operation
      res.textContent = evaluation;

      firstPartInput = evaluation;
      currentAction = action;
      currentInput = '';
      secondPartInput = '';

      updateExpressionDisplay();
    }
    // If user wants to change the operator (without typing second operand)
    else if (firstPartInput && !currentInput) {
      currentAction = action;
      updateExpressionDisplay();
    }
  });
});

// ---------------------
// Equals Button Click
// ---------------------
const equalsButton = document.querySelector('.actions .equals');
equalsButton.addEventListener('click', () => {
  // Ensure a complete expression is ready to evaluate
  if (!firstPartInput || !currentAction || !currentInput) {
    alert('Incomplete expression');
    return;
  }

  secondPartInput = currentInput;
  evaluation = operate(firstPartInput, currentAction, secondPartInput);

  if (evaluation === 'Error') {
    clearCalculator();
    return;
  }

  // Show final result
  res.textContent = evaluation;

  // Reset or prepare for another calculation
  expression.textContent = `${firstPartInput} ${currentAction} ${secondPartInput} =`;
  firstPartInput = evaluation;
  currentInput = '';
  currentAction = '';
  secondPartInput = '';

  awaitingNextAction = true; // 🔥 Block numbers until operator is pressed
});

// ---------------------
// Clear Button Click
// ---------------------
const clearButton = document.querySelector('.actions .C');
clearButton.addEventListener('click', () => {
  clearCalculator();
});

// Clear all state and UI
function clearCalculator() {
  currentInput = '';
  currentAction = '';
  firstPartInput = '';
  secondPartInput = '';
  evaluation = '';
  awaitingNextAction = false; // 🔥 Unlock numbers
  expression.textContent = '';
  res.textContent = 0;
}

// analyze todays english practice
// make the cycle on habitica
