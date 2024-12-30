// hoisting is behavior where variable and function
//declarations are moved to the top of their scope before code execution

 // hoisting
console.log(x);
var x=9;



// hoisting
console.log(add(3,5));

function add(num1, num2){
    return num1+num2
}
//8


//ex2

console.log(subtract(8,4))
const que = function subtract(n1,n2){
    return  n1-n2;
}
//ReferenceError: subtract is not defined


