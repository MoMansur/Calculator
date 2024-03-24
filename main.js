
//Varaibles of the Number and Operator Buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");


//Varibles for Clear and Equals (Others)
const clearBtn = document.getElementById('clear');
const equals = document.getElementById('equal')

//Varaibles of the inputBox and Result output
const firstOutput =  document.getElementById("first-output");
const resultOutput =  document.getElementById("result-output");

console.log(numberButtons)

//Funtionality Fntio

function functionality(){

let inputBoxDisplayer = "";
let lastBoxDisplayer = 0;



//Number Display
numberButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    const clickedButton = event.target;  
     inputBoxDisplayer += clickedButton.textContent;

    if(inputBoxDisplayer === "1"){
      inputBoxDisplayer = 1;
    }else  if(inputBoxDisplayer === "2"){
      inputBoxDisplayer = 2;
    }else  if(inputBoxDisplayer === "3"){
      inputBoxDisplayer = 3;
    }else  if(inputBoxDisplayer === "4"){
      inputBoxDisplayer = 4;
    }else  if(inputBoxDisplayer === "5"){
      inputBoxDisplayer = 5;
    }else  if(inputBoxDisplayer === "6"){
      inputBoxDisplayer = 6;
    }else  if(inputBoxDisplayer === "7"){
      inputBoxDisplayer = 7;
    }else  if(inputBoxDisplayer === "8"){
      inputBoxDisplayer = 8;
    }else  if(inputBoxDisplayer === "9"){
      inputBoxDisplayer = 9;
    }else  if(inputBoxDisplayer === "0"){
      inputBoxDisplayer = 0;
    }
    firstOutput.innerHTML = inputBoxDisplayer;
  });
});

//Operator
let inputOperator = "";
operatorButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    const clickedBtnOperator = event.target;  

    inputOperator = clickedBtnOperator.textContent

    if(clickedBtnOperator === "+"){
      addition(inputBoxDisplayer,)
    }
  });
});

//Calc funttion
function calc(theClickedButton){
  inputBoxDisplayer += theClickedButton.textContent; 
  //Display 
  firstOutput.innerHTML = inputBoxDisplayer;
}



//Clear Button
// clearBtn.addEventListener('click', clear)
// function clear(){
//   firstOutput.innerHTML = "";
 
// }
// clear()


}
functionality()
console.log(functionality())






//Addition
function addition(a,b){
  return a + b
}
console.log(addition(1,5))
//subtraction
function subtract(a,b){
  let solve = a - b;
  return solve
}
//multiplation
function multiply(a,b){
  return a * b;
}
//divide
function divide(a,b){
  return a / b;
}

