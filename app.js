let number = '';
let operator  = '';
let decimal = '';
let previousScreen = '';
let currentScreen = '';
let currentValue = '';
let previousValue = '';

document.addEventListener("DOMContentLoaded",function(){
    let clear = document.querySelector("#clear-btn");
    let number = document.querySelectorAll(".numbers");
    let operator = document.querySelectorAll(".operators");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equal")


    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");
    number.forEach((number) => number.addEventListener('click',function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
        

    }))
    operator.forEach((op)=> op.addEventListener('click', function(e){
        handleOp(e.target.textContent)
        previousScreen.textContent = previousValue + "" + operators;
        currentScreen.textContent = currentValue;
        
    }))
    equal.addEventListener('click',function(){
        islem();
        currentScreen.textContent  =  previousValue;

    }  )
clear.addEventListener('click', function(){
    previousValue = '';
    currentValue = ''; 
    operator = '';
    previousScreen.textContent= currentValue;
    currentScreen.textContent  = currentValue;
   

})
})

function handleNumber(num){
if (currentValue.length <=5) {
    currentValue += num;
}
 
}
function handleOp(op)
{
    operator = op;
    previousValue = currentValue;
    currentValue = "";

    
}

function islem()

{
    currentValue = Number(currentValue);
    previousValue = Number(previousValue);
   
    if( operator === "+")
    { 
        previousValue += currentValue;

    }
    else if (operator === "-"){
        previousValue -= currentValue;

    }

    else if (operator === "x"){
        previousValue *= currentValue;

    }
    else{
        previousValue /= currentValue;

    }
    console.log(previousValue);
    
    
}