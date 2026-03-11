// callback function is a function is passed as argument to another one and executed the argument Passed  one too
function collegeInfo(collage,course,callback){
    callback();
    console.log(`Studied ${course} at ${ collage}`)
}

function Dev(){
    let name="Deep";
    let age=23;
    console.log(`${name} and age : ${age} `);
}

function ujjval(){
    console.log(`Ujjval ANd Age: 30`);
}

console.log(collegeInfo("Sardar Patel University","MCa",Dev))
console.log(collegeInfo("Sardar Patel University","MCa",ujjval))
