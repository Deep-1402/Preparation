// generator function to use put astrc"*" along function keyword and then yeild keyword when you wnat the paty to execute it return value and "retrun" keyword to end the genrator functiion
// funcObj.next() will retrun objct :{ value: undefined/value, done: true/false },

function* divisibles( divisible ) {
    let num = 2
//    / for(let num = from; num <= to; num++  )
    while( num > 1){
        if(num % divisible == 0) {
            yield num
        }
        num+=1
        if( num == 70 ){
            return "Reached"
        }
    }
}
let divisibleNumber = divisibles( 11 ); 
console.log( divisibleNumber.next() );
console.log( divisibleNumber.next() );
console.log( divisibleNumber.next() );
console.log( divisibleNumber.next() );
console.log( divisibleNumber.next() );
console.log( divisibleNumber.next() );
console.log( divisibleNumber.next() );
console.log( divisibleNumber.next() );

