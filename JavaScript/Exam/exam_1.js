let ar = [2,3,4,6,7,8,9,4,332,4,3,7,5];
let ar1 = [ 3,4,9,11,24,25 ];

let merged = ar.concat(ar1);

let newSet = [...new Set(merged)];
let temp = newSet;
console.log(newSet);

//sort using first
let sorted = newSet.sort( (a,b) => b-a );
console.log(sorted);

// second Way
// let anotherSort = temp.sort( ( first, second ) => {
//     if( first > second ){
//         return -1
//     }else{
//         return 1
//     }
// })

temp.reverse();
console.log("temp :",temp)

for(let key in temp){

    for(let check in temp){

        if( temp[ key ] > temp[ check ]){
            let swapingValue = temp[ key ];
            temp[ key ] = temp[ check ];
            temp[ check ] = swapingValue;
        }
    }
}

// for(let i=0;i<temp.length;i++){
    
//     for(let j=0 ; j < temp.length ; j++){
        
//         if( temp[i] > temp[j]){
            
//             let swapingValue = temp[i];
//             temp[i] = temp[j];
//             temp[j] = swapingValue;
            
//         }
//     }
// }
console.log(`bubble sort : `,temp);

// let removeDuplicate = merged.reduce( function(accum, item, index) {
//     console.log(item,accum)
//     if(accum.includes(item) == false){
//         accum.push(item)
//     }
    
    
// },[])
// console.log(removeDuplicate)


let a = 5;
for(let i=1; i<a; i++){
    console.log(`${" ".repeat(a-i)}${"* ".repeat(i)}`)
}
