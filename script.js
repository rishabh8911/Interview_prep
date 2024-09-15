//map, filter and reduce 
//map?  => used to CREATING  the new arr from existing one

// const nums = [1,2,3,4,5]

// const multi = nums.map((num,i, arr)=>{
//     return num * 10;
// });

// console.log("answer", multi);

const number = [1,4,3,2];
const moreThanTwo = number.filter((number)=>{
    return number>2;

});
console.log("more than two", moreThanTwo)


const red =[1,2,3,4,5];
const sum = red.reduce((acc, curr, i, arr)=>{
    return acc+curr;

},0)

console.log("reduced" ,sum);



  




