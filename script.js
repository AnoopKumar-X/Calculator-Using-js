const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

let firstNumber = "";
let secondNumber = "";
let expression = "";

// BUTTON CLICK HANDLER
btns.forEach(btn => {
    btn.addEventListener("click", () => {

        const val = btn.innerHTML;

        // NUMBER OR DOT
        if (!isNaN(val) || val === ".") {
            if (expression === "" ) {
                firstshownumber(val);
            } 
            else if(val!=="") {
                fullExpression(val);
            }
        }

        // OPERATORS
        else if (["+", "-", "÷", "×", "%",].includes(val)) {
            numberAndSign(val);
        }

        // EQUAL
        else if (val === "=") {
            calculate();
        }

        // CLEAR
        else if (val === "AC") {
            clearAll();
        }
        else if(val==="Del"){
            handleDelete()
        }
        
    });
});


// FIRST NUMBER
function firstshownumber(val) {
    if (val!=="Del"){
        firstNumber+= val;
        if (forLargeValue(firstNumber)) return;
        result.innerHTML = firstNumber ;
        
    } 
}


// OPERATOR
function numberAndSign(val) {
  
    if (firstNumber !== "") {
        expression = val;
        result.innerHTML = firstNumber + " " + expression;
    }
}


// SECOND NUMBER
function fullExpression(val) {
    if (val!=="Del"){
        secondNumber += val;
        let fulExp=firstNumber + " " + expression + " " + secondNumber;
        if(forLargeValue(secondNumber)) return
        result.innerHTML = fulExp
    } 
}


// CALCULATE RESULT
function calculate() {
    if (firstNumber !== "" && secondNumber !== "" && expression !== "") {
        let exp = firstNumber + expression + secondNumber;

        // replace symbols for JS
        exp = exp.replace("×", "*").replace("÷", "/");

        try {
            let output = eval(exp);
            let finalAns=parseFloat(output.toFixed(5))
            firstNumber =  finalAns.toString();
            if (forLargeValue(firstNumber)) return;
           result.innerHTML = firstNumber;
            // allow chaining (use result as next first number)
            secondNumber = "";
            expression = "";
        } catch {
            result.innerHTML = "Error";
            clearAll();
        }
    }
}
function handleDelete() {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
        result.innerHTML = firstNumber + " " + expression + " " + secondNumber;
    } 
    else if (expression !== "") {
        expression = "";
        result.innerHTML = firstNumber;
    } 
    else {
        firstNumber = firstNumber.slice(0, -1);
        result.innerHTML = firstNumber || "0";
    }
}


// CLEAR FUNCTION
function clearAll() {
    firstNumber = "";
    secondNumber = "";
    expression = "";
    result.innerHTML = "0";
}
function forLargeValue(val){
    if(val.length >= 14){
        result.innerHTML = "Err";
        firstNumber=""
        expression=""
        secondNumber=""
        return true;
         // stop signal
    }
    return false;
}
 
 

 

 
