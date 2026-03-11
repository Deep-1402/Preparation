// FOr Json Fetch Data
// => fetch method initiates HTTP request returns Responce object Takes Time Or Arrives IN Chunks (it takes time so we use Asynchronous(promise or Async-await)).
// => .json() method reads the fetch result body and parse into json (it takes time so we use Asynchronous(promise or Async-await)).
// Using "Await" You Are HAving Json Object To Use in code.

//Async-Await
// Async Always Witten Before Function and this function always return Promise even if you dont write promises in and simple return something and then you can apply all promises methods like then,catch,finally
// async function f() {  return 1; }
// f().then(alert); // 1

// Await keyword(Works only inside "async Function")
// await keyword makes promise wait(execution Pauses) untill the promise returns result
// in async function you are using try..catch block insted of catch block