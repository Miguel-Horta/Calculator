const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

display.textContent = 0;
let nums = [], factor1 = []; 
let i = 0, operator = "", result, dot = false;

buttons.forEach((button) => {
  
  button.addEventListener('click', () => {
    if(isNaN(button.id)){
        if(button.id === 'clear')
        {
            display.textContent = 0;
            resetValues()
        }
        else if(button.id === 'delete'){
            if(i <= 1){
                display.textContent = 0;
                resetValues()
            }
            else{
                nums.pop();
                i--;
                display.textContent = nums.join("");
            }
        }
        else if (button.id === '='){ 
            
            if(operator === "+")
            {
                result = parseFloat(nums.join("")) + 
                parseFloat(factor1.join(""));
                display.textContent = result;
            }
            if(operator === "-")
            {
                result = parseFloat(factor1.join("")) - 
                parseFloat(nums.join(""));
                display.textContent = result;
            }
            if(operator === "*")
            {
                result = parseFloat(nums.join("")) * 
                parseFloat(factor1.join(""));
                fontReduce();
            }
            if(operator === "/")
            {
                if(i !== 0){
                    result = parseFloat(factor1.join("")) / 
                    parseFloat(nums.join(""));
                    display.textContent = result;
                }
            }
        }
        else if(button.id === '+'){ 
            factor1 = nums;
            display.textContent = '+'
            operator = "+";
            resetValues()
        }
        else if(button.id === '-')
        {
            factor1 = nums;
            display.textContent = '-'
            operator = "-";
            resetValues()
        }
        else if(button.id === 'x')
        {
            factor1 = nums;
            display.textContent = 'x'
            operator = "*";
            resetValues()
        }
        else if(button.id === '/')
        {
            factor1 = nums;
            display.textContent = '÷'
            operator = "/";
            resetValues()
        }
        else if(button.id === '.')
        {
            if(dot === false){
                const num = button.id;
                nums[i] = num; 
                i++;   
                console.log(num);
                display.textContent = nums.join("");
                dot = true
            }
            else{
                dot = false;
            }
        }
    }
    else{
        const num = button.id;
        nums[i] = num; 
        if(nums[0] !== '0'){
            nums[i] = num; 
            i++;   
            fontReduce();
        }
    }
  });
});

function fontReduce(){
    display.textContent = nums.join("");
        if (i>11){
            let display = document.getElementById('display');
            let style = window.getComputedStyle(display, null).getPropertyValue('font-size');
            let fontSize = parseFloat(style); 
            display.style.fontSize = (fontSize - 4) + 'px';
        }
}

function resetValues(){
    i = 0;
    nums = [];
}

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