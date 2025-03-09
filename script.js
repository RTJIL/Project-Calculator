const containerNums = document.querySelector(".numbers");

for (let i = 9; i >= 0; i--) {
    const button = document.createElement("button");
    button.textContent = i; 
    button.classList.add("num-btn");
    // button.addEventListener("click", () => alert)
    containerNums.appendChild(button);
}

const containerActions = document.querySelector(".actions");

// Number input implementation 

const numberButtons = document.querySelectorAll('.num-btn');
const footer = document.querySelector('.footer');

let currentInput = "";

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.textContent;

        currentInput += number;

        footer.textContent = currentInput;
    });
});

const clearButton = document.querySelector('.actions .C')
clearButton.addEventListener('click', () => {
    currentInput = '';
    footer.textContent = '';
})