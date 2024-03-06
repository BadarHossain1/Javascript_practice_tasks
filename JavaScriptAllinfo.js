// 1: How to declare a variable using let and const

const FathersName = 'Hossain'
let season = 'Winter'
season = 'Summer'

// 2:
// 6 basic conditions: >, <, >=, <=, ==, ===
// 4 basic logical operators: &&, ||, !, !=

// 3 steps to work with a condition:

if (FathersName == 'Hossain' && season == 'Winter') {
    console.log('You are my son')
}
else if (FathersName == 'Hossain' && season == 'Summer') {
    console.log('You are my son')
}
else {
    console.log('You are not my son')
}

// 3: Array

// Array Declare
// Index 
// Array length
// Array push
// Array pop
// Array shift, unshift
// Array slice
// Array splice
// Array concat
// Array join
// Array split
// Array reverse
// Array sort
// Array indexOf
// Array includes
// Array find
// Array filter
// Array map
// Array reduce
// Array forEach
// Array some is true or not like here is an example below
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(number => number % 2 === 0);

if (hasEvenNumber) {
    console.log('The array contains at least one even number');
} else {
    console.log('The array does not contain any even number');
}

// Array every is true or not 

const numbers1 = [1, 2, 3, 4, 5];

const allEvenNumbers = numbers1.every(number => number % 2 === 0);

if (allEvenNumbers) {
    console.log('The array contains only even numbers');
}
else {
    console.log('The array does not contain only even numbers');
}

// Array findIndex
// Array fill
// Array copyWithin
// Array flat
// Array flatMap
// Array from
// Array of
// Array isArray
// Array toString
// Array toLocaleString
// Array valueOf
// Array entries
// Array keys
// Array fromEntries
// Array copyWithin



// 4: For Loop

for (let i = 0; i < 5; i++) {
    console.log('Hello World');
}

//5: Function

function add(a, b) {
    return a + b;
}

const result = add(10, 20);

// 6: Object

const person = {
    name: 'Badar',
    age: 20,
    isStudent: true
};

const myName = person.name;

console.log(person.age);
console.log(person['age']);
console.log(person[myName]);



// 'almas', 5, true, {}, []
// '', false , null, undefined, NaN, 0
// check truthy or falsy

let myVar = 5;

if (myVar) {
    console.log('Truthy');
}
else if (!myVar) {
    console.log('Falsy');
}

// Ternary Operator

let food1 = 'Burger';
let money = 150;

let myFood = money > 100 ? 'Burger' : 'Bread';


// number to string

const num = 560;
const numStr = num + '';

// String to Number
const input = '560';
const inputNum = +input;

// Shortcut

let isActive = true;
const showUser = () => console.log('User is active');
const hideUser = () => console.log('User is not active');

isActive ? showUser() : hideUser();
isActive && showUser(); // User is active

isActive || hideUser(); 

isActive = !isActive; // isActive = false








