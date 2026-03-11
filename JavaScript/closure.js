// closures : inner function can use outer functions variable and parameters
function student(name,age,collage,course){
    function collegeInfo(){
        console.log(`${name} and age : ${age} is Studied ${course} at ${ collage}`)
    }
    return collegeInfo();
}
console.log(student("Deep",23,"Sardar Patel University","MCa"))
