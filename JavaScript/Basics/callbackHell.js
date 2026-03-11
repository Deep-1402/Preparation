//  Callback Hell And Pyramid of Doom
// nested Callback Added So its hard to understand and debugging
// to solve callback hell we use promises and Async-await

function callbackFunction1(callback) {
    setTimeout(() => {
        console.log("callback Function 1 Done");
        callback();
    }, 2000);
}

function callbackFunction2(callback) {
    setTimeout(() => {
        console.log("callback Function 2 Done");
        callback();
    }, 2000);
}

function callbackFunction3() {
    setTimeout(() => {
        console.log("callback Function 3 Done");
    }, 2000);
}


callbackFunction1( 
    () => {
        callbackFunction2(
            () => { 
                callbackFunction3(); 
            } );
    }
);


