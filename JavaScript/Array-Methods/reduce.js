// array.reduce( function( accumulator, item, index, array) {}, defaultValueOfAccumulator)
// accumulator : temporatry varibale (in loops sum which iterates over time and gives final sum) 
// defaultValueOfAccumulator : at first iteration accumulatr var value if not defined then it takes first element that iterates.
// reduce used to to sum of numbers or some kind of final value which contans all elelmets opetaion

let dev = [
    { name: "Deep", age: 20, designation: "MERN Stack Developer", companey: "Netclues", startYear:2000, endYear:2010 },
    { name: "Ujjavl", age: 23, designation: "Dot Net Developer" , companey: "IBM", startYear:2002, endYear:2008 },
    { name: "Jigo", age: 18, designation: "MERN Stack Developer" , companey: "Excelsier", startYear:2012, endYear:2015}, 
    { name: "ketul", age: 27, designation: "Data Scirntist" , companey: "Accuenture", startYear:1999, endYear:2014},
    { name: "Neel", age: 22, designation: "Data Scirntist" , companey: "TCS", startYear:2010, endYear:2014},
];

// find total age
let totalAge = dev.reduce( ( accumulator , item ) => accumulator + item.age , 0)
console.log(`Total Age : ${totalAge}`);

//  