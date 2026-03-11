//Non-primitive Datatype
//Object
let Dev={
    name:"Deep Patel",
    age:23,
    Designation:"MERN Stack Trainee"
};
console.log(`Data Type is ${typeof Dev}`);

//Arrray
let arrayDev=[1,"Deep",true,null];
console.log(`${arrayDev} :data type is : ${typeof arrayDev}`);
console.log(`${arrayDev} :real data type is array: ${Array.isArray(arrayDev)}`);

//functions
console.log(`Data type Is : ${typeof(function (){})}`);