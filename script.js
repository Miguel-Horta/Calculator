const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

display.textContent = 0;
let nums = [], factor1 = []; 
let operator = "", result = 0;

buttons.forEach((button) => {
  
  button.addEventListener('click', () => {
    if(isNaN(button.id)){
        if(button.id === 'clear')
        {
            display.textContent = 0;
            nums = [];
            result = 0;
            factor1 = [];
            operator = "";
        }
        else if(button.id === 'delete'){
            if(nums.length <= 1){
                display.textContent = 0;
                nums = [];
            }
            else{
                nums.pop();
                display.textContent = nums.join("");
            }
        }
        else if (button.id === '='){ 
            
            if(operator === "+")
            {
                result = parseFloat(nums.join("")) + 
                parseFloat(factor1.join(""));
                if(result.toString().length > 11)
                {
                    display.textContent = 'Out of limit';
                }
                else{
                    display.textContent = result;
                    nums = String(result).split("")
                }
            }
            else if(operator === "-")
            {
                result = parseFloat(factor1.join("")) - 
                parseFloat(nums.join(""));
                display.textContent = result;
                nums = String(result).split("")
            }
            else if(operator === "*")
            {
                result = parseFloat(nums.join("")) * 
                parseFloat(factor1.join(""));
                if(result.toString().length > 11)
                {
                    display.textContent = 'Out of limit';
                }
                else{
                    display.textContent = result;
                    nums = String(result).split("")
                }
            }
            else if(operator === "/" && nums.length !== 0)
            {
                result = parseFloat(factor1.join("")) / 
                parseFloat(nums.join(""));
                display.textContent = result;
                nums = String(result).split("")
            }
        }
        else if(button.id === '+'){ 
            factor1 = nums;
            display.textContent = '+'
            operator = "+";
            nums = [];
        }
        else if(button.id === '-')
        {
            factor1 = nums;
            display.textContent = '-'
            operator = "-";
            nums = [];
        }
        else if(button.id === 'x')
        {
            factor1 = nums;
            display.textContent = 'x'
            operator = "*";
            nums = [];
        }
        else if(button.id === '/')
        {
            factor1 = nums;
            display.textContent = '÷'
            operator = "/";
            nums = [];
        }
        else if(button.id === '.')
        {
            if (!hasDot(nums)){
                const num = button.id;
                nums.push(num);
                display.textContent = nums.join("");
            }
        }
    }
    else{
        const num = button.id
        nums.push(num); 
        if(nums[0] !== '0'){
            nums[nums.length - 1] = num; 
            tooBig();
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
        if (nums.length === 0 && keyPressed === '0') {
          return;
        } else {
        nums[nums.length] = keyPressed;
            tooBig();
        }
    }
});

function hasDot(arr) {
    return arr.some(val => val === '.');
  }

function tooBig(){
    const nums2 = nums.toString().substring(0,21).replaceAll(',', '');
    display.textContent = nums2;
    nums = String(nums2).split("");
    console.log(nums);
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