// Promise is an object represents Completion or failure of Async Operation
// Promise Have Two Parameters 1.State(pending=>default) 2.Result(undefined=>default)
// if Promise is resolved State Is "Fulfilled" and Result is Resolved Value
// if Promise is Rejected The Status Is "Rejected" and Result Shows An Error
// synntax

let Dev = new Promise(function(resolve,reject){
    // condition wise
    // resolve(value) or reject(error/value) 
})
.then((onFUllfilled)=>{},(onRejected)=>{})
.then((onFUllfilled)=>{},(onRejected)=>{})
.then((onFUllfilled)=>{},(onRejected)=>{})
.catch((error)=>{console.log(`Error : ${error}`)})
.finally(()=>{console.log("Always RUns")});



// you can add One more Callback using promise object method "then() " : how to handle result of promise and write both condition for resolve or reject 
// you can add multiple then(chain of then)

// catch error in Promise have method "PromiseObject.catch((error)=>c.log(error)) so beacus eof error no error is caught"
// you can Write this "'then() error parameter' or 'catch() method' Vice Versa" 
// "finally():" executes whether promise resolve or rejected


