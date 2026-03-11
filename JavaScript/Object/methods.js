let dev = {
    name : "Dev",
    age : 23,
    designation: "MERN Stack Developer",
    companey: "Netclues", 
    startYear:2000,
    endYear:2010,
    get experience() {
        return this.endYear - this.startYear;
    },

    set experience(years) {
        this.endYear = this.startYear + years;
    }
}
let car = {type:"Fiat", model:"500", color:"white"}

// object.assign( target, source) merge Object
let mergerd = Object.assign( car, dev );
console.log( mergerd );

// returns an array of key value pair 
let MultiArrray = Object.entries(dev);
for (const [key, value] of MultiArrray) {
    console.log(`${key} => ${value}`);
  }

// Object.keys(object) returns only keys array
let keys = Object.keys(dev);
console.log( keys );

// Object.values(object) returns only values array
let values = Object.values( dev );
console.log( values );

// check Object has propertyb isig Object.hasOwn(obj, Propertyname) returns boolean
let property = "age";
if( Object.hasOwn( dev, property) ){
    console.log( `Object Dev Haave Property Name "${property}" ` )
}else{
    console.log(`Object dosent have ${property} `)
}

// compare two onbjects
let devShallow = dev;
let ifSame = ( Object.is( dev, car) ) ? "Both Are SAme Objetc" : "Not Same";
console.log( ifSame );


// Object Get()
console.log(dev.experience);  

// Using the setter
dev.experience = 15;

// console.log(dev.endYear);     
console.log(dev.experience); 

//  convert Object to String
convertedStr = JSON.stringify(dev);
console.log(dev , `Converted inro str ${convertedStr}`);