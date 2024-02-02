const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const rev= [];
for(let i = 0; i<colors.length;i++)
{
    const string = colors[i];
    rev.unshift(string);

}
// console.log(rev);

// question 2

const numbers = [12, 98, 5, 41, 23, 78, 46];

const even = [];

for(let i = 0;i<numbers.length;i++){
    const num = numbers[i];
    if(num%2==0){
        // even[i] = num;
        even.push(num);
    }
}
// console.log(even);

// question 3
var number = ['Tom', 'Tim', 'Tin', 'Tik'];

// console.log(number.join(''));

// question 4
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';

split = statement.split(' ');
// console.log(split);

// console.log(split.reverse().join(' ') );

const rev1 = [];
for(let i = 0;i<split.length;i++){
    const word = split[i];
    rev1.unshift(word);
}
console.log(rev1);
         
