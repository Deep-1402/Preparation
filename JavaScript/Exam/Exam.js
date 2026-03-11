//(D)2. String & Array Methods
// 1. Write a function to reverse each word in a sentence but not the word order.
// let string = "Hello World";
// let stringArray = string.split(" ");
// let reverseString = [];
// for(let word of stringArray){
//     let w="";
//     for(let char=(word.length - 1); char >= 0 ; char --){
//         w+=word.at(char);
//     }
//     reverseString.push( w )
// }
// reverseString = reverseString.join(" ");
// console.log(reverseString)
// -------------------------------
// // 2. arr = [1, 2, 3, 4, 5];
// let arr = [1, 2, 3, 4, 5];
// // Remove 3
// arr.splice( arr.indexOf(3) , 1);
// console.log(`Removed Elemet 3 ${arr}`)
// // Add 6 at end
// arr.push(6)
// console.log(`Element Inserted 6 at ENd ${arr}`)
// // Double every number
// let doubleArr = arr.map( item => item * 2 );
// console.log(`Doubled Evevry Elemebt ${doubleArr}`)
// // Find sum using reduce
// let sum = arr.reduce( ( accumulator, item ) => accumulator + item, 0 );
// console.log(`Sum  Of Elemnts : ${sum}`)
// // console.log(sum)

// -----------------------------------------------------------

// (D)3.Promises with Real Life Scenario
// Task:
// Simulate the following:
// User logs in (1s)
// Fetch profile (2s)
// // Fetch orders (3s)
// let promise1 = new Promise( ( resolve, reject) => {
//     setTimeout( () => {
//         resolve("bashCopyEditLogging in...");
//     }, 1000 );
// } ).then( (data) => console.log(data));
// let promise2 = new Promise( ( resolve, reject) => {
//     setTimeout( () => {
//         resolve("Fetching profile...");
//     }, 2000 );
// } ).then( (data) => console.log(data));;
// let promise3 = new Promise( ( resolve, reject) => {
//     setTimeout( () => {
//         resolve("Fetching orders....");
//     }, 3000 );
// } ).then( (data) => console.log(data));;
// async function dev(){
//     await promise1;
//     await promise2;
//     await promise3;
//     console.log("All Done!")
// }
// dev()

// ------------------------------------------------------

// (D)4.type Coversion Challange
// Task: Convert and validate user input from form (simulate with variables):
// const age = "25";
// const isStudent = "false";
// const price = "123.45";
// // age becomes number
// console.log( typeof parseInt(age) )
// // isStudent becomes boolean
// console.log( typeof Boolean(isStudent) )
// // price becomes float
// console.log( typeof Number(price) )

// ---------------------------------------------------------

// (D)5.FizzBuzz with a Twist
// Task:
// Print numbers 1 to 50. But:
// If divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both → print "FizzBuzz"
// If number is prime → add * after it (e.g. 7*

// function fizzBuzz() {
//     for(let i = 1; i <= 50 ; i++ ){
//         let num = ( i % 3 == 0 && i % 5 == 0 ) ? "FizzBuzz" : (  i % 3 == 0 ) ? "Fizz" : (  i % 5 == 0 ) ? "Buzz" : ( prime( i ) != false ) ? prime(i) : i;
//         console.log( num )
//     }
// }
// function prime( num ) {
//     if( num > 1 ){
//         let temp = true;
//         for(let i = 2; i < num; i++){
//             if( num % i == 0 ){
//                 return false
//             }
//         }
//         if( temp ){
//             return `${num}*`
//         }
//     }else{
//         return false;
//     }
// }
// fizzBuzz()

// -------------------------------------------------------------

//(D) Anagram Checker
// // Task: Write a function to check if two strings are anagrams of each other.
// //("listen", "silent") // true areAnagrams("hello", "world")   // false

// function anagram( firstWord, secondWord ){
//     let first = firstWord.split("");
//     let second = secondWord.split("");
//     let check = true;

//     for(let char of second){
//         if( !first.includes( char ) ){
//             return false;
//         }
//     }
//     return check;
// }

// console.log( anagram("dev", "vvvvved") )

// ---------------------------------------------------------

// (D) Sum of Digits Until One Digit
// Task:
// jsCopyEditInput: 9875 → 9 + 8 + 7 + 5 = 29 → 2 + 9 = 11 → 1 + 1 = 2 Output: 2

// function sumOfDIgits( num ){
//     let length = num.toString().length;
//     if( length >= 2 ){
//         let temp = num.toString();
//         let sum = 0;
//         for(let num of temp){
//             sum += Number(num)
//         }
//         sumOfDIgits(sum)
//         // console.log("s:",sumOfDIgits(sum))
//         // sumOfDIgits(sum)
//         // let temp = num.toString().split("");
//         // let sum = Math.sum(...temp)
//         // console.log(temp)
//     }else if (length == 1){
//         console.log(num);
//     }
// }
// sumOfDIgits( 9875 )

// ---------------------------------------------------------------------

//(D) Remove Duplicate Characters
// Task:Write a function to remove duplicate characters from a string.
// jsCopyEditInput: "programming" Output: "progamin"

// function removeDuplicate( str ){
//     let result = [];
//     for(let char of str.toLowerCase()){
//         if(!result.includes(char)){
//             result.push(char)
//         }
//     }
//     return result.join("");
// }
// console.log( removeDuplicate("DDDdeeeeevvv") )

