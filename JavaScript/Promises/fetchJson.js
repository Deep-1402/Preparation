function dev() {
    // let posts=new Promise(function(resolve,reject){
    //     resolve(fetch('https://jsonplaceholder.typicode.com/posts'));
    // }) 
    // or
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
        (result) =>{
             result.json();
        } ,
    )
    .then(data => console.log(data))
    .catch((error) => console.log(`Catch block Error caught : ${error}.`))
    .finally(()=>console.log("Finally block Always Runs Promise Ended"));

    // return posts;
}

dev();