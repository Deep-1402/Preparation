// 1. Js Program To Print Hello World
console.log(`Hello World`);

// 2.JS Program to add Two Numbers
let num1 = 5, num2 = 6;
console.log(`${num1} + ${num2} : ${ num1 + num2 }`);

// 3. find Square Root of Number
let num = 625;
let sqreRoot = Math.sqrt(num);
console.log(`Square Root of ${num} : ${sqreRoot}`);

// 4. calculate Are Af Triangle
let base = 4, height = 6;
let areaTriangle = ( 1 / 2 ) * ( 4 * 6 );
console.log(`Area Of Triangle : ${areaTriangle}`);

// 5. JS Program TO SWAP Two Variable
let first = "first";
let second = "second";
let temp;
// temp = first;
// first = second;
// second = temp;
[second, first] = [first,second];
console.log(first,second);

// 6. JS program to SOlve Quadratic Equation

// 7. convert km to miles (1km = 0.62 miles)
let km = 24;
let miles = (km * 0.62);
console.log(`${km} km in miles => ${miles}`);

// 8. Js Program  celsius To Fahrenheit( (Celcius * (9/5) ) +32 )
let Celcius = 34;
let fehrenheit = ( ( Celcius * ( 9 / 5 ) ) + 32 );
console.log(`${Celcius} Celcius To Fehrenheit : ${fehrenheit}`);

// 9. generate A RAndom Number
let random = Math.floor(Math.random() * 100);
console.log(`Random Number B/w 0-100 : ${random}`);

// 10. JS to Check Number is Positive Nagative Or Zero
num = -25;
let knowNum = ( num > 0 ) ? "Positive" : ( num == 0 ) ? "Zero" : "Nagative";

// 11. Check Num is Even Or Odd
let oddEven = ( num == 0 ) ? "Zero" : ( num % 2 == 0 ) ? "Even" : "Odd";
console.log(`${num} is ${knowNum} And ${oddEven}`);

// 12. find the largest Among Three
first = 3; second = 5; let third = 6;
let largest = ( first > second && first > third ) ? first : ( second > first && second > third ) ? second : third;
console.log(`${first} : ${second} : ${third} among Largest : ${largest}`)

// 13. JS Program To Check Prime Number
function prime(num){
    let temp=true;
    let ar = [0,1];
    if(ar.includes(num)){
        return `Take Another Number except ${num}`
    }
    for( let j = 2 ; j < num ; j++ ) {
        if ( num % j == 0 ){
            temp = false;
            break;
        }
    }
    // return temp;
    return ( temp ) ?  `${num} is Prime Number.` : `${num} is Not prime Number`;
}
num = 32;
console.log( prime( num ) );

// 14. JS Program To Print All Prime Number in Interval
let start = 10, end = 200;
let primeNumbers = [];
for(let i = start; i <= end; i++ ){

    let temp=true;
    for( let j = 2 ; j < i ; j++ ) {

        if ( i % j == 0 ){
            temp = false;
            break;
        }
    }
    if(temp){
        primeNumbers.push( i )
    }
}
console.log(`${start} to ${end} between Prime Numbers Are  `,primeNumbers)

// 15. Find The Factorial of Number
num = 5;
temp = 1;
for(let i = 1; i <= 5 ; i++){
    temp *= i; 
}
console.log(`Factorial of ${num} : ${temp}`)

// 16. JS to Display Multplication Table
for(let i = 1; i < 11; i++){
    console.log(`${num} * ${i} = ${ num * i}`)
}

// 17. Print Fibonnachi sequence
num = 11;
let fibonnachi = [ 0, 1];
for(let i = 0 ; i < num ; i++ ){
    let length = fibonnachi.length;
    let value = fibonnachi[ length - 1 ] + fibonnachi[ length - 2 ];
    fibonnachi.push(value);
}
console.log(`FIboonachi Squence : `,fibonnachi);

