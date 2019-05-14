// console.log('Hello from the console');
// console.log(123);

// let variable = "Hello from variable";
// console.log(variable);
// let array = [4,5,6,7];
// console.log(array);
// let object = {a:1, b:2};
// console.log(object);
// console.table(object);
// console.error("This is an error");

// // var
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // init var 
// var greeting; // might do this in if conditional
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// var camelCase = 'Camel Case';
// console.log(camelCase);
// var PascalCase = 'Pascal Case';
// console.log(PascalCase);

// let
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const 
// const name = 'John Doe';
// console.log(name);
// // cannot reassign
// name = 'Steve Smith';
// console.log(name);
// // must assign value
// const name;
// can change data within value assigned to const, but cannot reassign value of const
// const person = {
//     name: 'John',
//     age: 30
// };
// console.log(person);
// person.name = 'Sara';
// console.log(person);
// const numbers = [1,2,3,4];
// numbers.push(5);
// console.log(numbers);

// PRIMITIVES
// string
const name = 'John Doe';
console.log(typeof name);
// number
const age = 34;
console.log(typeof age);
// boolean
const hasKids = false;
console.log(typeof hasKids);
// null
const car = null;
console.log(typeof null);
// undefined
let test;
console.log(typeof test);
// symbol
const mySymbol = Symbol();
console.log(typeof mySymbol);
// REFERENCE TYPES - Objects
const hobbies = ['music', 'movies'];
console.log(typeof hobbies);
const address = {
    city: 'Rockville',
    state: 'MD'
};
console.log(typeof address);
const date = new Date();
console.log(typeof date);