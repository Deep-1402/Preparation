function factorial( num ){
    if(num > 0){
        return  num * factorial(num - 1);
    }else if( num == 0 ){
        return 1;
    }else{
        return "ENter Positive Number";
    }
}
num = 6;
console.log(`Factorial of "${num}" Using Recursion function :`,factorial(num))