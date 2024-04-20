///ALL 

//Varaibles of the Number and Operator Buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operators");

//Varibles for Clear and Equals (Others)
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal')
const deleteBtn =document.getElementById('delete')

//Varaibles of the inputBox and Result output
const prevInputConnect =  document.getElementById("first-output");
const currInputConnect =  document.getElementById("result-output");


class Calculator{
  constructor(prevInput,currInput){
    this.prevInput = prevInput;
    this.currInput = currInput;
    this.clear()
  }

  clear(){
    this.currentOperand = '';
    this.prevOperand = '';
    this.operator = undefined
  }

  addNumber(number){
    if(number === "." && this.currentOperand.includes('.'))return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation){
    if(this.currentOperand === '')return
    if(this.prevOperand !== ''){
      this.compute()
    }
    this.operation = operation
    this.prevOperand = this.currentOperand + operation
    this.currentOperand = ''
  }

  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
  }

  compute(domConnect){
    let computation 
    const prev = parseFloat(this.prevOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current))return

    switch(this.operation){
      case '+':
        computation = prev + current
        break
        case '-':
        computation = prev - current
        break
        case '*':
        computation = prev * current
        break
        case '÷':
        computation = prev / current
        break
        default:
          return
    }
    this.currentOperand = computation
    // this.operation = undefined
    this.prevOperand = ''
    

    if (computation === ''){
      domConnect.innerHTML= ""
    }else{
      domConnect.innerHTML += "<li>" +prev + " "+this.operation+" "+ current +"</li>" + `<span>` + computation + "</span>"
    }
  }

  updateDisplay(){
    this.currInput.innerText  = this.currentOperand;
    this.prevInput.innerText = this.prevOperand
  }

}

const log = document.querySelector('.logList')
//CLASS CALLER
const calculator = new Calculator(prevInputConnect, currInputConnect)


numberButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    calculator.addNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operatorButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

//Clear, Delete and Equal Btn Event 
function logings(){
    console.log('EQUAL CLICKED')
}

clearBtn.addEventListener("click", button => {
  calculator.clear()
  calculator.updateDisplay()
})

equalBtn.addEventListener("click", button => {
  calculator.compute(log)
  calculator.updateDisplay() 
})

deleteBtn.addEventListener("click", button => {
  calculator.delete()
  calculator.updateDisplay()
})






















