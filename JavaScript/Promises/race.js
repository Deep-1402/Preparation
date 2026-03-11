// => Promise.race([promise1,promise2,...,promisesN]);
//takes array of promises and retums "fastest" which can be fullfiled or  rejected 

let firstPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        resolve("FIrst One is Resolved"),3000
    );         
});

let secondPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        resolve("Second One is Resolved"),4000
    );         
});

let fourthPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        resolve("Forth One is Resolved"),1000
    );         
});

let thirdPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        reject("Third One is Rejected"),1000
    );          
});


let fifthPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        resolve("Fifth One is Resolved"),2000
    );         
});

Promise.race( [ firstPromise, secondPromise ,thirdPromise ,  fourthPromise, fifthPromise ] )
.then(
    (result) => { console.log(result) },
)
.catch((error) => { console.log(`Error Handled ${error}`)})
.finally( () => {console.log("FInnaly Block executed")} )