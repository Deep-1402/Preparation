let dev = {
    name : "Dev",
    age : 23,
    designation: "MERN Stack Developer",
    companey: "Netclues", 
    startYear:2000,
    endYear:2010,
};

function college( name , establishYaer){
    console.log( `Myself "${ this.name }" And Age :- "${ this.age }" and Works "${ this.companey }" And Studied In "${name}" Establish In ${ establishYaer }`);
}

// calll(object, argfunc1, argfunc2, ...) method allows To call function immediatey with access specifuc value(inside the object) using "this" 
college.call( dev, "SPU", 1998 );

// apply( object , [array of argumentFunction ] ) just like call() but only two arguments
let argumentsAarray =  [ "SPU", 1999 ];
college.apply( dev, argumentsAarray );

// bind() just like call but it dosent call function immmediately & it just return new function with sepecifired Arguments. you have to call specific bind object

let newFunction = college.bind( dev, "SPU", 2000 ); //creates new function
newFunction();  //call new function
