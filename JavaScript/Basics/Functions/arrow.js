// mostly used as single line function 
// 1. simple with no parametrs
let wish = () => "Hello!";
console.log(wish());

// 2.single paarmeter without parathesis
let square = number => number * number;
console.log(square(3));

// 3. with parameters with paranthesis and single line 
let add = (first, second) => first + second;
console.log(add(2, 3));

//  4. multiline using curly braces
let calculate = (first, second) => {
    let sum =  first + second;
    let multiply = first * second;
    console.log(`Sum : ${sum}, Multiplcation : ${multiply}`) 
}
calculate(5,6);