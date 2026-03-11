let dev=[1,"dev",true,{
    name:"ujjval",
    age:23
},null, [2,3] ];

for(let i=0;i<10;i++){
    console.log(i);
}

console.log();
for(let i=0 ; i < dev.length; i++){
    console.log(dev[i]);
}

console.log();
for(let key in dev){
    console.log(dev[key]);
}

console.log();
for(let item of dev){
    console.log(item)
}

console.log();
dev.forEach( (item, index) => {
    console.log(`item : " ${item} " is at index : ${index} `)
});
