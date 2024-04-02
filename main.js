

//The Main Three
let firstEntry = "";
let operatorEntry = "";
let secondEntry = "";



class Calculator{
  constructor(firstInput, currentInput){
    this.firstInput = firstInput;
    this.currentInput = currentInput;
  }

  clear(){
    this.currentInput = ""
    this.firstInput = '';
    this.operator = '';
  }

  addNumber(number){
    this.currentInput = number
  }

  chooseOperation(operation){

  }

  compute(){

  }

  updateDisplay(){
  }


 

}
///ALL 

//Varaibles of the Number and Operator Buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operators");

//Varibles for Clear and Equals (Others)
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal')

//Varaibles of the inputBox and Result output
const firstOutput =  document.getElementById("first-output");
const resultOutput =  document.getElementById("result-output");


//CLASS CALLER
const calculator = new Calculator(firstOutput, resultOutput)

numberButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    calculator.addNumber(button.innerText)
    calculator.updateDisplay()
  })
})
numberButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    calculator.addNumber(button.innerText)
    calculator.updateDisplay()
  })
})


























