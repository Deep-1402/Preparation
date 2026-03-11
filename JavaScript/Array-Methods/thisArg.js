// thisArg
// In most of all Array Methods That have Callbacks like arr.filter(callback, thisArg), arr.filter(callback, thisArg) , arr.map(callback, thisArg) have "thisArg" as Seconnd Argument
// thisArg is Rarely Used Parameter 
// but When It is used Then You Have To Specify the Conditions In Object as key:value pair and use conditions in filter callback using this.key 

let years = [ 1972, 1872, 1990, 1999, 2002, 2016, 2025, 2010, 2100, 2200 ];

const conditions = {
    startYear : 1980,
    endYear : 2025,
    divisor : 5
};

let filteredArray = years.filter( function ( year ) {
    // console.log(`${year} : start ${this.startYear} : ${this.endYear}`)
    return year >= this.startYear && year <= this.endYear && year % this.divisor == 0
} , conditions); 

console.log("Original Array",years,"conditions",conditions);
console.log("Filterd Array",filteredArray);

// --------------------------------------------------------------------------------------------------------------------

let dev = [
    { name: "Deep", age: 20, designation: "MERN Stack Developer", companey: "Netclues", startYear:2000, endYear:2010 },
    { name: "Ujjavl", age: 23, designation: "Dot Net Developer" , companey: "IBM", startYear:2002, endYear:2008 },
    { name: "Jigo", age: 18, designation: "MERN Stack Developer" , companey: "Excelsier", startYear:2012, endYear:2015}, 
    { name: "ketul", age: 27, designation: "Data Scirntist" , companey: "Accuenture", startYear:1999, endYear:2014},
    { name: "Neel", age: 22, designation: "Data Scirntist" , companey: "TCS", startYear:2010, endYear:2014},
];

// employee Who Started Working after 2005 and Age is greater than 21 
let devConditions = {
    age : 21,
    startYear : 2005,
};
let filterdEmployee = dev.filter( function (item) {
    return item.age > this.age && item.startYear > this.startYear, devConditions  
} );
console.log(`Employee Who Started Working After 2005 and his/her age more than 21 : `, filterdEmployee );
