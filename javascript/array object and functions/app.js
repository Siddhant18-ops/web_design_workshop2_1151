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
console.log(numbers.length) ;// 5??
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
    // map reduce filter on objects students marks 
let students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 92 },
    { name: 'Charlie', marks: 78 },
];
// map to get the names of students
let studentNames = students.map(student => student.name);
console.log(studentNames) ;// ['Alice', 'Bob', 'Charlie']
// filter to get students with marks greater than 80
let topStudents = students.filter(student => student.marks > 80);
console.log(topStudents) ;// [{ name: 'Alice', marks: 85 }, { name: 'Bob', marks: 92 }]
// reduce to calculate the total marks of all students
let totalMarks = students.reduce((total, student) => total + student.marks, 0);
console.log(totalMarks) ;// 255

console.log(mixedobject.name) ;// John)
console.log(mixedobject.age) ;// 25
console.log(mixedobject.hobbies) ;// ['reading', 'gaming', 'coding']    
console.log(mixedobject.address.city) ;// New York
console.log(mixedobject.address.zip) ;// 10001  
// object inside array
let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
console.log(people[0]) ;// { name: 'Alice', age: 30 }
console.log(people[1]name) ;// Bob
console.log(people[2].age) ;// 35
// array inside object
let company = {
    name: 'Tech Corp',
    employees: ['Alice', 'Bob', 'Charlie']
};
console.log(company.name) ;// Tech Corp
console.log(company.employees) ;// ['Alice', 'Bob', 'Charlie']
console.log(company.employees[0]) ;// Alice
console.log(company.employees[1]) ;// Bob
console.log(company.employees[2]) ;// Charlie
// for..of loop on array of objects
let students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 92 },
    { name: 'Charlie', marks: 78 },
];
for (let student of students) {
    console.log(student.name + " is " + student.age + " years old.");
}
// by templeate literals
console.log(`${student.name} is ${student.age} years old.`);
// for..of loop on object with array
let company = {
    name: 'Tech Corp',
    employees: ['Alice', 'Bob', 'Charlie']
};
for (let employee of company.employees) {
    console.log(employee + " works at " + company.name);
    // by templeate literals
    console.log(`${employee} works at ${company.name}`);
}
// for..in loop works on keys of object
// for..in loop on object with array
let company = {
    name: 'Tech Corp',
    employees: ['Alice', 'Bob', 'Charlie']
};
for (let key in company) {
    console.log(key + ": " + company[key]); 
}
// for..in loop on object with object