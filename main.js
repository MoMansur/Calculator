
//Varaibles of the Number and Operator Buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");


//Varibles for Clear and Equals (Others)
const clearBtn = document.getElementById('clear');
const equals = document.getElementById('equal')

//Varaibles of the inputBox and Result output
const firstOutput =  document.getElementById("first-output");
const resultOutput =  document.getElementById("result-output");








//Funtion
function MainFuntion(){

  //Varibles
let typedNumberFirst = [];
const typedOperator = [];
let current = "";

let first= [];
let opfirst= "";

// if(firstOutput.innerHTML =null){
//   console.log('its empyt')
// }else{
//   console.log('NOT empyt')

// }
console.log(firstOutput.innerHTML)

function pusher(firstEntry){

if(firstEntry === "+"){
  typedNumberFirst.push(firstEntry)
  console.log(typedNumberFirst)
  resultOutput.innerHTML += firstEntry 

}else{
  firstOutput.innerHTML += firstEntry
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


firstOutput.innerHTML = first
//Operator



}

MainFuntion()//