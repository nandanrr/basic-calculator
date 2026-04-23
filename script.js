let buttons=document.querySelectorAll('.numberBtn');
let operators=document.querySelectorAll('.operatorBtn');
let clearBtn=document.querySelector('.clearBtn');
let backspaceBtn=document.querySelector('.backspaceBtn');
let equalsBtn=document.querySelector('.equalsBtn');
let output=document.getElementById('output');
        
let firstNumber="";
let secondNumber="";
let operator="";
                
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        output.value+=button.innerText;
            if(operator === ""){
                firstNumber += button.innerText;
           }else{
                secondNumber += button.innerText;
            }
        })        
})        
        
clearBtn.addEventListener('click',()=>{
        output.value="";
        firstNumber="";
        secondNumber="";
        operator="";
})

backspaceBtn.addEventListener('click',()=>{
    output.value=output.value.slice(0,-1);
        if(operator===""){
            firstNumber=firstNumber.slice(0,-1);
        }else{
            secondNumber=secondNumber.slice(0,-1);
        }
    })
operators.forEach(op=>{
    op.addEventListener('click',()=>{
        // chaining logic
        if(firstNumber !== "" && operator !== "" && secondNumber !== ""){
            let result;
            switch(operator){
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case '/':
                    if(parseFloat(secondNumber) === 0){
                        output.value = "Error: Division by zero";
                        return;
                    }
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
                case '%':
                    result = parseFloat(firstNumber) % parseFloat(secondNumber);
                    break;
            }

            firstNumber = result.toString();
            secondNumber = "";
            output.value = firstNumber + " " + op.innerText + " ";
        }

            if(firstNumber !== ""){
                operator = op.innerText;
                 output.value += " " + operator + " ";
            } else {
                output.value = "Enter number first";
            }

         })
    })
            
    equalsBtn.addEventListener('click',()=>{
        if(firstNumber !== "" && secondNumber !== "" && operator !== ""){
            let result;

            switch(operator){
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case '/':
                    if(parseFloat(secondNumber) === 0){
                        output.value = "Error: Division by zero";
                        return;
                    }
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
                case '%':
                    result = parseFloat(firstNumber) % parseFloat(secondNumber);
                    break;
            }

            output.value = result;

            firstNumber = result.toString();
            secondNumber = "";
            operator = "";
        } else {
            output.value = "Invalid Expression";
        }
    });