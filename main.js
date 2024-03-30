//Varaibles of the Number and Operator Buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

//Varibles for Clear and Equals (Others)
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal')

//Varaibles of the inputBox and Result output
const firstOutput =  document.getElementById("first-output");
const resultOutput =  document.getElementById("result-output");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide =document.querySelector(".divide");

//result 

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

  }

  chooseOperation(operation){

  }

  compute(){

  }

  updateDisplay(){
  }


 

}

let calculator = new Calculator()

numberButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    calculator.addNumber(button.innerText)
    calculator.updateDisplay()
  })
})



























