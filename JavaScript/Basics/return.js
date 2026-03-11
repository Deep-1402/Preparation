function add(a, b) {
    const sum = a + b;
    return sum;
}
console.log(add(5,2));
//   -----------------------------------------
const myFunction = function() {
    return true;//any data type will return
    console.log( "This is a string." );
 }
 
 console.log(myFunction());
// --------------------------------------------
function Dev(name) {
    console.log("Hello, " + name);
    return; 
    console.log("This line will not be executed.");
}
Dev("Deep"); 

// -----------------------------------------------
function multipleReturn(){
    let name="deep";
    let age=23;
    let salary=5000;
    return [name,age,salary];
}
console.log(multipleReturn());
let getMultiple=multipleReturn();
for(let details of getMultiple){
    console.log(details)
}

// --------------------------------------------------
function objectReturn(){
    let obj={
        name:"deep",
        age:23
    }
    return obj;
}
console.log(objectReturn(),objectReturn().name);