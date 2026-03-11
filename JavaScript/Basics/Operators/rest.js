// Rest Parameter 
// Rest Parameter is defined in function parameter by triple dot(...) folloed by name of the array
// so you can write as many argument as you want then the REST parameter in function will create an array of arguments 
// You Must Define Rest PArameter Array Only At The ENd

function studentInfo(name, ...courses){    
    console.log(`${name} has Complted Total ${courses.length} Courses`);
    for(let course of courses){
        console.log(course);
    }
}

studentInfo("Deep","JavaScript","PHP","NOde.js","SQL","Java","Html","CSS");