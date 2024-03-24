

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

numberButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    const clickedButton = event.target;  
    const clickedButtonText = clickedButton.textContent; 

    displayer(firstOutput, clickedButtonText);  
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    const clickedButton = event.target;  
    const clickedButtonText = clickedButton.textContent; 

    displayer(firstOutput, clickedButtonText);  
  });
});


const firstOutput =  document.getElementById("first-output");
const resultOutput =  document.getElementById("result-output");


function displayer(theOuput, theButton){
    theOuput.innerHTML =  theButton;
}

function updateDisplay(){
  clickedButton
}





//Addition
function addition(a,b){
  return a + b
}
//subtraction
function subtract(a,b){
  return a - b;
}
//multiplation
function multiply(a,b){
  return a * b;
}
//divide
function divide(a,b){
  return a / b;
}