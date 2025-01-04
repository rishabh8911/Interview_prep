var obj={
name:  "rahul",
getName: function(){
console.log(this.name);
}
}

obj.getName()

// this keyword will refer to the object obj, and hence the output will be “rahul”.