// 18. check Armstrong Number 
function armstrong(num){
    let total=0;
    let stringConvert = num.toString();
    for(let i of stringConvert){
        total+=Math.pow( Number( i ), stringConvert.length );
    }

    return ( total == num ) ?  `${num} is Armstrong Number` : `${num} is Not Armstong NUmber `
}
console.log( armstrong( 407 ) );

// 19. Find Armstrong In Inerval
start = 100, end = 2000;
let armstrongNumbers = [];
for(let num = start; num <= end; num++ ){
    let total=0;
    let stringConvert = num.toString();

    for(let i of stringConvert){
        total+=Math.pow( Number( i ), stringConvert.length );
    }

    if( total == num){
        armstrongNumbers.push( num )
    }
}
console.log(`${start} to ${end} between Armstrong Numbers Are  `,armstrongNumbers);


// 20. make Simple Calculate
first = 3; second = 6; 
let operator = "*";
switch( operator ){
    case "+":
        console.log(`sum : `,first + second);
        break;
    case "-":
        console.log(`Substraction ${first - second}`);
        break;
    case "*":
        console.log(`Multiplication ${first * second}`);
        break;
    case "/":
        console.log(`Division ${first / second}`);
        break;
    default:
        console.log("Give Proper Operator");
} 


// 21. JS Program To Find Sum of N Natural Numbers
end = 20;
temp = 0;
for(let i = 1; i <= 20; i++ ){
    temp += i;
}
console.log(`Sum of First ${end} Numbers is : ${temp}`)

// 22. JS Program tO Check id Number HAve Same Last Digit 
first = 23; second = 33;
let temp1 = first.toString();
let temp2 = second.toString();
if( temp1[ temp1.length - 1 ] == temp2[ temp2.length - 1]){
    console.log(`Both Number ${first} & ${second} have Same Last Digit.`);
} else {
    console.log(`Both Number ${first} & ${second} Didn't have Same Last Digit.`);
}

// 23. JS Program To Find HCF or GCD
first = 11;
second = 16;
let hcf ;
let smallest = Math.min(  first, second  )
for (let num = 1; num <= smallest; num ++) {
    if( first % num == 0 && second % num == 0 ){
        hcf = num;
    }
}

console.log(`${first} and ${second}'s HCF or GCD is : ${hcf}`);

// 24. Js Program To find LCM
first = 25;
second = 625;
let commanFactor = [] ;
smallest = Math.min(  first, second  )
for (let num = 1; num <= smallest; num ++) {
    if( first % num == 0 && second % num == 0 ){
        commanFactor.push( num );
    }
}
let lcm = 1;
for(let num of commanFactor ){
    lcm *= num;
}
console.log(`The LCM of ${first} & ${second} : ${lcm}`,)

// 25. Find The Factors Of Given Number
num = 350;
temp = [];
for(let i = 2; i <= num ; i++ ){
    if( num % i == 0 ){
        temp.push(i);
    }
}
console.log(`The Factors Of ${num} :`,temp)

// 26. Sum of Natural Numbers Using Recursion
function sumNatural(num){
    if ( num > 0 ){
        let total = num + sumNatural( num - 1 );
        return total;

    }else{
        return num;
    }
}
console.log( `sum of First 10 Numbers : ${sumNatural(10)}` );

// 27. Guess A Rendom Number
function guessNumber(){
    let random = Math.floor(Math.random() * 100);
    return random;
}
console.log( `random Number : ${guessNumber()}` )

