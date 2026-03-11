function dev( temp ) {
    let posts=new Promise(function(resolve,reject){
        let booleanVar=temp;

        if(booleanVar)
            resolve("Promise Is Resolved!");
        else
            reject("Promise Is Rejected!!");

    })
    .then(
        (result) => console.log(`Then Block result : ${result}`),

        // (error) => console.log(`Then Block Error : ${error}`)
    )
    .catch((error) => console.log(`Catch block Error caught : ${error}.`))
    .finally(()=>console.log("Finally block Always Runs Promise Ended"));

    return posts;
}


dev(true);
