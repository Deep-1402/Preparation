// => Promise.all([promise1,promise2,...,promisesN]);
//takes array of promises and retums only all resolved values
//If Any Nof One REjected o resolved values Returned only Rejected Error 
// and it runs all promises at same time waits Untill alll Promises are resolved

let firstPromise = new Promise( (resolve,reject) => {
    resolve("FIrst One is Resolved");
});

let secondPromise = new Promise( (resolve,reject) => {
    resolve("Second One is reject");
});

let thirdPromise = new Promise( (resolve,reject) => {
    setTimeout( () =>
        resolve("Third One is resolved"),2000
    );
});

let fourthPromise = new Promise( (resolve,reject) => {
    resolve("Forth One is Resolved");
});

let fifthPromise = new Promise( (resolve,reject) => {
    resolve("Fifth One is Resolved");
});


// firstPromise=fetch(`https://jsonplaceholder.typicode.com/posts/1`);
// secondPromise=fetch(`https://jsonplaceholder.typicode.com/posts/1`);
// thirdPromise=fetch(`https://jsonplaceholder.typicode.com/posts/1`);
// fourthPromise=fetch(`https://jsonplaceholder.typicode.com/posts/1`);
// fifthPromise=fetch(`https://jsonplaceholder.typicode.com/posts/1`);

Promise.all( [ firstPromise, secondPromise, thirdPromise , fourthPromise, fifthPromise ] )
.then(
    (result) => {`Then Block ${ console.log(result)}` },
)
.catch((error) => { console.log(`Error Handled ${error}`)})
.finally( () => {console.log("FInnaly Block executed")} )