// 28. JS Program To Shuffle Deacj Of Card
let cards = ["spades", "Diamonds", "club", "Heart"];
let values = ["Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "Queen", "Kng"];
let randomCards = Math.ceil( Math.random() * (cards.length - 1) );
let randomValues = Math.ceil( Math.random() * (values.length -1) );
let randomCard = values[ randomValues ] + " of " + cards[ randomCards ];
console.log(`Random Card : ${randomCard}`);
 
// 29. Display FIbonacci Sequance Using Recursion
function fibonnachiRecursion( num, first=0, second=1 ){
    
     if( num > 2 ){
        return fibonnachiRecursion( num - 1 ) + fibonnachiRecursion( num - 2 )
     }
        return num;
     
}
// console.log(fibonnachiRecursion( 10 ))

// 30. FInd A Factorial Using Recursion Function
function factorial( num ){
    if(num > 0){
        return  num * factorial(num - 1);
    }else if( num == 0 ){
        return 1;
    }else{
        return "ENter Positive Number";
    }
}
num = 6;
console.log(`Factorial of "${num}" Using Recursion function :`,factorial(num))

// 31. JS Program TO convert Decimal TO Binary
function decimalBinary( num ){
    let binary = [];
    while( num >= 1 ) {
        binary.unshift( num % 2 );
        num = Math.floor( num / 2 )
    }
    return binary;
    
}
num = 101;
let binary = decimalBinary( num );
console.log(`The Binary Of "${num}" is : `,...binary);


// num = 16;
// let convertedBinary = decimalBinary(num);
// console.log(`Binary Numeber of DIgit ${num} :- `, ...convertedBinary );

// 32. JS Program to find Ascii Value of Character
let char = "D";
let asciiValue = char.charCodeAt(0);
console.log(`Ascii Value of ${char} : ${asciiValue}`);


// 33. Check Whether String Is Palindrom or not
let str = "Madam";
str = str.replace(" ","").toLowerCase();
let reversedStr = "";
for(let i = (str.length - 1) ; i >= 0; i-- ){
    reversedStr += str.charAt(i)
}
if(str === reversedStr ){
    console.log(`"${str}" is Palindrom String`)
}else{
    console.log(`"${str}" is Not Palindrom String`)
    
}

// 34. sort Word in Alphabetical Order
str = "Dadicated MERN Dev Stack Developer Dev.";
let arr = str.split(" ").sort();
console.log(`Sorted Words By Alphabetically : `,...arr)

// 35. JS Program Replace Charaters of a string
let replacedStr = str.replaceAll("Dev","Deep");
console.log(`Replaced String : ${replacedStr}`)


// 36. Js Program To Reverse String
reversedStr = "";
for(let i = (str.length - 1); i >= 0; i--){
    reversedStr += str[i];
}
console.log(`Reversed String : "${reversedStr}"`);

// 37. Create Object In Differnt Way
let obj = {
    firstName : "Dev",
    lastName : "Patel",
    age : 23,
};

let obj2 = new Object();
obj2.firstName = "Dev";
obj2.lastName = "Patel";
obj2.age = 23;

class anotherObject{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
  
let obj3 = new anotherObject("Dev", "Patel", 23);
let obj4 = new anotherObject("Dev1", "patel", 35);
console.log(obj, obj2, obj3, obj4);

// 38. JS Program to Check Number Of Occurances of Charcter in a string
let character = "D";
let count = 0;
for(let char = 0; char < str.length; char ++){
    count += ( str.charAt( char ) == character ? 1 : 0 );
}
console.log(`"${character}" : Occured at ${count} in "${str}"`);

// 39. JS Program To COnvert First Letter Of String Into UppperCase
str = str.toLowerCase().split(" ");
let convertedStr = [];
for(let word of str){
    let firstCharacter = word.charAt(0);
    word = word.replace(firstCharacter, firstCharacter.toUpperCase());
    convertedStr.push( word );
}
console.log(`"`,...str , `" Every Words First Character Converterd To UpperCase : `, ...convertedStr);

// 40. JS Program to COunt The Number of Voels in String
str = "Dadicated MERN Dev Stack Developer Dev.";
let vowel = ["a", "e", "i", "o", "u"];
count = 0;
for(let char of str.toLowerCase() ){
    count += ( vowel.includes( char ) ) ? 1 : 0;
}
console.log(`In String "${str}" Total VoWels : ${count} `)


// 41.  JS Program To Remove Property From An Object
console.log( obj.age );
delete obj.age;
console.log(`Object Property Deleted `)

// 42. JS Program to check whether String Ends With Certain Character
chr = "v";
str = "My name is Dev";
let lastChar = str.charAt( (str.length - 1) ).toLowerCase();

// 43. JS Program To Check Key Exist In An Object
let exists = obj.hasOwnProperty("firstName");
console.log( `in Object key = "firstName"  Exists : ${exists}` );


// 44.JS program To Clone A JS Object
let dev = { 
    name: "Deep", 
    age: 20, 
    designation: "MERN Stack Developer", 
    companey: "Netclues", 
    startYear:2000, 
    endYear:2010
};
let clonedObj_deepCopy = {};
let clonedObj_shallowCopy = dev;
let keys = Object.keys(dev);
for(let key of keys){ //for(let key in dev )
    clonedObj_deepCopy[ key ] = dev[ key ];
}
console.log(dev,clonedObj_deepCopy,clonedObj_shallowCopy);

// 45. JS Program TO Loop Trough an Object
for(let key in obj){
    console.log(` ${key} => ${obj[key]}`);
}

//  46. Merge Two or More Objects 
obj2 = { "one" : 1, "two" : 2, "three" : 3};
obj3 = { "five" : 4, "six" : 6};
let mergedObj = { ...obj, ...obj2, ...obj3}
// mergedObj = Object.assign( obj, obj2, obj3)
console.log(mergedObj);

//  47. JS Program to count number of key and Propr=erty in Object
count = 0;
// first for in loop
for(let key in obj){
    count+=1;
}

//  48. JavaScript Program to Add Key/Value Pair to an Object
obj.first = "first";
obj[second] = "Second";

// 49. JS Program to replace All occurance of String
replacedStr = str.replaceAll("Dev","Deep");
console.log(`Replaced String : ${replacedStr}`)

// 50. Js Program to Create Multiline Strings
str = `I am Deep
        Mern Stack Developer`;
console.log(str);

// 51. Js Program to format number as Currency String
const price = 14340;
console.log(new Intl.NumberFormat().format(price));

// 52. Js program To Gnerate Random String
let characters = "abcdefghijklmnopqrstuvwxyz";
let randomStr = "";
length = characters.length;
for(let i = 0; i < 10; i++){
    randomStr += characters.charAt( Math.random() * length ) 
}
console.log(`Random String : ${randomStr}`);

// 53. JS program tocheck if string starts with another string
str = "MERN Dev Stack Developer Dev.";
word = "MERn";
str = str.split(" ");
if( str[0].toLowerCase() === word.toLowerCase()){
    console.log("First Word Matcheed");
}else{
    console.log("Not Matched")
}

// 54. JS program to trim A STring
string = "  Dev     ";
let trimmedStr = string.trim();
console.log(`Original Str "${str}" : Trimmed str "${trimmedStr}"   `)

// 55. convert Object to String
convertedStr = JSON.stringify(obj);
console.log(obj , `Converted inro str ${convertedStr}`);

convertedstr = "";
for(let key in obj){
    convertedStr += `${key} : ${obj[key]}, `
}
console.log(obj , `Converted inro str ${convertedStr}`);

// 56.WHether Str Contains Substr
str = "Dadicated MERN Dev Stack Developer Dev.";
substr = "MERn";
if( str.toLowerCase().includes(substr.toLowerCase()) ){
    console.log( `String "${str}" contains substring "${substr}"` );
}else{
    console.log("It dosent include substr");
}

// 57. JS program to compare Two String
str = "Dadicated MERN Dev Stack Developer Dev.";
str2 = "Dadicated MERN Dev Stack Developer Dev.";
if( str.toLowerCase() == str2.toLowerCase()) {
    console.log( `Str Matched"` );
}else{
    console.log("Str Dosent MAtched");
}

// 58. JavaScript Program to Encode a String to Base64

// 59. JS Program to Replace all Instances of a Character in a String
str = "Dadicated MERN Dev Stack Developer Dev.";
replacedStr = str.replaceAll("D","Z");
console.log(`Char "D" replced With "Z" Replaced String : ${replacedStr}`)

// 60. JavaScript Program to Replace All Line Breaks with
str = `Dadicated MERN
Dev Stack 
Developer Dev.`;
replacedStr = str.replaceAll("\n","WWW");
console.log(` original :"${str}": \\n replced With "D" Replaced String : ${replacedStr}`)

// 61. JS Program To display Date and Time
let DateTiem = new Date();
console.log("Current Date and Time:", DateTiem.toString());

// 62. Js Program To check Leap Year
let year = 2024;
let leap = ( year % 4 == 0 ) ? `${year} is Leap Year` : `${year} Is not a Leap Year`
console.log(leap);

// 63. Js Program To formar The Date
// 64. JS Program To Display Current Date
let getDate = DateTiem.getDate().toString();
let getMonth = DateTiem.getMonth().toString();
let getYaer = DateTiem.getFullYear().toString();
console.log(`${getDate}/${getMonth}/${getYaer} `)

// 66. Js Progra, To Create CountDown Timer
// 67. JS Program To Remove Specif Item From Array
let stringArray = [ "Hera Pheri", "Chup Chup ke", "Welcome", "De Dana Dan" ,"Bhagm BHag", "Khatta Meetha", "HouseFUll"];
let value = "Bhagm BHag";
let IndexofValue = stringArray.indexOf(value);
stringArray.splice(IndexofValue, 1);
console.log( `Value "${value}" found at indecx "${IndexofValue}" Upgrade stringArray : `,stringArray)

// 68. JS program check id=f Array contains Specific Value 
value = "De Dana Da";
let ifIncludes = stringArray.includes( value );
console.log( `value "${value}" : includes : ${ifIncludes}`)

// 69. Js Program to Insert item in an Array
stringArray.push( "Bhagm BHag" );
stringArray.unshift("Golmal");
stringArray[stringArray.length] = "Bahubali";
console.log(stringArray)

// 70. Js Program To Append an objevt to array
stringArray.push( obj2 );
console.log(stringArray)

// 71. JS program to check is Object is an array
if( Array.isArray(stringArray) ){
    console.log(`it is an array`)
}else{
    console.log("it is not")
}

// 72. Js Program To Empty an Array
let cloneArray = stringArray;
// cloneArray = [];
cloneArray.splice(0,cloneArray.length)

// 73. JS Program To Add Elemt to Start of array
stringArray.unshift( "Unshift" );

// 74. Js Program To Remove Duplicate From Array
stringArray = [ "Hera Pheri", "Chup Chup ke", "Chup Chup ke", "Welcome","Welcome","Welcome", "De Dana Dan" ,"Bhagm BHag", "Khatta Meetha", "HouseFUll"];

let removeDuplicate = [... new Set(stringArray)];
console.log(removeDuplicate)

// 75. Js Progran To Merge Two array and Remove Duolicate Items
arr = [ ... arr, ...stringArray];
removeDuplicateArr = [... new Set(arr)]
console.log(removeDuplicateArr);

// 76. Js Program To Sort Array Of Object y Property VAlue
dev = [
    { name: "Deep", age: 20, designation: "MERN Stack Developer", companey: "Netclues", startYear:2000, endYear:2010 },
    { name: "Ujjavl", age: 23, designation: "Dot Net Developer" , companey: "IBM", startYear:2002, endYear:2008 },
    { name: "Jigo", age: 18, designation: "MERN Stack Developer" , companey: "Excelsier", startYear:2012, endYear:2015}, 
    { name: "ketul", age: 27, designation: "Data Scirntist" , companey: "Accuenture", startYear:1999, endYear:2014},
    { name: "Neel", age: 22, designation: "Data Scirntist" , companey: "TCS", startYear:2010, endYear:2014},
];

dev.sort( (first, second) => {
    if(first.designation > second.designation){
        return 1
    }else if( first.designation == second.designation){
        return 0
    }else{
        return -1
    }
})
console.log(`Sorted bY Designation `);
console.log(dev)

// 77. Js Program To Create TWo Dimention Array
let multidimentionalArray = [];
multidimentionalArray.push([1,2,4],[5,6,7],["Dev","Hridayam"])
console.log(multidimentionalArray);

// 78. JS Program To Extract Given Property Values Form Objects AS Array

// get only employee name
let emplyeeNames = dev.map( (item) => item.name );
console.log(`Here Are Only Emplyee `,emplyeeNames)

// 79. JS Program Compate Elemnts Of Two Arrays
arr = [1,4,6,7,3,5];
arr2 = [3,5,67,8,53,2];
if(arr.length == arr2.length){
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] != arr2[i]){
            console.log("Both Have Diffrent Elemts")
            break;
        }
    }
}else{
    console.log("Both Have Diffrent Elemts")
}

