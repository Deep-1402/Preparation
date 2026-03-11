// // => Promise.any([promise1,promise2,...,promisesN]);
// //takes array of promises and retums fastest and successfull  only one resolved values
// // if all Are Rejected then returns AggregateError: All promises were rejected

// //Below Exmple Third one and forth one Executing at exactly one second but third is rejected and forth is not so Forth Promise is returned
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
        resolve("Fifth One is Resolved"),2000
    );
});

Promise.any( [ firstPromise, secondPromise ,thirdPromise ,  fourthPromise, fifthPromise ] )
.then(
    (result) => { console.log(result) },
)
.catch((error) => { console.log(`Error Handled ${error}`)})
.finally( () => {console.log("FInnaly Block executed")} )
// let dev = (a) => {
//   return;
// };
// let promise = dev([
//   () => Promise.resolve("First API call!"),
//   () => Promise.resolve("Second API call!"),
// ]);
// if (promise) {
//   promise
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
// }
