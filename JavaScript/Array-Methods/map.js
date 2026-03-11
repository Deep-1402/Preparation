// array.map(function(item,index,array){})
// it creates new array and itesrate each element and apply callback function which returns element 
// you can chain other methods with map like filter or reduce after or before map

let dev = [
    { name: "Deep", age: 20, designation: "MERN Stack Developer", companey: "Netclues", startYear:2000, endYear:2010 },
    { name: "Jigo", age: 18, designation: "MERN Stack Developer" , companey: "Excelsier", startYear:2012, endYear:2015}, 
    { name: "Ujjavl", age: 23, designation: "Dot Net Developer" , companey: "IBM", startYear:2002, endYear:2008 },
    { name: "ketul", age: 27, designation: "Data Scirntist" , companey: "Accuenture", startYear:1999, endYear:2014},
    { name: "Neel", age: 22, designation: "Data Scirntist" , companey: "TCS", startYear:2010, endYear:2014},
];


// get only employee name
let emplyeeNames = dev.map( (item) => item.name );
console.log(`Here Are Only Emplyee `,emplyeeNames)

// get Multiple Colums As You Want Readable 
let employeeInfo = dev.map( ( item ) => {
    return `${item.name} is a ${item.designation} since ${item.startYear}`
})
console.log()
console.log(`More Efficinet iNfo `,employeeInfo);

// aplly More filters On it like i want efficint Employee Information Whom started Working between 2000 to 2010
let employees = dev.filter( ( item ) => item.startYear >=2000 && item.startYear <=2010 )
                    .map( (item) => `${item.name} is a ${item.designation} since ${item.startYear}` )
console.log()
console.log(" Employee Who Started between 2000 to 2010",employees);