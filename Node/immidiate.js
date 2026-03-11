let timer = 0;
console.log("root");

setTimeout(  () => console.log("T 1!") ,timer);
setImmediate( () => console.log("I1"))

setTimeout(() => {
    setTimeout( () => console.log("T 3!"), timer);
    setImmediate( () => console.log("I2"))

    console.log("T 2");
    
}, timer);

console.log("root2");

/*
root
root2
I2
T 1!
T 2
I2
T 3!
*/