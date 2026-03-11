console.log(1);

let Dev = new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log(2)), 2000);
});

Dev.then(
    ()=> console.log(3)
)