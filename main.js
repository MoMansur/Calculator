
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








//Funtion
function MainFuntion(){

  //Varibles
let typedNumberFirst = [];
const typedOperator = [];
let current = "";

let first= [];
let opfirst= "";




numberButtons.forEach(buttomNum =>{
  buttomNum.addEventListener('click', foreachNumber)
})

function foreachNumber(e){
    const numButtomClick = e.target;
    const numButtomDisplay = numButtomClick.textContent

    first.push(numButtomDisplay);
    console.log(first)
}


firstOutput.innerHTML = first
//Operator
operatorButtons.forEach(buttonOp => {
    buttonOp.addEventListener('click', function(e) {
        const optButtonClicked = e.target;
        const optButtonDisplay = optButtonClicked.textContent;

        typedOperator.push(optButtonDisplay);
        
        // Optionally, you can log the array to see its contents after each click
        console.log(typedOperator);
    });
});
console.log(typedOperator)

function display(){
  
}
display()

}
MainFuntion()//