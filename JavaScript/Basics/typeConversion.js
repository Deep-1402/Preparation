// String Coversion
// using String()
let originalVar=26;
let convertedVar = String(originalVar);
console.log(`Oringinal value : ${originalVar} : type is : "${typeof originalVar}" then converted into "${ typeof convertedVar}"`);

// using val.toString()
originalVar=26;
convertedVar = originalVar.toString();
console.log(`Oringinal value : ${originalVar} : type is : "${typeof originalVar}" then converted into "${ typeof convertedVar}"`);


// Numeric Conversion
// using Number(value) 
// In string conversion Whitespace and Space Is Remmoved
originalVar="   26    ";
convertedVar = Number(originalVar);
console.log(`Oringinal value : ${originalVar} : type is : "${typeof originalVar}" then converted into "${ typeof convertedVar} && Value : ${convertedVar}"`);


originalVar=true;
convertedVar = Number(originalVar);
console.log(`Oringinal value : ${originalVar} : type is : "${typeof originalVar}" then converted into "${ typeof convertedVar}  && Value : ${convertedVar}"`);

// using parseInt(value)
originalVar="26Hrid";
convertedVar = parseInt(originalVar);
console.log(`Oringinal value : ${originalVar} : type is : "${typeof originalVar}" then converted into "${ typeof convertedVar} && Value : ${convertedVar}"`);


// Boolean Conversion
// using Boolean(value)
// values like 0, null,undefined,NaN converted to false and other ones true
stringVar="Dev";
numberVar=123;
othervar="";
console.log(`${stringVar} => ${Boolean(stringVar)} and ${numberVar} => ${Boolean(numberVar)} and ${othervar} => ${Boolean(othervar)} .`);


// Extract Values form object using val.valueOf()
let numObj = new Number(123.44);
let strObj = new String("Dev");
let boolObj = new Boolean(true);
console.log(`${numObj.valueOf()} , ${strObj.valueOf()}, ${boolObj.valueOf()}`)

// obj to array conversion
//only values
let obj = { name:"deep", age:23, gender:"male" };
let convertedArray = Object.values(obj);
console.log(`${obj} : ${typeof obj} COnverted into array : ${Array.isArray(convertedArray)} value array: ${convertedArray}`)

//only keys
convertedArray = Object.keys(obj);
console.log(`${obj} : ${typeof obj} COnverted into Array : ${Array.isArray( convertedArray)} value : ${convertedArray}`)

//Both key and value as Multidimentional Array
convertedArray = Object.entries(obj);
console.log(`${obj} : ${typeof obj} COnverted into Array : ${Array.isArray( convertedArray)} value : ${convertedArray}`)



// array to object conversion
// spread syntax
let arr = ["deep", 23, "male" ];
let convertedObj = { ...arr };
console.log(arr,` converted into ${typeof convertedObj } :`,convertedObj)