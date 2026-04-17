// array data type
let numbers = [1, 2, 3, 4, 5]
console.log(numbers[0]); // 1
console.log(numbers[1]) ;// 2
console.log(numbers[2]) ;// 3
console.log(numbers[3]) ;// 4
console.log(numbers[4]) ;// 5
// array with multiple data types
let mixedArray = [1, 'hello', true, null, undefined, { name: 'John' }, [1, 2, 3]]
console.log(mixedArray[0]) ;// 1
console.log(mixedArray[1]) ; // 'hello'
console.log(mixedArray[2]) ;// true
console.log(mixedArray[3]) ;// { name: 'John' }
console.log(mixedArray[4]) ;// [1, 2, 3]
// to find the length of an array
console.log(numbers.length) ;// 5
console.log(mixedArray.length) ;// 5
// normal function with no parameters
function greet() {
    console.log('Hello, World!');
}
greet() ;// Hello, World!
// normal function 
function add(a, b) {
    return a+b;
}
console.log(add(2, 3)) ;// 5
// funtion expression
let divide = function(a, b) {
    return a/b;
};
console.log(divide(10, 2)) ;// 5
// arrow function with no parameters
let sayHi = () => {
    console.log('Hi!');
}
sayHi(); // Hi!
// arrow function with single parameters
let square = x => x * x;
console.log(square(5)) ;// 25
// arrow function with multiple parameters
let multiply = (a, b) => a * b;
console.log(multiply(4, 5)) ;// 20      
