// Spread Syntax
// It Expanmds The Array into saparate Arguments(elements)

// First Example
let numbers = [1,3,4,5,67,8,9,0,75,5,3,5,333,-333];
let maxFromNumers= Math.max(...numbers);
console.log(maxFromNumers);

// For Concate Two or more Array WIthout Build In Methods
let firstArray = [3,5,6,7,8,9,7,9];
let secondArray = [28,24,36];
let thirdArray = [128,343,465];
let mergedArray = [ ...firstArray, ...secondArray, ...thirdArray];
console.log(`Merged Array : ${mergedArray}`);
console.log(mergedArray);

// Get Characters From String
let temp = "Deep Patel";
console.log(...temp);