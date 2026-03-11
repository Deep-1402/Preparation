// => Promise.allSettled([promise1,promise2,...,promisesN]);
//takes array of promises executes Even if promise Rejected Or resolved and it wailts untill all promises are either rejected or resolved

//=> Promise.allSettled returns an json object which have Two properties first one is "state" which contains either "fullfiled" or "rejected" and second property is values (according to promise) 

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

let thirdPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        reject("Third One is Rejected"),1000
    );          
});

let fourthPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        resolve("Forth One is Resolved"),1000
    );         
});

let fifthPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        reject("Fifth One is Rejected"),2000
    );         
});

Promise.allSettled( [ firstPromise, secondPromise ,thirdPromise ,  fourthPromise, fifthPromise ] )
.then(
    (result) => { console.log(result) },
)
.catch((error) => { console.log(`Error Handled ${error}`)})
.finally( () => {console.log("FInnaly Block executed")} )



