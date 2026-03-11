// equvation = 2x2 + 3X + 5 =;
let a = 1;
let b = -3;
let c = 10;
let rootOne, rootTwo;

// discrimainate
let discriminant = Math.pow( b, 2 ) - (4 * ( a * c));

// find both root Value
if( discriminant > 0 ){
    rootOne = ( ( ( - b ) + ( Math.sqrt( discriminant ) )  )  / ( 2 * a) )
    
    rootTwo = ( ( ( - b ) - ( Math.sqrt( discriminant ) )  ) / ( 2 * a) )
    
    console.log( `Equvation ${a}X2 + ${b} + ${c} Roots Are ${rootOne} & ${rootTwo}` )
    
}else if( discriminant == 0 ){
    rootOne = rootTwo = ( ( - b ) / ( 2 * a) );

    console.log( `Equvation ${a}X2 + ${b} + ${c} Roots Are ${rootOne} & ${rootTwo}` )

}else{
    let first =  (( - b ) / ( 2 * a)).toFixed(2);
    let second = ( Math.sqrt( - ( discriminant ) ) / ( ( 2 * a) ) ).toFixed(2);
    // rootOne = ( ( - b ) / ( 2 * a) ) + ( ( Math.sqrt( Math.pow( b, 2 ) + (4 * ( a * c)) ) ) / ( ( 2 * a) ) );

    // rootTwo = ( ( - b ) / ( 2 * a) ) - ( ( Math.sqrt( - ( Math.pow( b, 2 ) + (4 * ( a * c)) ) ) ) / ( ( 2 * a) ) );
    console.log( `Equvation ${a}X2 + ${b} + ${c} Roots Are "${first} + ${second}i " & "${first} - ${second}i "` )
}