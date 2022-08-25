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
            i = 0;
            nums = [];
        }
        else if(button.id === 'delete'){
            if(i <= 1){
                display.textContent = 0;
                i = 0;
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
                if (result.toString().length>11){
                    let display = document.getElementById('display');
                    let style = window.getComputedStyle(display, null).getPropertyValue('font-size');
                    let fontSize = parseFloat(style); 
                    display.style.fontSize = (fontSize - 4) + 'px';
                }
                nums = String(result).split("")
                i = nums.size;
            }
            else if(operator === "-")
            {
                result = parseFloat(factor1.join("")) - 
                parseFloat(nums.join(""));
                display.textContent = result;
                nums = String(result).split("")
                i = nums.size;
            }
            else if(operator === "*")
            {
                result = parseFloat(nums.join("")) * 
                parseFloat(factor1.join(""));
                display.textContent = result;
                if (result.toString().length>11){
                    let display = document.getElementById('display');
                    let style = window.getComputedStyle(display, null).getPropertyValue('font-size');
                    let fontSize = parseFloat(style); 
                    display.style.fontSize = (fontSize - 4) + 'px';
                }
                nums = String(result).split("")
                i = nums.size;
            }
            else if(operator === "/" && i !== 0)
            {
                result = parseFloat(factor1.join("")) / 
                parseFloat(nums.join(""));
                display.textContent = result;
                nums = String(result).split("")
                i = nums.size;
            }
        }
        else if(button.id === '+'){ 
            factor1 = nums;
            display.textContent = '+'
            operator = "+";
            i = 0;
            nums = [];
            dot = false;
        }
        else if(button.id === '-')
        {
            factor1 = nums;
            display.textContent = '-'
            operator = "-";
            i = 0;
            nums = [];
            dot = false;
        }
        else if(button.id === 'x')
        {
            factor1 = nums;
            display.textContent = 'x'
            operator = "*";
            i = 0;
            nums = [];
            dot = false;
        }
        else if(button.id === '/')
        {
            factor1 = nums;
            display.textContent = '÷'
            operator = "/";
            i = 0;
            nums = [];
            dot = false;
        }
        else if(button.id === '.')
        {
            console.log(dot);
            if(dot === false){
                const num = button.id;
                nums[i] = num; 
                i++;   
                console.log(num);
                display.textContent = nums.join("");
                dot = true
            }
            
        }
    }
    else{
        const num = button.id
        nums[i] = num; 
        if(nums[0] !== '0'){
            nums[i] = num; 
            i++;   
            display.textContent = nums.join("");
            if (i>11){
                let display = document.getElementById('display');
                let style = window.getComputedStyle(display, null).getPropertyValue('font-size');
                let fontSize = parseFloat(style); 
                display.style.fontSize = (fontSize - 4) + 'px';
            }
        }
    }
  });
});

document.addEventListener("keyup", function(event) {
    if(isNaN(event.key)){
        if(event.key === '+'){ 
            document.getElementById("+").click();
        }
        else if(event.key === '-')
        {
            document.getElementById("-").click();
        }
        else if(event.key === '*')
        {
            document.getElementById("x").click();
        }
        else if(event.key === '/')
        {
            document.getElementById("/").click();
        }
        else if(event.key === '.')
        {
            document.getElementById(".").click();
        }
        else if (event.key === 'Enter'){ 
            document.getElementById("=").click();
        }
    }
    else{
        keyPressed = parseInt(event.key);
        nums[i] = keyPressed;
        if(nums[0] !== '0'){
            nums[i] = keyPressed; 
            i++;   
            display.textContent = nums.join("");
            if (i>11){
                let display = document.getElementById('display');
                let style = window.getComputedStyle(display, null).getPropertyValue('font-size');
                let fontSize = parseFloat(style); 
                display.style.fontSize = (fontSize - 4) + 'px';
            }
        }
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