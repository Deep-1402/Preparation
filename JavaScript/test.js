// let promise = new Promise(function(resolve, reject) {
//     // resolve("done");
  
//     setTimeout(() => resolve(console.log("Resolveed")),3000); // ignored
//     // reject(new Error("…")); // ignored
//   });


let demo=[33,14,8,12,55,6];
console.log(demo)
let sorted=demo.sort( ( a,b) => {
  console.log(`a : ${a} ,b : ${b} : ${a-b}`)
  return a-b
} )
console.log(sorted)