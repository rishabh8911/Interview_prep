function add(n1,n2) {
  console.log( n1+n2)
}
const result = add(3,5);
console.log(result);
//8
//undefined


function addtwonum(num1, num2){
    return num1+ num2;
}
const ans = addtwonum(11,3)
console.log("result:",ans);


function loginTxt(username){
    if(username===undefined){
        console.log("enter a username");
        return;
      
    }
      
     return `${username} just logged in`
}
console.log(loginTxt("rohan"))
