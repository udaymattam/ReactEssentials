function fun1(num1){
    let a=num1;
    return function fun2(num2){
        let b=num2;
        return a*b;
    }
}
console.log(fun1(10)(20));
