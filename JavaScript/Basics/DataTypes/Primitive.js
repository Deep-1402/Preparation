//There Are Three Types of Variable Declaration 
//1.Var 2.let 3.const
//1.var : global Scoped, can be redecalred and reassign without error and hoisted(use before declaration (undefiend) untill declaration reached)
// 2.let : block scoped(access within the block) ,Redeclared and reassigned within the scope and declaration scope is hoisted but you can't use it(Reference Error)
// 3.Const : (block Scoped),declaration scope is hoisted but Can't use it , can not Reassign and ReDeclared
// 1.Primitive Data Types:
let stringVar="Textual Data";
console.log(`${stringVar} : DataType is : ${typeof stringVar}`);
let numberVar=23;
console.log(`${numberVar} : DataType is : ${typeof numberVar}`);
let BigIntVar=900719925124740n;
console.log(`${BigIntVar} : DataType is : ${typeof BigIntVar}`);
let booleanVar=1<2;
console.log(`${booleanVar} : DataType is : ${typeof booleanVar}`);
let undefiendVar;
console.log(`${undefiendVar} : DataType is : ${typeof undefiendVar}`);
let nullVar=null;
console.log(`DataType is : ${nullVar}`);
// 2.Non Primitive Data Type : Object, array, And Functions