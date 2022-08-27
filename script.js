const buttons = document.querySelectorAll('button');
const numberButtons = ['0','1','2','3','4','5','6','7','8','9'].map((id) => {
  return document.getElementById(id);
});
const operatorButtons = ['+','-','x','/'].map((id) => {
  return document.getElementById(id);
});
const equalButton = document.getElementById('=');
const dotButton = document.getElementById('.');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');

display.textContent = '0';
let nums = [], factor1 = []; 
let operator = "", result = 0;

const clear = () => {
  display.textContent = '0';
  nums = [];
  result = 0;
  factor1 = [];
  operator = "";
}

const deleteCalc = () => {
  if(nums.length <= 1){
   display.textContent = '0';
   nums = [];
  } else {
   nums.pop();
   display.textContent = formatNumber(nums).join("");
 }
}

const calculateResult = () => {
  switch(operator) {
    case '+':
      result = parseFloat(nums.join("")) + parseFloat(factor1.join(""));
      break;
    case '-':
      result = parseFloat(factor1.join("")) - parseFloat(nums.join(""));
      break;
    case 'x':
      result = parseFloat(nums.join("")) * parseFloat(factor1.join(""));
      break;
    case '/':
      if (nums.length !== 0) {
        result = parseFloat(factor1.join("")) / parseFloat(nums.join(""));
      }
      break;
  }
  result = result.toFixed(3).replace(/[.,]000$/, "");;
  display.textContent = result;
  nums = String(result).split("")
}

const addOperator = (operatorToAdd) => {
  factor1 = nums;
  display.textContent = operatorToAdd
  operator = operatorToAdd;
  nums = [];
}

const addDot = () => {
  if (!hasDot(nums)){
    nums.push('.');
    display.textContent = formatNumber(nums).join("");
  }
}

const addNumber = (number) => {
  if (nums.length === 0 && number === '0') {
    return;
  }
  nums.push(number);
  display.textContent = formatNumber(nums).join("");
}

const hasDot = (arr) => {
  return arr.some(val => val === '.');
}

const formatNumber = (numberArray) => {
    if(numberArray.length <= 10) {
      return numberArray;
    }
    return numberArray.slice(numberArray.length - 10);
}

numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const keyPressed = event.target.id;
    addNumber(keyPressed);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const keyPressed = event.target.id;
    addOperator(keyPressed);
  });
});

equalButton.addEventListener('click', calculateResult);
dotButton.addEventListener('click', addDot);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteCalc);

document.addEventListener("keyup", function(event) {
  if(!isNaN(event.key)) {
    const keyPressed = event.key;
    addNumber(keyPressed);
    return;
  }
  switch(event.key) {
    case '+':
    case '-':
    case '/':
      addOperator(event.key);
      break;
    case '*':
      addOperator('x');
      break;
    case 'Enter':
      calculateResult();
      break;
    case '.':
      addDot();
      break;
  }
});
/* 
OTHER FUNCTIONS

const power = function(num1,power) {
	let result = num1;
    for(i = 1; i < power; i++){
      result = result * num1;
  }
  return result;
};

const factorial = function(num) {
	let result = 1; 
    for (i=1; i<=num; i++) {
      result = result * i; 
    }
	return result;
}; */
