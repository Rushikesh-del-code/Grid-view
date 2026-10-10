function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Division by zero";
    }
    return a / b;
}

console.log(add(5, 3)); 
console.log(subtract(5, 3));    
console.log(multiply(5, 3));    
console.log(divide(5, 3));      
console.log(divide(5, 0));      


//arrow function//

const calculatefruitprize=(quantity,priceperkg)=>{
    return quantity*priceperkg;
}

const add = (a, b) =>{ 
    return a + b;
};
  
const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
}
com

