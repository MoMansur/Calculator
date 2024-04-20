
//Varaibles of the Number and Operator Buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");


//Varibles for Clear and Equals (Others)
const clearBtn = document.getElementById('clear');
const equals = document.getElementById('equal')

//Varaibles of the inputBox and Result output
const firstOutput =  document.getElementById("first-output");
const resultOutput =  document.getElementById("result-output");





let firstInput = '';
let OperatorInput = '';
let secondInput = '';


//Funtion
function MainFuntion(){

  //Varibles
let operatorVar= "";

// if(firstOutput.innerHTML =null){
//   console.log('its empyt')
// }else{
//   console.log('NOT empyt')

// }

function Calculation(operand, operand1, operand2){
  switch(operand){
    case '+':
      return  resultOutput.innerHTML = operand1 + operand2;
      case '-':
      return operand1 - operand2;
      case '*':
      return operand1 * operand2;
      case '/':
        if(operand2 !== 0){
          return operand1 / operand2;
        }else{
          return 'error'
        }
  }
}
console.log(firstOutput.innerHTML)

function pusher(firstEntry){

if(firstEntry === "+" || "-" || "*" || "/"){
  operatorVar = firstEntry
  console.log(operatorVar)
  if(operatorVar === "+"){
     Calculation(operatorVar)
  }
}
}


numberButtons.forEach(buttomNum =>{
  buttomNum.addEventListener('click', foreachButton)
})

operatorButtons.forEach(buttomNum =>{
  buttomNum.addEventListener('click', foreachButton)
})

function foreachButton(e){
    const buttonClick = e.target;
    const buttonDisplay = buttonClick.textContent

    // switch(buttonDisplay){
    //   case "+":
    //     return firstEntry + secondEntry
    // }

    pusher(buttonDisplay)
}


//Operator



}

MainFuntion()//