//3 Given a number n ( n >= 0 ). Print n-th Fibonacci number. (Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8 ..., an
//= an-1 + an-2)

function fib (c) {
    let count = 0;
    let first = 0;
    let second = 1;
    for (let i = 2; i <= c; i++) {
       count = first + second;  
       first = second ;
       second =  count;  
    }
    return count;

}

console.log(fib(0))
console.log(fib(2))
console.log(fib(10))
console.log(fib(20))