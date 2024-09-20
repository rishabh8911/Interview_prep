//map, filter and reduce are the higher order function
//map?  => used to CREATING  the new arr from existing one/
// basically we can transform existing arr into array

const nums = [1,2,3,4,5]
const arr = [2,3,4,5]



const multi = nums.map((num,i, arr)=>{
    return num * 10;
});

console.log("answer", multi);

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


//filter

const myNums = [1,2,3,4,5,6,7,8,9,10]
//Explicit return: When you use curly braces { } in an arrow function, you must explicitly use the return keyword to return a value from the function body. 
//Implicit return: If you omit the curly braces, the function will implicitly return the result of the expression, without needing the return keyword.
const newNums=  myNums.filter((num)=> {
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
    return bk.publish>=2000
})

console.log("userbooks",userBooks);







  




