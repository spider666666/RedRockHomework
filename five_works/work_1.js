//循环实现阶乘
function factorial(n){
    let result = 1;
    for(let i=1;i<=n;i++){
        result *= i;

    }
    return result;
}
let ret = factorial(3)
console.log(ret) 

//递归实现阶乘
function factorial2(n){
    if (n == 1){
        return 1;
    }
    else{
        return n*factorial2(n-1);
    }
}
let ret2=factorial2(3)
console.log(ret2);