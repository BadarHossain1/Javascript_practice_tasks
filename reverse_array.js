const numbers = [23,56,78,97,89];

numbers.reverse();
console.log(numbers);


// use unshift to reverse the array using loop
const numbers1 = [23,56,78,97,89];
const reversed = [];
for(const number of numbers1){
    reversed.unshift(number);
}
// console.log(reversed);


const person = ["Badar","Efaj", 'Hasan', 'Farhan'];

const person1 = person.sort();
console.log(person1);