// -------------------------------------------------------

//(D) Flatten Nested Array Without .flat()
// Task:
// jsCopyEditconst arr = [1, [2, [3, [4]], 5]];flattenArray(arr); // [1, 2, 3, 4, 5]

// function flattenArray(arr){
//     let flat = [];
//     for(let element of arr){
//         ifArray(element)
//     }
//     function ifArray(ele){
//         if( Array.isArray(ele) ){
//             for(let i of ele ){
//                 ifArray(i)
//             }
//         }else{
//             flat.push(ele);
//         }
//     }
//     console.log(flat);
// }
//  arr = [1, [2, [3, [4]], 5]];
//  flattenArray(arr);

// ----------------------------------------------------------------

//(D) Loops + Date Functions
// Task:Write a function that prints the next 7 days from today’s date in format:
// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// for(let i=1; i<=8;i++){
//     if( day == 32){
//         day = 1;
//         month += 1;
//         if( month == 13){
//             year += 1;
//             month = 1
//         }
//     }else{
//         day += 1;
//     }
//     console.log(`${ day }/${month}/${year}`)
// }

// -----------------------------------------------------------------------

// (D)2. Sync vs Async + Promises + async/await
// Task: Create a function fetchUserData(userId) that:
// Returns user data after 2 seconds (simulate with setTimeout)
// Use both Promise chaining and async/await in separate examples

// // // async/awit
// async function fetchUserData(userId){
//     let data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     let dev = await data.json();
//     console.log(data);
// }
// fetchUserData(2)

// // // //prmise

// function fetchUserData(userId){
//     let data = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     data.then(
//             (response)=>{ return response.json() }
//         ).then(
//              (result) => console.log(result)
//             );
// }
// fetchUserData(1)

// ----------------------------------------------------------------------------------------

//(D) Sorting by Custom Logic
// // Task:Sort the following array of strings based on the number of vowels (descending).
// // jsCopyEditInput: ["hello", "hi", "world", "aeiou"]Output: ["aeiou", "hello", "world", "hi"]

// function vowelCount(word){
//     let voewls = [ "a", "e", "i", "o", "u" ];
//     let count=0;
//     for(let char of word){
//         if( voewls.includes(char) ){
//             count += 1;
//         }
//     }
//     return count;
// }

// function sortVowel(){
//     let arr = ["hello", "hi", "world", "aeiou"];
//     for(let key in arr){
//         for(let all in arr){
//             // console.log( `${arr[ key ]} : ${vowelCount( arr[ key ]}   =>   ${arr[ all ]} : ${vowelCount( arr[ all ] )}` )
//             if( vowelCount( arr[ key ] ) >= vowelCount( arr[ all ] ) ){
//                 [ arr[ key ], arr[ all] ] = [ arr[ all ], arr[ key ] ]
//             }

//         }
//     }
//     console.log(arr)
// }

// sortVowel()

// ----------------------------------------------

// (D)// Create a counter function using closures which:
// Increments by 1 // Can reset to 0 // Can return current count
// const counter = createCounter();
// counter.increment(); // 1counter.increment(); // 2counter.get();       // 2counter.reset();     // 0

// function createCounter(){
//     let counter = 0
//     function increment( ){
//         counter += 1;
//     }
//     function reset(){
//         counter = 0;
//     }
//     function get(){
//         console.log(counter);
//     }
//     return {increment,reset,get}
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter2.get();
// counter2.increment();
// counter2.increment();
// counter2.get();
// counter1.get()

// -------------------------------------------------------------

// (D)//Spiral Matrix Traversal
// Task:
// Print a 2D matrix in spiral order.
// jsCopyEdit[
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// function spiral() {
//   let multi = [
//     [1, 2, 3,13],
//     [4, 5, 6,14],
//     [7, 8, 9,15],
//     [10, 11, 12,16],
// //   ];
// let multi = [
//      [1, 2, 3, 4, 5],
//      [6, 7, 8, 9, 10],
//      [11, 12, 13, 14, 15],
//      [16, 17, 18, 19, 20],
//      [21, 22, 23, 24, 25],
//     ]
//   let spiral = [];
//   while (multi.length) {
//     // //top
//     for (let i = multi[0].length - 1; i >= 0; i--) {
//       if (multi[0][0] != "undefined") {
//         spiral.push(multi[0].shift());
//       }
//     }

//     // //Rightside
//     for (let rightside of multi) {
//       if (rightside[rightside.length - 1] != undefined) {
//         spiral.push(rightside.pop());
//       }
//     }

//     // // bottom
//     for (let i = 0; i < multi.length - 2; i++) {
//         // console.log("dev :",spiral)
//       spiral.push(multi[multi.length - 1].pop());
//     }

//     // // leftSide
//     for(let leftside = (multi.length - 1) ; leftside >= 0 ; leftside --){
//         if( multi[leftside].length ){
//             spiral.push( multi[leftside].shift() )
//         }
//     }

//     // // remove empty form multi array
//     for (let ele of multi) {
//       if (!ele.length) {
//         multi.splice(multi.indexOf(ele), 1);
//       }
//     }
//   }
//   console.log(spiral);
// }
// spiral();
// 