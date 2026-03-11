let str = "Dedicated MERN Stack Devloper";
let str1 = "the First one is to decalred and Second one be Missing.      ";

let strLength = str.length;
console.log(`String length is  ${strLength}`);

let indexedChar = str.at(10);
console.log(`At index 10 character is : ${indexedChar}`);

// iterate with for because string is charater array
for(let char of str){
    console.log(char);
}

console.log(str.toUpperCase(),str.toLowerCase());

// find the first occurance of word with indexOf(word, fromIndex)
let first = str1.indexOf("one",1);
let second = str1.indexOf("one",12);
console.log(`Word "one" apperrd first : ${first} index and second time at : ${second} index`);


let ifIncludes = str.includes("MERN",0);
console.log(`string "${str}" includes Word "MERN" : ${ifIncludes}`);

// slice string str.slice(startIndex [,endIndex])
let slice = str.slice(10,17);
console.log(`sliced String : ${slice}`)

// substring is just like string but you can alternate the arguments and it take lower as first and highr as second parameter
let substr = str.substring(17,10);
console.log(`sliced Substring : ${substr}`);

// substr(index, length);
console.log(`Slice Substr : ${str.substr(10,17)}`)

// gives Ascii value of the character
let asciiValue = "D".charCodeAt(0);
console.log(`Ascii Value of "D" : ${asciiValue}`);

// get Charater from Ascii Value you can give array of ascii values
let char = String.fromCharCode(68);
console.log(`68 Ascii Value char is : ${char}`);

// string Comaprison str1.localeCompare(str2) 
// "-1" if str is less than str2, "+1" is str1 is greater than str2, "0" if Equal
console.log("MERN".localeCompare("mern"));

// replace(findWord,repcace Word); only first find will replace with str.replaceAll(findword, replaceword)
let replacedStr = str1.replace("one","two");
console.log(`replaced string : ${replacedStr}`)

// trim(value) removes extra White Space
console.log(str1.trim())

// join two Or more String str1.concat(str2, str3, ..., strn)
let mergedString = str.concat(str1," Dev",", Hridyam")
console.log(`Merged String ${mergedString}`);

// string to array conversion withh delimeter
// str.split(",");
let strArray = str.split(" ");
console.log(strArray);

// padd as tr or text to srt
let paddedText = str.padStart(10, "*");
console.log(paddedText)