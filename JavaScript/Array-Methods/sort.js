// sort( (a,b) ): (a=second elemnt, b=first element) used to determine the order of the elements , "a-b" if you want ascending and "b-a" if you want decendinf order  . 
// returns -1 then "a" will goes before "b"
// returns 0 if wont change place
//  returns +1 then "b" goes before "a"
// it iterates an array and returns the reference of same array (Changes Refleacts On Original)

let dev = [
    { name: "Deep", age: 20, designation: "MERN Stack Developer", companey: "Netclues", startYear:2000, endYear:2010 },
    { name: "Ujjavl", age: 23, designation: "Dot Net Developer" , companey: "IBM", startYear:2002, endYear:2008 },
    { name: "Jigo", age: 18, designation: "MERN Stack Developer" , companey: "Excelsier", startYear:2012, endYear:2015}, 
    { name: "ketul", age: 27, designation: "Data Scirntist" , companey: "Accuenture", startYear:1999, endYear:2014},
    { name: "Neel", age: 22, designation: "Data Scirntist" , companey: "TCS", startYear:2010, endYear:2014},
];

let numberArray = [40, 100, 1, 5, 25, 10];
console.log(`Ascending : ${numberArray.sort( (a,b) => a-b)}`);
console.log(`Decending : ${numberArray.sort( (a,b) => b-a)}`);

// Sort By age
dev.sort( ( first, second) =>{
    if( first.age > second.age){
        return 1
    }else{
        return -1
    }
});
console.log(`Sorted bY Age `);
console.log(dev)
console.log()

// sort by desigation
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
console.log();


// sort by startYear 

dev.sort( ( first, second ) => {
    if( first.startYear > second.startYear ){
        return 1
    }else if( first.startYear == second.startYear ){
        return 0
    }else{
        return -1
    }
} )
console.log(`Sorted bY start year `);
console.log(dev)
console.log();