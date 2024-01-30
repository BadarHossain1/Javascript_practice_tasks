const country = 'Bangladesh';
const desh = 'kanaighat';
const district = new String('Sylhet');
console.log(country.length);
console.log(country[0]);

// string is immutable. you cant change word by index number like you can do in array

const school = 'BISCJ'; //This is a mixed case string
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const drink = '  coffee  ';
console.log(drink.trim()); //trim() removes extra spaces from both sides of a string


const address = "Jeddah, Al Rabwah";
const part = address.slice(0,6);
console.log(part);

const sentence = "I am a good and a hard working person";
console.log(sentence.split('  '));
console.log(sentence.split('a'));

const FriendStr = 'Rahim, jashim, kadim, lahim, sahim';
const friends = FriendStr.split(',');
console.log(friends);

let array = ['Rahim', 'jashim', 'kadim', 'lahim', 'sahim'];
console.log(array.join('|'));


const first = "Badar";
const last = "Hossain";

const fullname = first.concat(" ").concat(last);


const sent = "Badar is Good";
let reverse = '';
for(const letter of sent){
    reverse = letter + reverse;

}
console.log(reverse);


const lekha = 'ami bangladesher jonogon';
const reversed = lekha.split('').reverse();


//object
// non-primitive
const bottle = {
    brand:'labbaid',
    price: 50,
    color: ['yellow', 'black', 'red'],
    isCleaned: true,
    exams: {
        first: 'math',
        second: 'english',
        third: 'bangla'
    },
    
}

console.log(bottle.color[1]);
console.log(bottle.exams.third);

//bracket Notation

console.log(bottle['brand']);

bottle['price'] = 100;
console.log(bottle.price);

delete bottle.isCleaned;