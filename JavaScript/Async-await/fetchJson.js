async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let result =await data.json();
    console.log(result);
}
fetchData();