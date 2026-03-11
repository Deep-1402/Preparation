let dev = [
    { name: "Deep", age: 20, designation: "MERN Stack Developer", companey: "Netclues", startYear:2000, endYear:2010 },
    { name: "Jigo", age: 18, designation: "MERN Stack Developer" , companey: "Excelsier", startYear:2012, endYear:2015}, 
    { name: "Ujjavl", age: 23, designation: "Dot Net Developer" , companey: "IBM", startYear:2002, endYear:2008 },
    { name: "ketul", age: 27, designation: "Data Scirntist" , companey: "Accuenture", startYear:1999, endYear:2014},
    { name: "Neel", age: 22, designation: "Data Scirntist" , companey: "TCS", startYear:2010, endYear:2014},
];

// iterate with for... of
for(let key of dev){
    console.log(key);
}
console.log()
// for.... in
for(let key in dev){
    console.log(dev[key])
}
console.log()
// forEach
Object.keys(dev).forEach( ( item, index, array) =>{
    console.log(dev[item]);
})
console.log(Object.keys(dev.name))