// 80. Get random Values From Array
randomValues = stringArray[ Math.floor( Math.random() * stringArray.length ) ]
console.log( `Random Values From Array : ${randomValues}`)

// 84. Js Program To get File Extention
let file = "Dev.js";
let extention = file.substring( file.indexOf("."), file.length );
console.log(`"${file}" extention is : ${extention}`)

// 85. JS Program To Check Of Variable Is Undefined Or Null
// let variable; 
let variable = null,undefinedVar; 
if (undefinedVar === undefined || variable === null) {
    console.log("The variable undefined or null.");
  } else {
    console.log("The variable not undefined ,null.");
  }

// 86. JS program to Set defulat Parameter To function
function devInfo(name = "Deep", age = 23){}

// 88. JS Program To Genrate Number B/w Two Numbers
let max = 50, min = 40;
// randomValues = Math.floor( Math.random() * min ) + (max-min);
// console.log(`Random Value B/w ${min}-${max} : ${randomValues}`)

// 91. JS Program to check if variale is of Functin type
variable = function (){};
console.log(`Data type Is : ${typeof(variable)}`);

// 92. JS Program To Work With Constants
const pi = 3.14;
const devInfos = ["Dev", 23, "male"];
const objDev = { name: "deep" , age : 23, gender : "Male"};
objDev.age = 24;
// with  non primitive you can chage property but cant cange datatype  
devInfos.push("Hridayam");
console.log(objDev,devInfos)
// Gives Error While Reassigning in primitive
// pi = 3.1451;

