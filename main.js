
//Varaibles of the Number and Operator Buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");


//Varibles for Clear and Equals (Others)
const clearBtn = document.getElementById('clear');
const equals = document.getElementById('equal')

//Varaibles of the inputBox and Result output
const firstOutput =  document.getElementById("first-output");
const resultOutput =  document.getElementById("result-output");



const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');






function operatorDisplay(e){
  const operatorClick = e.target;
  operatorEntry = operatorClick.textContent

  pusher(operatorEntry)
  
}


//Equals Btn Funtion
// function equals(){
//   equalBtn.addEventListener('click', function(){
//     resultOutput.innerHTML = operation(operatorEntry, firstEntry, secondEntry);
//   })
// }

  function operation(operand, operand1, operand2){
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
//Operator Objects
const operators = {
  plusObj: plus.addEventListener('click', operatorDisplay),
  minusObj:minus.addEventListener('click', operatorDisplay),
  multiplyObj:multiply.addEventListener('click', operatorDisplay),
  divideObj:divide.addEventListener('click', operatorDisplay),
}



//Funtionality Fntio

let lastBoxDisplayer = 0;

//Number Display
numberButtons.forEach(button => {
  button.addEventListener("click", displayNumber)});

function displayNumber(e){
  const clickedButton = e.target;
  firstEntry = clickedButton.textContent
  pusher(firstEntry)
 
  
}


function pusher(Operate, cal1, cal2){

    firstOutput.innerHTML += Operate

    if(Operate === operators.plusObj)
    {
      console.log('hello')
    }else if(Operate === "-"){
      firstOutput.innerHTML += "-"
    }else if(Operate === "*"){
      firstOutput.innerHTML += "*"
    }else if(Operate === "/"){
      firstOutput.innerHTML += "÷"
    }
   
  
}











// //Funtion
// function MainFuntion(){

//   //Varibles
// let typedNumberFirst = [];
// const typedOperator = [];
// let current = "";

// let first= [];
// let opfirst= "";




// numberButtons.forEach(buttomNum =>{
//   buttomNum.addEventListener('click', foreachNumber)
// })

// function foreachNumber(e){
//     const numButtomClick = e.target;
//     const numButtomDisplay = numButtomClick.textContent

//     first.push(numButtomDisplay);
//     console.log(first)
// }


// firstOutput.innerHTML = first
// //Operator
// operatorButtons.forEach(buttonOp => {
//     buttonOp.addEventListener('click', function(e) {
//         const optButtonClicked = e.target;
//         const optButtonDisplay = optButtonClicked.textContent;

//         typedOperator.push(optButtonDisplay);
        
//         // Optionally, you can log the array to see its contents after each click
//         console.log(typedOperator);
//     });
// });
// console.log(typedOperator)

// function display(){
  
// }
// display()

// }
// MainFuntion()//