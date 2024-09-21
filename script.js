//map, filter and reduce are the higher order function
//map?  => used to CREATING  the new arr from existing one/
// basically we can transform existing arr into array

const nums = [1,2,3,4,5]
const arr = [2,3,4,5]
const multi = nums.map((num,i, arr)=>{
    return num * 10;
});
console.log("answer", multi);



const numbers= [1,2,3,4,5,6,7,8,9,10]
const newNum = numbers.map((val)=>
 val*10
)
console.log("myNum", newNum);

// chaining in map

const newNomber = [10,20,30,40]
const chain = newNomber.map((v)=>v*2)
                       .map((v)=>v+1)  
                       .filter((v)=> v>=30)
             console.log("chain", chain);
                   


const number = [1,4,3,2];
const moreThanTwo = number.filter((number)=>{
    return number>2; 
});
console.log("more than two", moreThanTwo)



//filter

const myNums = [1,2,3,4,5,6,7,8,9,10]
//Explicit return: When you use curly braces { } in an arrow function, you must explicitly use the return keyword to return a value from the function body. 
//Implicit return: If you omit the curly braces, the function will implicitly return the result of the expression, without needing the return keyword.
const newNums =  myNums.filter((num)=> {
    return num>4
})
console.log("newNums",newNums);

// more filter examples

const books =[
    {title:'book one ', 
        genre:'fiction',
        publish:1981,
        edition:2002
    },

    {title:'book two ', 
        genre:'history',
        publish:2001,
        edition:2005
    },

    {title:'book three ', 
        genre:'science',
        publish:2009,
        edition:2006
    },

    {title:'book four ', 
        genre:'non-fiction',
        publish:1984,
        edition:2007
    },

    {title:'book five ', 
        genre:'maths',
        publish:1985,
        edition:2008
    },

];

let  userBooks = books.filter((bk)=>{
     return bk.genre==='maths'
})

userBooks= books.filter((bk)=>{
    return bk.publish >= 2000 && bk.genre ==="science"
})

console.log("userbooks",userBooks);

//Reduce 

const red =[1,2,3,4,5];
const sum = red.reduce((acc, curr, i, arr)=>{
    return acc+curr;

},0)

console.log("reduced" ,sum);

const mmyNums = [1,2,3]
const myNumber = mmyNums.reduce((acc,currvalue)=>{
    return acc+currvalue;
},1)
console.log("reduceNum", myNumber);

// shopping cart example 

const shoppingCart = [
    {
        course: "js",
        price : 2999
    },

   {
    course: "python",
        price : 7999
   },

   {
    course: "backend",
        price : 6999
   },

   {
    course: "AIML",
        price : 1400
   },


]

const addprice = shoppingCart.reduce((acc, item)=>acc+item.price,0)  // this is implicit return
console.log("addprice", addprice);

const cart =[
    {
        product: "Ac",
        price:18000,
        quantity:2
    },

    {
        product: "laptop",
        price:150000,
        quantity:2
    },

    {
        product: "ps5",
        price:14000,
        quantity:9
    }
];

const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

console.log(totalPrice);  // Output: 2300















  