// 93. JavaScript Program to Pass Parameter to a setTimeout() Function
// parameters setTimeout( callback( name, age, gender ), delay(miliseconds), para1(name), para2(age), para3(gender)... )
setTimeout(
    ( name, age ) => { console.log(`name : ${name}, age : ${age}`)},
    2000,
    "Deep", 23
)

// 98. Js Program To Cjeck Var is Float Or Integer
let numVar = 20.3; 
let type = typeof numVar ;
let know = ( Number.isInteger( numVar ) ? "It is Integer" : ( type == "number") ? "It Is Float" : "It is Not Float nor Number")
console.log(know)

// 99. Js Program Ti Pass Function as parameter
function collegeInfo(collage,course,callback){
    callback();
    console.log(`Studied ${course} at ${ collage}`)
}

function Dev(){
    let name="Deep";
    let age=23;
    console.log(`${name} and age : ${age} `);
}

function ujjval(){
    console.log(`Ujjval ANd Age: 30`);
}

console.log(collegeInfo("Sardar Patel University","MCa",Dev))
console.log(collegeInfo("Sardar Patel University","MCa",ujjval))

// 101. Js Program Remove All WhiteSpace From Text
str = " Dev Pat el     .     "; 
console.log(str.replaceAll( " ", "") );

// 102. JS Progran To Write to console
console.log()

// 103. Js Program to convert Date to number
let date = new Date();
let numericDate = Number(`${date.getFullYear()}${date.getMonth()}${date.getDay()}`);
console.log(numericDate);